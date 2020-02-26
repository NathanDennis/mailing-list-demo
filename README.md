# mailing-list-demo
A simple app simulating a start up / ad campaign page for collecting email addresses of interested users

This app was made in a few hours to demonstrate a simple NodeJS to MySQL connection.

![gif demonstrating application](https://imgur.com/EwASpE6)

I will update this readme when I find somewhere to host it and re-load dummy data into the database.

### Tech used

![nodejs logo](https://static.sinap.ps/blog/2014/Dec/nodejs_logo-1417834491072.png)
![mysql logo](https://thumbnail.imgbin.com/21/11/12/imgbin-mysql-logo-database-join-portable-network-graphics-table-fYjBwJzJKBWt9RtriTD0EiXZU_t.jpg)


The NPM package `faker` was used to insert 500+ rows of dummy data into the database using the mySQL NPM package to establish the connection and run the queries.

The number in the paragraph comes from pulling the total number of users from the database users table with a `SELECT COUNT(*)` query, and injecting it into the markup with EJS.
