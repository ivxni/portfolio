# Scrum Poker Web App for diconium "dicopoker" – Context & Architecture

This document provides an overview of the Scrum Poker web application, detailing the overall flow, features, and tech stack. It is designed to help developers understand the project requirements, structure, and implementation details at a high level.

---

## 1. Introduction

The main purpose of this web application is to enable development teams and project managers to estimate story points in a Scrum Poker game. The app features:

- **Single Sign-On (SSO) with Microsoft** (intern-use only)
- **Dashboard** for creating or joining rooms
- **Real-time multiplayer Scrum Poker sessions** using Socket.io
- **Modern 2025 UI design** with accent color `#ea591b` and white background
- **React (frontend)** + **Node.js/Express (backend)** + **MongoDB (database)**

## Tech Stack

- Frontend: React with JSX and React Router DOM
- Backend: NodeJS express
- Databbase: MongoDB
- UI: SCSS
- AI Processing: Claude-3.7-sonnet

---

## 2. High-Level Features

1. **Microsoft SSO Authentication Only**  
   - Users can only sign in via Microsoft SSO for internal company usage.  
   - Once authenticated, a new user record is created in the database (if first sign-up).  
   - Access to the dashboard is only possible after successful authentication.  

2. **Dashboard**  
   - After logging in for the first time, the user is directed to the main dashboard.  
   - The dashboard initially shows a landing page with a main image (representing the game area) and two buttons:
     - **Create Room**
     - **Join Room**  

3. **Profile Page**  
   - After first-time sign-up via SSO, each user is automatically given a unique UUID.  
   - A user can set or update their nickname in the profile page.  
   - The profile page shows user details (email, nickname, etc.).  

4. **Room Management**  
   - **Create Room**:  
     - The user is redirected to a "create room" page.  
     - Only one **Game Type** is currently supported: `Fibonacci`.  
     - The user inputs a **Room Name**, then clicks **Create Room**.  
     - Each new room has:
       - A unique UUID
       - A 5-letter **Join Code** (e.g., `ABCDF`)  
     - The room creator is automatically assigned as the **Scrum Master**.  
   - **Join Room**:  
     - Users can join existing rooms by entering a valid 5-letter join code.  

5. **Scrum Poker Game**  
   - **Gameplay**:
     - Once in a room, the players see a large "table" area in the middle, containing:
       - A **Reveal Cards** button
       - A **Timer** (controlled by the Scrum Master)  
     - Around the table, each player is displayed as an **unrevealed card** until the timer ends or until the Scrum Master reveals the cards.  
   - **Estimations**:
     - Players click on a Fibonacci card (e.g., 1, 2, 3, 5, 8, 13...) to place their estimate.  
     - While the timer is running, other players' estimates remain hidden/anonymous.  
   - **Reveal**:
     - When time runs out, or if the Scrum Master clicks the **Reveal Cards** button:
       - All selected cards become visible.
       - The app calculates and displays statistics (e.g., median, average, etc.) in a visually appealing way.  
   - **Story Ticket Description**:
     - The Scrum Master can set a description for the current story ticket in the room.  
     - All players can read it before making their estimation.  

6. **Styling and Theme**  
   - A minimalistic, modern 2025 design.  
   - Accent color: `#ea591b`  
   - Background color: `white`  
   - The game table is shown with a simple solid color.  
   - The user avatars or seats are displayed around this central table.  

---

## 3. User Flow

Below is the typical flow from a user's perspective:

1. **Open Application**  
   - The user lands on a clean welcome screen with a button to **Sign in with Microsoft**.  

2. **Microsoft SSO**  
   - The user signs in via Microsoft SSO.  
   - If it's the first sign-in, a new user is created in the database (with a unique UUID).  
   - The user is then redirected to the main **Dashboard**.  

3. **Dashboard**  
   - Shows a simple landing page.  
   - Displays:
     - A mock or image of the game area  
     - Two main buttons: **Create Room** and **Join Room**.  

4. **Create or Join a Room**  
   - **Create Room** flow:
     1. Click **Create Room**.  
     2. On the next page, confirm the **Game Type** (only `Fibonacci` available for now).  
     3. Enter the **Room Name** (e.g. "Sprint 12 Planning").  
     4. Click **Create Room** to generate:
        - A **Room UUID**  
        - A **5-letter Join Code**  
       The user becomes the Scrum Master.  
   - **Join Room** flow:
     1. Click **Join Room**.  
     2. Enter a valid 5-letter join code.  
     3. Click **Join** to be placed into that room's game session.  

