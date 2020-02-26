# mailing-list-demo
A simple app simulating a start up / ad campaign page for collecting email addresses of interested users

This app was made in a few hours to demonstrate a simple NodeJS to MySQL connection.

![screenshot of application landing page](https://i.imgur.com/wEyNtCG.png)

I will update this readme when I find somewhere to host it and re-load dummy data into the database.

### Tech used
- NodeJS
- MySQL
- ExpressJS


The NPM package `faker` was used to insert 500+ rows of dummy data into the database using the mySQL NPM package to establish the connection and run the queries.

The number in the paragraph is dynamic. After entering an email address and clicking submit, an INSERT query is sent off and a call to <code>res.redirect()</code> returns the user to the landing page, updating the total number of users displayed
