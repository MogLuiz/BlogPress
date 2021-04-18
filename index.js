const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");


const Article = require("./articles/Article");
const Category = require("./categories/category")

//View engine 
app.set('view engine', 'ejs')


//static
app.use(express.static('public'))

//Body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//database

connection
    .authenticate()
    .then(() => {
        console.log("Database connected")
    }).catch((error) => {
        console.log(error)
    })

app.use("/", categoriesController)
app.use("/", articlesController)

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(3000, () => {
    console.log("Server is runner")
})