const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql')

const dotenv = require('dotenv')
dotenv.config()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(`${__dirname}/public`))

const { PORT, MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env

const connection = mysql.createConnection({
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
})

app.get('/', (req, res) => {
    const getTotalUsersQuery = 'SELECT COUNT(*) AS count FROM users;'
    connection.query(getTotalUsersQuery, (error, result) => {
        if (error) {
            console.log(error)
            res.send(`Error in retrieving user count`)
        }
        const count = result[0].count
        res.render('home', {count})
    })
})

app.post('/register', (req, res) => {
    const emailToInsert = {
        email: req.body.email
    }

    connection.query('INSERT INTO users SET ?', emailToInsert, (error, result) => {
        if (error) {
            throw new Error(`Error: ${error}`)
        }
        res.redirect('/')
        console.log(result)
    })
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})