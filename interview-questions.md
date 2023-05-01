# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: You can fix this mistake i believe by running a migration. The name of the foreign key here is student. The foreign key would also be on the student model.

Researched answer: To fix the mistake of not creating a foreign key, you can run a rails db:migrate in the terminal. The name of the foreign key here would be cohort_id to follow the proper naming convention for foreign keys. The foreign key would be on the Cohort model because the foreign key always is on the belongs_to side.

2. Which RESTful routes must always be passed params? Why?

Your answer: The four restful routes that are always passed with params are show, edit, update, and delete. This is because these routes are all making changes to existing data, so they need need params and id numbers to know which instance to change. For example, if you want to edit an instance, and you pass edit without params, how will the cpu know which instance to edit?

Researched answer: Create, Update, Delete, Show, and Index always need params. Create needs params to provide the data for creating a new resource, Update needs params because it needs information on which data to update. Delete needs params to provide the data that needs deleting, show and index need params to specify the resource being displayed or retrieved.

3. Name three rails generator commands. What is created by each?

Your answer: Rails generate model is used to create a model, rails generate controller will give us our controller file, rails generate resource will give us all the models, columns, data types, controllers and restful routes. Rails generate rspec will add rspec to our rails app.

Researched answer:Three rails generate commands are rails generate rspec, controller, and resource. When generating rspec, we get all of the files and folders in the correct naming convention for the rspec testing functionality. Controller gives us the controller file, and resource gives us a model, a column with data types, a controller, a view folder, and the necessary restful routes.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
This route would call the index. Index creates an endpoint for our data and makes sure it is behaving correctly. 

action: "POST" location: /students
This route call on the create method. Here we are creating a new instance, and we want to ensure that it is rendered correctly. If it is not it should render the appropriate errors.

action: "GET" location: /students/new
This route calls the New method. This allows us to add new data to our app and store it in the database.

action: "GET" location: /students/2
This calls the show method. Show lets us look for specific items in the databases.

action: "GET" location: /students/2/edit
This calls the edit method. Edit lets us make changes to an existing database entry.


action: "PATCH" location: /students/2
This calls the update method. This makes it so we can modify existing items in the database.

action: "DELETE" location: /students/2
This calls the destroy method. The destroy method does just that. It deletes content we dont want from the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
user stories. 
    1. As a user, I can create a rails application in the terminal
    2. As a user, I can create a database in the terminal
    3. As a user, I can crete a model called Song that has the artist, and song name
    4. As a user, I want to be able to type in a song and wether or not I've listened to it
    5. As a user, I want to be taken to a page that shows all the songs I've listened to
    6. As a user, I want to be able to delete a song from the list
    7. As a user, I want to be able to update the loist with a new song 
    8. As a user, I want to be ale to edit a song from the list
    9. As a user, I want all the song names to be unique
    10. As a user, I want to see creative styling on the page
