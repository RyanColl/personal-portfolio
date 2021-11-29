const express = require('express')
const next = require('next')
const {redis} = require('./lib/redis.ts')
const fs = require('fs').promises
const path = require('path')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

    
app.prepare()
.then(() => {
  const server = express()
  server.use(express.json()) // need this to receive req.body
  server.use(middleware)
  // sets the theme when button is pressed
  server.post("/setTheme", (req, res, next) => {
    // console.log(req.body.lightTheme)
    redis
      .set(`${req.ip}`, JSON.stringify({ lightTheme: req.body.lightTheme }))
      .then((s) => {
        return res.send({ok: s});
      }).catch(e => res.send({ok: false}))
  });
  // gets the theme from cache/server
  server.get('/getTheme', (req, res) => {
      redis.get(`${req.ip}`).then(s => {
        // console.log(JSON.parse(s))
        if(!JSON.parse(s)) return res.send({lightTheme: false})
        if(JSON.parse(s)) return JSON.parse(s)  
      })
      .then(result => {
        return res.send({lightTheme: result.lightTheme})
      }).catch(e => res.send({lightTheme: false}))
  })
  server.get('/interests', (req, res) => {
    fs.readFile(path.join(__dirname, '/interests.json'), 'utf-8')
      .then(i => {
        return res.send({interests: JSON.parse(i)})
      })
  })
  server.get('/getProjects', (req, res) => {
    fs.readFile(path.join(__dirname, '/projects.json'), 'utf-8')
      .then(i => {
        return res.send({projects: JSON.parse(i)})
      })
  })
  server.get('*', (req, res) => {
    
    return handle(req, res)
  })
  
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

const middleware = (req, res, next) => {
    next()
}





/* REDIS EXAMPLE */

    // if(req.url === '/getTheme') {
    //   redis.get("foo", function (err, result) {
    //     if (err) {
    //       console.error(err);
    //     } else {
    //       console.log(result); // Promise resolves to "bar"
    //     }
    //   });
    // }