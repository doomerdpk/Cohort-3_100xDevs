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
