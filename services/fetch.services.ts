import { getInterests as interests, getProjects as projects } from "./contentful.services";
// import {redis} from '../lib/redis'
// export const setTheme = (lightTheme: boolean) => {
//   localStorage.setItem('lightTheme', JSON.stringify({lightTheme}))
//   console.log('item set')
// }

// export const getTheme = () => {
//   let theme = JSON.parse(localStorage.getItem('lightTheme')!)
//   if(theme !== undefined) {
//     return theme
//   }
//   else {
//     return undefined
//   }
// } 

export const getInterests = () => {
  return interests().then((entry: any) => entry).catch((e: any) => undefined)
}
export const getProjects = () => {
  return projects().then((entry: any) => entry).catch((e: any) => undefined)
}