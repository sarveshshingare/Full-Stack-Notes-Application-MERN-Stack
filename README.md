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

```plaintext
Full-Stack-Notes-Application-MERNStack
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
└── frontend
    ├── src
    │   ├── components
    │   ├── pages
    │   ├── services
    │   └── App.js
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
![Login Page](./screenshots/login.png)

### Notes Dashboard
![Notes Dashboard](./screenshots/dashboard.png)

### Note Creation
![Note Creation](./screenshots/signup.png)

## License

This project is licensed under the MIT License.

