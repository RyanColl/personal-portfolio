import { getInterests as interests, getProjects as projects } from "./contentful.services";
const local = 'http://localhost:3001'
const heroku = 'https://personal-express-server.herokuapp.com'
export const setTheme = (lightTheme: boolean) => {
  return fetch(`${local}/setTheme/${JSON.stringify({lightTheme})}`)
  .then(res => res.json()).then(data => data)
    .catch(e => e)
}

export const getTheme = () => {
  return fetch(`${local}/getTheme`)
    .then(res => res.json()).then(data => data)
    .catch(e => e)
} 

export const getInterests = () => {
  return interests().then((entry: any) => entry).catch((e: any) => undefined)
}
export const getProjects = () => {
  return projects().then((entry: any) => entry).catch((e: any) => undefined)
}