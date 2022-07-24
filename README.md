<div style="background:#222; border: 4px outset #333; padding:20px; font-family:arial">
<div id="top"></div>
<div align="center">
<a href="https://gist.github.com/JamesF905">
<img src="images/logo.png" alt="Logo" width="40%" style="border: 4px inset #444; background:#333; border-radius: 20px">
</a>

# E-Commerce Site

<p align="center">
A CMS-style blog site, similar to a Wordpress site, running on Heroku. <br><br>By: <a href="https://github.com/JamesF905" target="_blank"><strong>James Fidlin</strong></a><br/>July, 21, 2022
</p>
<br />

### Heroku Link

<p align="center">
    <a href=""><strong></strong></a>
</p>

### Repo Link

<p align="center">
    <a href="https://github.com/JamesF905/techblog"><strong>https://github.com/JamesF905/techblog</strong></a>
</p>
<br />
</div>

## About The Project

[![techblog][product-screenshot]](https://github.com/JamesF905/techblog)

This site will allow developers to publish their blog posts and comment on other developers’ posts. This app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. 
<br /><br />

## Contents
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria)
* [Technology Used](#Technology-Used)
* [Installation](#Installation-Instructions)
* [About the Author](#About-the-Author)
<br/><br/>

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

WHEN I click on the homepage option
THEN I am taken to the homepage

WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in

WHEN I choose to sign up
THEN I am prompted to create a username and password

WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password

WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out

WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post

WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard

WHEN I click on the logout option in the navigation
THEN I am signed out of the site

WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Technology Used 

* [Javascript](https://www.javascript.com/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [MySql Server](https://dev.mysql.com/downloads/mysql/)
* [Git Hub](https://github.com/)
* [Git Bash](https://git-scm.com/)
* [node.js](https://nodejs.org/en/)
* [sequelize](https://sequelize.org/)
* [npm mysql2](https://www.npmjs.com/package/mysql2)
* [npm dotenv](https://www.npmjs.com/package/dotenv)
* [Handlebars]()

<p align="center"><a href="#contents">(back to top)</a></p>
<br/><br/>

## Installation Instructions 

1) Install GitBash

2) Install MySql server

3) Install Insomnia

4) Clone this repo

5) Run GitBash from your cloned folder

6) In bash, type in the command ``mysql -u root -p``, then enter your database's password

7) Once connected type in the command ``source db/schema.sql`` to create the database

6) Type ``npm i`` in GitBash to install dependencies

7) Type ``npm run seed`` to build the database

8) Type ``npm start`` to run the application

9) Use insomnia to play with the routes

<p align="center"><a href="#contents">(back to top)</a></p>
<br/><br/>

## About the Author

James Fidlin is a Junior Full Stack Web Developer, studying at the University of Toronto's School for Continuing Education, in the Full Stack Web Development Program. You can connect with James, using any of the links below.
<br/><br/>

[![LinkedIn][linkedin-shield]][linkedin-url] [![Gmail][gmail-shield]][Gmail-url] [![Github][Github-shield]][Github-url]

<br/>

<p align="center"><a href="#contents">(back to top)</a></p>
</div>



[Gmail-shield]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[Gmail-url]: mailto:jameslfidlin@gmail.com?

[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/james-fidlin-98853a239/

[Github-shield]: https://img.shields.io/badge/Github-white?style=for-the-badge&logo=Github&logoColor=222
[Github-url]: https://github.com/JamesF905

[product-screenshot]: images/Project_Screenshot.gif