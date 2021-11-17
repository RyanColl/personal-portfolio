const express = require('express')
const next = require('next')
const {redis} = require('./lib/redis.ts')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
    
app.prepare()
.then(() => {
  const server = express()
  server.use(express.json()) // need this to receive req.body
  server.use(middleware)
  // sets the theme when button is pressed
  server.post('/setTheme', (req, res, next) => {
      console.log(req.body.lightTheme)
      redis.set('lightTheme', req.body.lightTheme)
      return res.send({})
  })
  // gets the theme from cache/server
  server.get('/getTheme', (req, res) => {
      redis.get('lightTheme').then(result => {
        return res.send({lightTheme: result})
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
    if(req.url === '/setTheme') {
      
    }
    if(req.url === '/getTheme') {
      redis.get("foo", function (err, result) {
        if (err) {
          console.error(err);
        } else {
          console.log(result); // Promise resolves to "bar"
        }
      });
    }
    next()
}