5. **Gameplay**  
   - Upon joining a room, the user sees:
     - A central table area with a **Reveal Cards** button.  
     - A **Timer** (start/pause/reset) controlled by the Scrum Master.  
     - Seats/avatars around the table representing each player.  
   - **Placing Estimates**:
     - Each user clicks a card with a Fibonacci number to make their estimate.  
     - Cards remain hidden to others until the reveal phase.  
   - **Revealing Estimates**:
     - When the timer expires or the Scrum Master clicks **Reveal Cards**, all estimates flip face-up.  
     - A quick **statistics panel** appears (e.g., median, average, highest, lowest).  

6. **Profile Page**  
   - After first sign-up, the user can visit their profile to set or change their nickname.  
   - The profile page also shows their email (pulled from Microsoft SSO) and user UUID.  

---

## 4. Tech Stack Overview

1. **Frontend (React)**  
   - **React** for building user interfaces.  
   - **React Router DOM** for client-side routing (dashboard, create room, join room, profile, etc.).  
   - UI styling:
     - Accent color: `#ea591b`
     - White background
     - Minimalistic "2025 style"  
   - **Socket.io client** for real-time game communication.  

2. **Backend (Node.js & Express)**  
   - **Express** for handling RESTful endpoints (room creation, user creation, etc.).  
   - **Socket.io server** for handling real-time events (players joining, placing estimates, revealing cards).  
   - **JWT** tokens for session management after Microsoft SSO.  
   - **MongoDB** for data persistence (users, rooms, estimates).  

3. **Environment Variables (.env)**  
   - **PORT**: the port your server listens on (e.g., `4000`).  
   - **JWT_SECRET**: a secret key for JWT signing.  
   - **MONGODB_URI**: the URI for connecting to MongoDB.  
   - **MICROSOFT_SSO_CONFIG**: any required Microsoft SSO client ID, client secret, redirect URI, etc.  
   - Make sure not to commit these variables to version control.  

---

## 5. Application Flow in Detail

1. **Authentication with Microsoft SSO**  
   - The user is redirected to the Microsoft login page.  
   - On successful login, Microsoft sends the user back to the app with an auth token.  
   - The backend verifies the token and issues a **JWT** to the user.  
   - The app checks if the user exists in MongoDB (by email or Microsoft ID):
     - If not, create a new user document (including a unique UUID).  
     - Return user data + the newly created or existing user's doc.  

2. **Dashboard & Room Navigation**  
   - The user's browser local storage/session stores the JWT.  
   - The React frontend queries the backend to validate the JWT and fetch user profile info.  
   - If valid, the user can see the dashboard.  
   - The user can choose **Create Room** or **Join Room**.  

3. **Room Creation**  
   - The React frontend sends a request to the **/createRoom** endpoint with:
     - `roomName`
     - `gameType` (Fibonacci)  
   - The backend:
     - Generates a UUID for the room.  
     - Generates a 5-letter join code.  
     - Stores the room in MongoDB.  
     - Responds with the room data.  
   - The user is redirected to the newly created room's page.  
   - A Socket.io room is also created under the hood, allowing new players to join.  

4. **Join Room**  
   - The user enters a 5-letter join code.  
   - The React frontend sends a **/joinRoom** request with the code.  
   - The backend finds the corresponding room by code and returns the room data if valid.  
   - The user is then connected via Socket.io to that specific room's channel.  

5. **Gameplay**  
   - **Timer**:
     - Controlled by the Scrum Master (creator of the room).
     - All participants see a synced countdown or running clock.  
   - **Estimation Phase**:
     - Each user selects a Fibonacci card.  
     - The selection is sent to the server via Socket.io (invisible to others until reveal).  
     - The server keeps track of each user's estimate.  
   - **Reveal Phase**:
     - When the timer ends or the Scrum Master triggers "Reveal Cards":  
       - The server broadcasts a "reveal" event.  
       - Each client flips the cards face-up, showing the estimates.  
       - A statistic panel (median, average, etc.) is computed server-side or client-side and displayed.  

6. **Profile Page**  
   - Accessible via a navigation link (e.g., `/profile`).  
   - The user sees their email and can edit their nickname (sent to the server to update).  
   - The new nickname is stored in MongoDB and used in the game sessions (avatars, scoreboard, etc.).  

---

## 6. Real-Time Mechanics (Socket.io)

To provide instantaneous updates for all players, the app uses Socket.io:

1. **Connect**: When a user enters a room, the client emits a "joinRoom" event with the room ID or join code.  
2. **Broadcast**: The server notifies all other participants of a new user's arrival.  
3. **Estimation**: When a user selects a card, the client emits an "estimate" event with the selected value.  
4. **Reveal**: When the Scrum Master triggers reveal or the timer ends, the server emits a "revealCards" event.  
5. **Updates**: Users see immediate changes as other players join, leave, or place new estimates.  

