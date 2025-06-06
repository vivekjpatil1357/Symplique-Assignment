# Remind-me-later API

A simple API for a reminder application that allows users to set up reminders with messages.

## Features

- Create reminders with date, time, and message

- MongoDB for data storage

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose


## Installation

1. Clone the repository
```
git clone https://github.com/vivekjpatil1357/Symplique-Assignment.git
cd remind-me-later
```

2. Install dependencies
```
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/remind-me-later
```

## Running the Application

### Development Mode
```
npm run dev
```


## API Endpoints

### Create a Reminder
- **URL**: `/api/reminders`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "date": "2025-06-10",
    "time": "14:30",
    "message": "Meeting with the team"
  }
  ```
- **Success Response**: `201 Created`
  ```json
  {
    "success": true,
    "message": "Reminder created successfully",
    "data": {
      "_id": "60d21b4667d0d8992e610c85",
      "date": "2025-06-10T00:00:00.000Z",
      "time": "14:30",
      "message": "Meeting with the team",
      "createdAt": "2025-06-06T10:00:00.000Z"
    }
  }
  ```
