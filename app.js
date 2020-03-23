const express = require('express')
const app = express()
const cors = require("cors")
app.use(cors())
const port = 3000
const fetch = require('node-fetch');
const fs = require('fs')
const https = require('https');
const request = require('request');
let file

const runews = {
    main:'http://newsapi.org/v2/top-headlines?language=ru&apiKey=4262293fff7d4825ab549d8c3d904453',
    business:'http://newsapi.org/v2/top-headlines?country=ru&category=business&apiKey=4262293fff7d4825ab549d8c3d904453',
    science:'http://newsapi.org/v2/top-headlines?country=ru&category=science&apiKey=4262293fff7d4825ab549d8c3d904453',
    sports:'http://newsapi.org/v2/top-headlines?country=ru&category=sports&apiKey=4262293fff7d4825ab549d8c3d904453',
    technology:'http://newsapi.org/v2/top-headlines?country=ru&category=technology&apiKey=4262293fff7d4825ab549d8c3d904453',
    entertainment:'http://newsapi.org/v2/top-headlines?country=ru&category=entertainment&apiKey=4262293fff7d4825ab549d8c3d904453',
    general:'http://newsapi.org/v2/top-headlines?country=ru&category=general&apiKey=4262293fff7d4825ab549d8c3d904453',
}
const ennews = {
    main:'http://newsapi.org/v2/top-headlines?language=en&apiKey=4262293fff7d4825ab549d8c3d904453',
    business:'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4262293fff7d4825ab549d8c3d904453',
    science:'http://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=4262293fff7d4825ab549d8c3d904453',
    sports:'http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=4262293fff7d4825ab549d8c3d904453',
    technology:'http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=4262293fff7d4825ab549d8c3d904453',
    entertainment:'http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=4262293fff7d4825ab549d8c3d904453',
    general:'http://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=4262293fff7d4825ab549d8c3d904453',
}
fetch(ennews.main)
    .then(res => {
        const dest = fs.createWriteStream("./docs/ennewsmain.json")
        res.body.pipe(dest)
    });
fetch(ennews.business)
    .then(res => {
        const dest = fs.createWriteStream("./docs/ennewsbusiness.json")
        res.body.pipe(dest)
    });
fetch(ennews.science)
    .then(res => {
        const dest = fs.createWriteStream("./docs/ennewsscience.json")
        res.body.pipe(dest)
    });
fetch(ennews.sports)
    .then(res => {
        const dest = fs.createWriteStream("./docs/ennewssports.json")
        res.body.pipe(dest)
    });
fetch(ennews.technology)
    .then(res => {
        const dest = fs.createWriteStream("./docs/ennewstechnology.json")
        res.body.pipe(dest)
    });
fetch(ennews.entertainment)
    .then(res => {
        const dest = fs.createWriteStream("./docs/ennewsentertainment.json")
        res.body.pipe(dest)
    });
fetch(ennews.general)
    .then(res => {
        const dest = fs.createWriteStream("./docs/ennewsgeneral.json")
        res.body.pipe(dest)
    });

    fetch(runews.main)
    .then(res => {
        const dest = fs.createWriteStream("./docs/runewsmain.json")
        res.body.pipe(dest)
    });
fetch(runews.business)
    .then(res => {
        const dest = fs.createWriteStream("./docs/runewsbusiness.json")
        res.body.pipe(dest)
    });
fetch(runews.science)
    .then(res => {
        const dest = fs.createWriteStream("./docs/runewsscience.json")
        res.body.pipe(dest)
    });
fetch(runews.sports)
    .then(res => {
        const dest = fs.createWriteStream("./docs/runewssports.json")
        res.body.pipe(dest)
    });
fetch(runews.technology)
    .then(res => {
        const dest = fs.createWriteStream("./docs/runewstechnology.json")
        res.body.pipe(dest)
    });
fetch(runews.entertainment)
    .then(res => {
        const dest = fs.createWriteStream("./docs/runewsentertainment.json")
        res.body.pipe(dest)
    });
fetch(runews.general)
    .then(res => {
        const dest = fs.createWriteStream("./docs/runewsgeneral.json")
        res.body.pipe(dest)
    });    
app.use("/runewsmain.json", function(request, response){
    response.sendFile(__dirname + "/docs/runewsmain.json");
    });
app.use("/runewsbusiness.json", function(request, response){
    response.sendFile(__dirname + "/docs/runewsbusiness.json");
    });
app.use("/runewsscience.json", function(request, response){
    response.sendFile(__dirname + "/docs/runewsscience.json");
    });
app.use("/runewssports.json", function(request, response){
    response.sendFile(__dirname + "/docs/runewssports.json");
    });
app.use("/runewstechnology.json", function(request, response){
    response.sendFile(__dirname + "/docs/runewstechnology.json");
    });
app.use("/runewsentertainment.json", function(request, response){
    response.sendFile(__dirname + "/docs/runewsentertainment.json");
    });
app.use("/runewsgeneral.json", function(request, response){
    response.sendFile(__dirname + "/docs/runewsgeneral.json");
    });
    app.use("/ennewsmain.json", function(request, response){
        response.sendFile(__dirname + "/docs/ennewsmain.json");
        });
    app.use("/ennewsbusiness.json", function(request, response){
        response.sendFile(__dirname + "/docs/ennewsbusiness.json");
        });
    app.use("/ennewsscience.json", function(request, response){
        response.sendFile(__dirname + "/docs/ennewsscience.json");
        });
    app.use("/ennewssports.json", function(request, response){
        response.sendFile(__dirname + "/docs/ennewssports.json");
        });
    app.use("/ennewstechnology.json", function(request, response){
        response.sendFile(__dirname + "/docs/ennewstechnology.json");
        });
    app.use("/ennewsentertainment.json", function(request, response){
        response.sendFile(__dirname + "/docs/ennewsentertainment.json");
        });
    app.use("/ennewsgeneral.json", function(request, response){
        response.sendFile(__dirname + "/docs/ennewsgeneral.json");
        });
app.use("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
    });    
    

app.listen(port, () => console.log(`Example app listening on port port!`))

