# Full-Stack Notes Application (MERN Stack)

This project is a full-stack Notes application built with the MERN (MongoDB, Express.js, React.js, and Node.js) stack. It allows users to create, edit, and delete notes, making it a simple and effective way to keep track of information.

## Features

- **User Authentication**: Secure sign-up, login, and authentication using JWT tokens.
- **CRUD Operations**: Users can create, read, update, and delete their notes.
- **Responsive UI**: Built with React.js and CSS, providing a smooth and intuitive user experience.
- **RESTful API**: The backend provides a RESTful API to handle all data interactions.

## Technologies Used

### Frontend:
- React.js
- Axios (for HTTP requests)
- CSS / Material UI for styling

### Backend:
- Node.js
- Express.js
- MongoDB & Mongoose (for database operations)
- JSON Web Token (JWT) for authentication

## Prerequisites

- **Node.js** (v14 or later)
- **MongoDB** (set up a MongoDB cluster or local instance)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sarveshshingare/Full-Stack-Notes-Application-MERNStack.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Full-Stack-Notes-Application-MERNStack
   ```

3. **Install dependencies for the backend**:
   ```bash
   cd backend
   npm install
   ```

4. **Set up environment variables**:

   Create a `.env` file in the `backend` directory and add the following:

   ```env
   ACCESS_TOKEN_SECRET={your-access-token}
   ```

5. **Start the backend server**:
   ```bash
   npm start
   ```

6. **Install dependencies for the frontend**:
   ```bash
   cd ../frontend
   npm install
   ```

7. **Start the frontend development server**:
   ```bash
   npm start
   ```

8. **Access the application**:
   Open your browser and navigate to `http://localhost:{port-number}`.

## Folder Structure


```
FULL-STACK-NOTES-APPLICATION-MERN-STACK
├── Backend
│   ├── models               # Mongoose models for MongoDB
│   ├── node_modules         # Node.js dependencies
│   ├── .dockerignore        # Docker ignore file
│   ├── .env                 # Environment variables
│   ├── .gitignore           # Git ignore file
│   ├── config.json          # Configuration file for MongoDB connection
│   ├── Dockerfile           # Dockerfile for backend
│   ├── index.js             # Entry point for backend
│   ├── package-lock.json    # Lock file for dependencies
│   ├── package.json         # Backend project dependencies
│   └── utilities.js         # Utility functions for backend
├── Frontend
│   ├── dist                 # Build directory for static files
│   ├── node_modules         # Node.js dependencies for frontend
│   ├── public               # Public assets (e.g., index.html)
│   ├── src                  # Source code for React app
│   ├── .gitignore           # Git ignore file for frontend
│   ├── Dockerfile           # Dockerfile for frontend
│   ├── eslint.config.js     # ESLint configuration
│   ├── index.html           # Main HTML file for React app
│   ├── jsconfig.json        # JavaScript configuration for frontend
│   ├── nginx.conf           # NGINX configuration file for serving frontend
│   ├── package-lock.json    # Lock file for frontend dependencies
│   ├── package.json         # Frontend project dependencies
│   ├── postcss.config.js    # PostCSS configuration
│   ├── tailwind.config.js   # Tailwind CSS configuration
│   └── vite.config.js       # Vite configuration for React app
├── Screenshots              # Folder containing screenshots for README
├── README-for-dockerizing-the-app.md  # Instructions for Dockerizing and deploying the app
└── README.md                # Main README file
```

## API Endpoints

### Auth

- **POST** `/create-account` - Register a new user
- **POST** `/login` - Authenticate an existing user

### Notes

- **GET** `/get-all-notes` - Fetch all notes for a user
- **POST** `/add-note` - Create a new note
- **PUT** `/edit-note/:id` - Update a specific note
- **DELETE** `/delete-note/:id` - Delete a specific note
- **PUT** `/update-note-pinned/:id` - Update pin status on a note
- **GET** `/search-notes` - Search notes from the search bar

## Future Enhancements

- Implement note categories and tags
- Add reminders for notes

### Dockerizing and Deploying the Application on EC2

For a comprehensive guide on Dockerizing this application and deploying it on an AWS EC2 instance, please refer to the [README for Dockerizing the App](./README-for-dockerizing-the-app.md).


## Application Screenshots

### Login Page

![Login Page](./Screenshots/login.png)

### Notes Dashboard
![Notes Dashboard](./Screenshots/dashboard.png)

### Note Creation
![Note Creation](./Screenshots/signup.png)

## License

This project is licensed under the MIT License.
