# PERN Stack Todo Application

A full-stack todo application built with the PERN stack (PostgreSQL, Express, React, Node.js). Features a modern UI with real-time updates, RESTful API, and persistent storage.

## Features

- ✨ Create, read, update, and delete todos
- 🎨 Modern, responsive UI with Tailwind CSS
- 🔄 Real-time updates
- 🔒 Input validation and error handling
- 📱 Mobile-friendly design

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **API**: RESTful endpoints
- **Tools**: dotenv for configuration

## Prerequisites

Before you begin, ensure you have:
- Node.js installed (v14+ recommended)
- PostgreSQL installed and running
- A PostgreSQL database created for the project

## Setup Instructions

### 1. Database Setup

Create a new PostgreSQL database and run:

```sql
CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL
);
```

### 2. Environment Configuration

Create a `.env` file in the server directory:

```env
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_db_name
PORT=5000
```

### 3. Server Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Start the server
npm start
```

### 4. Client Setup

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start the development server
npm start
```

The application should now be running at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## API Documentation

### Endpoints

| Method | Endpoint      | Description         | Request Body    | Response        |
|--------|--------------|-------------------|----------------|-----------------|
| GET    | /api/todos   | Get all todos     | -              | Array of todos |
| GET    | /api/todos/:id | Get todo by ID    | -              | Single todo    |
| POST   | /api/todos   | Create new todo   | {description}  | Created todo   |
| PUT    | /api/todos/:id | Update todo      | {description}  | Updated todo   |
| DELETE | /api/todos/:id | Delete todo      | -              | Success message |

### Example API Response

```json
{
  "todo_id": 1,
  "description": "Complete project documentation"
}
```

## Project Structure

```
PERN_TODO/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   └── index.js      # Entry point
├── server/                # Node.js backend
│   ├── routes/           # API routes
│   ├── db.js            # Database configuration
│   └── index.js         # Server entry point
└── README.md
```

## Development

- The backend uses Express for RESTful API endpoints
- PostgreSQL handles data persistence
- React frontend with Tailwind CSS for styling
- Environment variables manage configuration
- Error handling and input validation included

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.