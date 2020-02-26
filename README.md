# mailing-list-demo
A simple app simulating a start up / ad campaign page for collecting email addresses of interested users

This app was made in a few hours to demonstrate a simple NodeJS to MySQL connection.

[Imgur](https://i.imgur.com/wEyNtCG.png)

I will update this readme when I find somewhere to host it and re-load dummy data into the database.

### Tech used
- NodeJS
- MySQL
- ExpressJS


The NPM package `faker` was used to insert 500+ rows of dummy data into the database using the mySQL NPM package to establish the connection and run the queries.

The number in the paragraph comes from pulling the total number of users from the database users table with a `SELECT COUNT(*)` query, and injecting it into the markup with EJS.
