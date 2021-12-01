const { https } = require('firebase-functions');
const { default: next } = require('next');

const isDev = process.env.NODE_ENV !== 'production';

const app = next({
  dev: isDev,
  conf: { distDir: '.next' },
});

const handle = app.getRequestHandler();
exports.nextServer = https.onRequest((req, res) => {
  return app.prepare().then(() => {
    const server = express()
    console.log('express server started')
    server.use(express.json()) // need this to receive req.body
    server.use(middleware)
    // server.use(express.static('build'))
    server.use(cors());
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
    server.listen(PORT, (err) => {
      if (err) throw err
      console.log(`> Ready on port: ${PORT}`)
    })

    const middleware = (req, res, next) => {
    next()
}
  });
});