---

## 7. Security Considerations

- **JWT Authentication**:  
  - Protect routes to ensure only authenticated users can access the dashboard or create rooms.  
- **Microsoft SSO**:  
  - Use official Microsoft OAuth libraries and store required keys/tokens in `.env`.  
- **Access Control**:  
  - Only the Scrum Master should be able to manipulate the timer or reveal cards.  
- **Secure WebSockets**:  
  - Socket.io connections should be authorized via the user's JWT.  

---

## 8. Conclusion

This Scrum Poker application streamlines story point estimation with a clean, modern interface and real-time interaction. By focusing on Microsoft SSO for authentication, the system remains secure and limited to internal usage. The combination of React, Node.js/Express, and Socket.io provides a highly responsive user experience, while MongoDB ensures flexibility for user and room data storage.

For further implementation details, refer to the project's individual documentation for:

- **Endpoints & Controllers** (REST API in Node.js/Express)  
- **React Components & Routing** (frontend with React Router DOM)  
- **Socket Events & Handlers** (real-time architecture)  
- **Database Schemas** (MongoDB models) *(excluded for now, but define them in a dedicated document or folder when needed)*  

---

## 9. Database Schema

### User Collection
```javascript
{
  _id: ObjectId,
  uuid: String,              // Unique identifier for the user
  email: String,             // User's email from Microsoft SSO
  microsoftId: String,       // Microsoft account ID
  nickname: String,          // User's chosen nickname (optional)
  avatarColor: String,       // Randomly assigned color for avatar (optional)
  createdAt: Date,           // Date when user was created
  lastLogin: Date            // Date of last login
}
```

### Room Collection
```javascript
{
  _id: ObjectId,
  uuid: String,              // Unique identifier for the room
  name: String,              // Room name provided by creator
  joinCode: String,          // 5-letter code to join the room (unique)
  gameType: String,          // "Fibonacci" (default)
  scrumMasterId: String,     // UUID of the user who created the room (Scrum Master)
  active: Boolean,           // Whether the room is currently active
  participants: [            // Array of users currently in the room
    {
      userId: String,        // UUID of the participant
      joinedAt: Date         // When the participant joined
    }
  ],
  currentStory: {            // Information about the current story being estimated
    description: String,     // Description of the story ticket
    startedAt: Date          // When this story was started
  },
  createdAt: Date,           // Date when room was created
  expiresAt: Date            // Date when room will be auto-deleted (optional)
}
```

### Estimation Collection
```javascript
{
  _id: ObjectId,
  roomId: String,            // UUID of the room
  storyDescription: String,  // Description of the story being estimated
  round: Number,             // Round number (increments for each new estimate in same room)
  estimates: [               // Array of all player estimates for this round
    {
      userId: String,        // UUID of the estimator
      value: Number,         // Fibonacci value selected
      submittedAt: Date      // When the estimate was submitted
    }
  ],
  revealed: Boolean,         // Whether estimates have been revealed
  statistics: {              // Calculated when revealed becomes true
    average: Number,
    median: Number, 
    mode: Number,
    min: Number,
    max: Number
  },
  startedAt: Date,           // When this estimation round started
  revealedAt: Date,          // When estimates were revealed
  completedAt: Date          // When round was completed
}
```

### Session Collection (optional, for persistent sessions)
```javascript
{
  _id: ObjectId,
  userId: String,            // UUID of the user
  jwt: String,               // JWT token
  createdAt: Date,           // Creation date
  expiresAt: Date            // Expiration date
}
```

---

## 10. Folder Structure

