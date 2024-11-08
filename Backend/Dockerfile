# Use the official Node.js image as a base
FROM node:20.13.1

# Create and set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Define environment variables if needed
ENV NODE_ENV=production

# Start the application
CMD ["node", "index.js"]
