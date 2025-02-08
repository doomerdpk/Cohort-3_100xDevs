# Create Backend of a Multi user todo in Express.

1. Separate file as databse for todos for every user. (https://chatgpt.com/share/67a33918-e9fc-8000-a329-604768dc564b)
2. every user can able to perform below operations
   - Create a todo
   - view all the undeleted todos.
   - update a todo
   - delete a todo

#Endpints to Create

1. /create-user (To create a user)
2. /view-users (To view all the users)
3. /view-todos/:user (to view all the undeleted todos for a user)
4. /create-todo/:user (to create a todo for a specific user)
5. /update-todo/:user/:id (to update a todo for a specific user)
6. /delete-todo/:user/:id (to delete a todo for a specific user)

#Code Review :https://chatgpt.com/share/67a757bc-b948-8000-98e6-55a371336aec

#Better Code Structure:

require("dotenv").config();
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Ensure data directories exist
const dataDir = path.join(\_\_dirname, "data");
const userDataDir = path.join(dataDir, "userData");
const usersPath = path.join(dataDir, "users.json");

if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(userDataDir)) fs.mkdirSync(userDataDir, { recursive: true });
if (!fs.existsSync(usersPath)) fs.writeFileSync(usersPath, "[]", "utf-8");

app.use(express.json());

// Utility functions
const { readFile, writeFile } = fs.promises;
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Routes
const userRoutes = require("./routes/users");
const todoRoutes = require("./routes/todos");

app.use("/users", userRoutes);
app.use("/todos", todoRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