```
scrum-poker-app/
│
├── client/                           # Frontend React application
│   ├── public/                       # Static files
│   │   ├── index.html                # HTML entry point
│   │   ├── favicon.ico               # App favicon
│   │   └── assets/                   # Images, fonts, etc.
│   │
│   ├── src/                          # React source code
│   │   ├── components/               # Reusable components
│   │   │   ├── common/               # Common UI components
│   │   │   │   ├── Button/           # Button component
│   │   │   │   ├── Card/             # Card component
│   │   │   │   ├── Modal/            # Modal component
│   │   │   │   └── ...
│   │   │   │
│   │   │   ├── auth/                 # Auth-related components
│   │   │   │   └── MicrosoftLogin.jsx
│   │   │   │
│   │   │   ├── dashboard/            # Dashboard components
│   │   │   │   └── ...
│   │   │   │
│   │   │   ├── game/                 # Game-specific components
│   │   │   │   ├── Table.jsx
│   │   │   │   ├── PlayerCard.jsx
│   │   │   │   ├── Timer.jsx
│   │   │   │   └── ...
│   │   │   │
│   │   │   └── profile/              # Profile components
│   │   │       └── ...
│   │   │
│   │   ├── pages/                    # Page components
│   │   │   ├── LoginPage.jsx
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── CreateRoomPage.jsx
│   │   │   ├── JoinRoomPage.jsx
│   │   │   ├── GameRoomPage.jsx
│   │   │   └── ProfilePage.jsx
│   │   │
│   │   ├── context/                  # React context
│   │   │   ├── AuthContext.jsx       # Authentication context
│   │   │   └── GameContext.jsx       # Game state context
│   │   │
│   │   ├── services/                 # API services
│   │   │   ├── api.js                # API client setup
│   │   │   ├── authService.js        # Authentication API
│   │   │   ├── roomService.js        # Room management API
│   │   │   └── socketService.js      # Socket.io client setup
│   │   │
│   │   ├── hooks/                    # Custom React hooks
│   │   │   ├── useAuth.js
│   │   │   └── useSocket.js
│   │   │
│   │   ├── styles/                   # Global styles
│   │   │   ├── _variables.scss       # SCSS variables
│   │   │   ├── _mixins.scss          # SCSS mixins
│   │   │   └── global.scss           # Global styles
│   │   │
│   │   ├── utils/                    # Utility functions
│   │   │   ├── dateUtils.js          # Date helpers
│   │   │   └── statsUtils.js         # Statistics calculations
│   │   │
│   │   ├── App.jsx                   # Main app component
│   │   ├── index.jsx                 # Entry point
│   │   └── routes.js                 # Route definitions
│   │
│   ├── package.json                  # Frontend dependencies
│   └── README.md                     # Frontend documentation
│
├── server/                           # Backend Node.js application
│   ├── config/                       # Configuration files
│   │   ├── db.js                     # Database connection
│   │   ├── auth.js                   # Auth configuration
│   │   └── socket.js                 # Socket.io configuration
│   │
│   ├── controllers/                  # API controllers
│   │   ├── authController.js         # Authentication controller
│   │   ├── userController.js         # User management controller
│   │   ├── roomController.js         # Room management controller
│   │   └── estimationController.js   # Estimation controller
│   │
│   ├── middleware/                   # Express middleware
│   │   ├── auth.js                   # Authentication middleware
│   │   ├── error.js                  # Error handling middleware
│   │   └── validation.js             # Request validation middleware
│   │
│   ├── models/                       # MongoDB models
│   │   ├── User.js                   # User model
│   │   ├── Room.js                   # Room model
│   │   ├── Estimation.js             # Estimation model
│   │   └── Session.js                # Session model (optional)
│   │
│   ├── routes/                       # API routes
│   │   ├── auth.js                   # Auth routes
│   │   ├── users.js                  # User routes
│   │   ├── rooms.js                  # Room routes
│   │   └── estimations.js            # Estimation routes
│   │
│   ├── services/                     # Business logic services
│   │   ├── authService.js            # Authentication service
│   │   ├── roomService.js            # Room management service
│   │   ├── estimationService.js      # Estimation service
│   │   └── socketService.js          # Socket.io service
│   │
│   ├── sockets/                      # Socket.io event handlers
│   │   ├── roomHandlers.js           # Room-related socket events
│   │   ├── estimationHandlers.js     # Estimation-related socket events
│   │   └── index.js                  # Socket event registration
│   │
│   ├── utils/                        # Utility functions
│   │   ├── codeGenerator.js          # Join code generator
│   │   ├── statsCalculator.js        # Statistics calculator
│   │   └── logger.js                 # Logging utility
│   │
│   ├── app.js                        # Express app setup
│   ├── server.js                     # Server entry point
│   ├── package.json                  # Backend dependencies
│   └── README.md                     # Backend documentation
│
├── docs/                             # Project documentation
│   ├── CONTEXT.md                    # Project context & architecture
│   ├── API.md                        # API documentation
│   └── DEPLOYMENT.md                 # Deployment instructions
│
├── .env.example                      # Example environment variables
├── .gitignore                        # Git ignore file
├── docker-compose.yml                # Docker Compose configuration
├── README.md                         # Project overview
└── package.json                      # Root package.json for scripts
```

This folder structure follows a modular organization that separates the frontend (client) and backend (server) components while maintaining a logical grouping of related files. It adheres to best practices for React and Node.js development and facilitates scalability as the application grows.

---