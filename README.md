# Personal Task Management with Google Chart and Google OAuth v2.0
With this amazing webpage you will be able to manage and view the tasks you have to accomplish.
You can access it via a login procedure which makes use of your Google Account. The middleware will only access your profile information like name, surname, profile pic and Google ID. The information obtained by the OAuth process will be stored in a Mongo DataBase.
The page presents itself with a very nice and intuitive Chart where all your tasks are displayed. You can then select which project you want to explore. As soon as you select a project, a Table underneath the Chart will show you the very important details of all your tasks like their name, their duration and what the completed percentage is.

## Files Description
You are about to read something useful about the files in this repository. I provided a complete description of the directories I used so that you all can understand the whole project. Enjoy!

### config/
This folder contains the configuration files for the Authentication.
#### keys.js
This file contains the keys to access the logged user information. Of course, the keys I used are no longer there.
#### passport-setup.js
This file contains what is necessary to set up in order to use passport.js. For example, the Authentication Strategy is showed here.

### model/ and models/
These folders have the same content. They both consist of the file that defines what a "user" actually is inside the website.
#### user-model.js
This file explains how the User is defined within the website. I decided to use only 3 parameters: username, Google ID and a thumbnail.

### routes/
This folder contains the routes I used to create the website. It basically defines the paths and the files that have to be shown as the User asks for them. For example, when the User clicks on the "Login" button, this file will tell the browser to switch to the Login page.
#### auth-routes.js
This file contains the most important routes: homepage, login and logout.
#### profile-routes.js
This file contains the routes about the Profile page. For example, when an unknown User clicks on the Profile button they cannot be able to access the profile page, so they are redirected to the login page.

### screenshot/
This folder obviously contains the screenshot I took as I was developing the webpage. Their names correspond to the date I took them so it's pretty easy to follow the evolution of the webpage itself.

### views/
This folder contains the .ejs pages that are actually seen on the monitor when accessing the webpage.
#### home.ejs
#### login.ejs
#### profile.ejs

### app.js
This is the main code that let the whole webpage work. 
