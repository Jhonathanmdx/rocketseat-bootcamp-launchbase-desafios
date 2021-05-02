const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")
 
nunjucks.configure("views", {
   express: server,
   autoescape: false
})

server.get("/", function(req, res) {
   const about = {
      avatar_url: "https://github.com/jhonathanmdx.png",
      name: "Jhonathan Ferreira",
      role: "Junior Developer",
      description: `Student in the programming area. Deepening more in web programming. Always seeking skills to make difference in the job market. Currently doing the Lauchbase and Ignite courses at <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>.`,
      links: [
         { name: "Github", url: "https://github.com/Jhonathanmdx"},
         { name: "Facebook", url: "https://www.facebook.com/jhonathan.silva.96/"},
         { name: "Linkedin", url: "https://www.linkedin.com/in/jhonathan-ferreira-22458a185/"}
      ]
   }
   return res.render("about", { about })
})

server.get("/portfolio", function(req, res) {

   return res.render("portfolio", {items: videos})
})

server.listen(5000, function() {
   console.log("server is runing")
})