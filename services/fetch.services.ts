import { getInterests as interests, getProjects as projects } from "./contentful.services";
const local = 'http://localhost:3001'
const heroku = 'https://personal-express-server.herokuapp.com'
export const setTheme = (lightTheme: boolean) => {
  return fetch(`${heroku}/setTheme/${JSON.stringify({lightTheme})}`)
  .then(res => res.json()).then(data => data)
    .catch(e => e)
}

export const getTheme = () => {
  return fetch(`${heroku}/getTheme`)
    .then(res => res.json()).then(data => data)
    .catch(e => e)
} 

export const getInterests = () => {
  return interests().then((entry: any) => entry).catch((e: any) => undefined)
}
export const getProjects = () => {
  return projects().then((entry: any) => entry).catch((e: any) => undefined)
}

export const pingSystem = () => {
  setInterval(() => {
      fetch('https://personal-express-server.herokuapp.com/')
      fetch('https://ping-server-one.herokuapp.com/')
      fetch('https://ping-server-two.herokuapp.com/')
  }, 1800000)
}