# Next.js CRUD Application for Users

This is a simple CRUD (Create, Read, Update, Delete) application for managing user data, built with Next.js.

## Features

- **Create**: Add new users with name.
- **Read**: View a list of all users.
- **Update**: Edit existing user information.
- **Delete**: Remove users from the system.

## Project Structure

| src
├── db # Database
├── api # API routes for CRUD operations
│ └── users # User routes handlers
├── types # Types
└── utils # Global utils files

## API Routes

The application includes API routes for performing CRUD operations on users:

`GET /api/users` - Fetch all users
`POST /api/users` - Create a new user
`GET /api/users/[id]` - Fetch a user by ID
`PUT /api/users/[id]` - Update a user by ID
`DELETE /api/users/[id]` - Delete a user by ID

## DTO Contract

The application follows a DTO (Data Transfer Object) pattern for communication between the client (consumer) and the server. Here's the DTO contract for creating a new user:

### Request (Client -> Server)

The client sends a POST request to /api/users with the following payload:

```json
{
  "name": "John Doe"
}
```

- name: A string representing the name of the user.

### Response (Server -> Client)

The server responds with the following payload:

```json
{
    {
        "id":"1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        "name": "John Doe"
    }
}
```

name: A string representing the name of the user.

- id: A unique string identifier for the user.
- name: The name of the user (same as in the request).

This contract ensures that any client communicating with the server to create a user must send an object with a name field, and the server will respond with the user's id and name.
