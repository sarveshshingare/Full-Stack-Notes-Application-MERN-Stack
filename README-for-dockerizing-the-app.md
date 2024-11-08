## Steps to Dockerize and Deploy the MERN Notes Application on EC2

### Prerequisites
- **AWS EC2 instance**: Make sure you have an EC2 instance (preferably Amazon Linux 2 or Ubuntu) with Docker installed.
- **MongoDB Cluster**: Set up a MongoDB Atlas cluster or a self-hosted MongoDB instance. Save the connection string for later.
- **Docker Hub account**: This will be used to store and pull Docker images.

### 1. Dockerize the Application

#### Backend Dockerization

1. **Create a `Dockerfile`** in the `backend` directory:

   ```Dockerfile
   # Use Node.js as the base image
   FROM node:20.13.1

   # Set working directory
   WORKDIR /app

   # Copy package.json and package-lock.json
   COPY package*.json ./

   # Install dependencies
   RUN npm install

   # Copy the entire project
   COPY . .

   # Expose port 8000 for the backend API
   EXPOSE 8000

   # Start the backend server
   CMD ["node", "index.js"]
   ```

2. **Build and Push the Docker Image**:

   Run the following commands from the `backend` directory:

   ```bash
   docker build -t your-dockerhub-username/mern-todo-app-backend .
   docker push your-dockerhub-username/mern-todo-app-backend
   ```

#### Frontend Dockerization

1. **Create a `Dockerfile`** in the `frontend` directory:

   ```Dockerfile
   # Use Node.js to build the frontend
   FROM node:20.13.1 as build

   # Set working directory
   WORKDIR /app

   # Copy package.json and package-lock.json
   COPY package*.json ./

   # Install dependencies
   RUN npm install

   # Copy the entire project and build it
   COPY . .
   RUN npm run build

   # Use NGINX to serve the built files
   FROM nginx:alpine
   COPY --from=build /app/dist /usr/share/nginx/html

   # Expose port 80 for frontend
   EXPOSE 80

   # Start NGINX
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Build and Push the Docker Image**:

   Run the following commands from the `frontend` directory:

   ```bash
   docker build -t your-dockerhub-username/mern-todo-app-frontend .
   docker push your-dockerhub-username/mern-todo-app-frontend
   ```

### 2. Set Up the EC2 Instance

1. **Launch an EC2 Instance**:
   - Use Amazon Linux 2 or Ubuntu.
   - Configure the security group to allow inbound rules for:
     - HTTP (port 80)
     - Custom TCP (port 8000 for backend)
     - SSH (port 22) for access.

2. **Connect to the Instance**:
   - SSH into the instance using your key pair:
     ```bash
     ssh -i /path/to/your-key.pem ec2-user@your-ec2-public-ip
     ```

3. **Install Docker**:
   - Update the package index and install Docker:
     ```bash
     sudo yum update -y # for Amazon Linux
     sudo amazon-linux-extras install docker -y
     ```
   - Start Docker and add your user to the Docker group:
     ```bash
     sudo service docker start
     sudo usermod -aG docker ec2-user
     ```

4. **Log Out and Log Back In** to apply Docker permissions.

### 3. Pull and Run the Docker Containers on EC2

#### Backend Setup

1. **Set Environment Variables for Backend**:
   - You can either create an `.env` file or pass environment variables directly in the Docker run command. Example with direct variables:
     ```bash
     docker run -d -p 8000:8000 \
       -e MONGO_CONNECTION_STRING="your-mongodb-connection-string" \
       -e ACCESS_TOKEN_SECRET="your-access-token-secret" \
       your-dockerhub-username/mern-todo-app-backend
     ```

2. **Common Issues and Solutions**:
   - **CORS Errors**: Set CORS configuration in the backend to allow requests from your frontend’s IP:
     ```javascript
     app.use(cors({ origin: "http://your-frontend-ip", credentials: true }));
     ```
   - **Security Group Rules**: Ensure port `8000` is open in the EC2 security group for external access.

#### Frontend Setup

1. **Run the Frontend Container**:
   ```bash
   docker run -d -p 80:80 your-dockerhub-username/mern-todo-app-frontend
   ```

2. **Frontend API URL**:
   - Ensure the frontend points to the backend’s public IP. Update the API URL in the frontend code with an environment variable like `REACT_APP_API_URL`.

3. **Build and Push Updated Frontend Image (if needed)**:
   - If you had to update the API URL, rebuild and push the frontend image as shown above.

### 4. Verify the Application

- Access the frontend in your browser at `http://your-ec2-public-ip`.
- The frontend should be able to communicate with the backend API at `http://your-ec2-public-ip:8000`.

### Troubleshooting Common Issues

1. **No Response from Backend on Port 8000**:
   - Verify EC2 security group allows inbound traffic on port `8000`.
   - Check if the container is running and listening on port `8000`:
     ```bash
     docker ps
     ```

2. **CORS Errors**:
   - If you encounter CORS issues, make sure the backend is configured to allow the frontend’s origin.

3. **Environment Variable Issues**:
   - If the backend is failing to start, check if the `MONGO_CONNECTION_STRING` and `ACCESS_TOKEN_SECRET` are correctly set in the Docker run command or `.env` file.

4. **Logs Not Showing Expected Output**:
   - View container logs for debugging:
     ```bash
     docker logs <container_id>
     ```

5. **Frontend Fails to Connect to Backend**:
   - Confirm that the API URL in the frontend points to the correct public IP and port of the backend.
   - Rebuild the frontend image with the updated API URL if necessary.

### Summary

1. **Dockerize the backend and frontend separately** with Dockerfiles.
2. **Push images to Docker Hub**.
3. **Run the backend and frontend containers on EC2**, ensuring correct environment variables, ports, and CORS settings.
4. **Update security group rules** on EC2 to allow inbound traffic on necessary ports (80 and 8000).
5. **Test and troubleshoot** as needed with `docker logs`, EC2 security settings, and CORS configurations.

This setup should allow you to Dockerize and deploy your MERN stack application on an EC2 instance while addressing common issues that might arise. 

### 🎉 Congratulations on successfully Dockerizing and deploying your Full-Stack Notes Application on AWS EC2! 🎉
