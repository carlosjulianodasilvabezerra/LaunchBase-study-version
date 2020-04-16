const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  autoescape: false,
  express: server,
  noCache: true
})  

server.get('/', (req, res) => {
  const about = {
    avatar_url: "https://cdn.icon-icons.com/icons2/108/PNG/256/males_male_avatar_man_people_faces_18313.png",
    name: "Carlos J S Bezerra",
    role: "Instrutor - Rocketseat",
    description: 'Programmer full-stack, focado em trazer o melhor ensino para iniciantes <a href="https://rocketseat.com.br" target="_blank">rocketseat</a>',
    links: [
      { name: 'Github', url: 'https://github.com/carlosjulianodasilvabezerra/'},
      { name: 'twitter', url: 'https://github.com/carlosjulianodasilvabezerra/'},
      { name: 'linkedin', url: 'https://www.linkedin.com/in/carlos-juliano-bezerra-b9294b13b/'}
    ]
  }

  return res.render('about', { about })
})

server.get('/portfolio', (req, res) => {
  return res.render('portfolio', { items: videos })
})



server.listen(3000, function () {
  console.log('Server is running')
})
