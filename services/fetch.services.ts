import { getInterests as interests, getProjects as projects } from "./contentful.services";
export const setTheme = (lightTheme: boolean) => {
    fetch("/setTheme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lightTheme }),
    });
}

export const getTheme = (): Promise<boolean> => {
    return fetch('/getTheme').then(data => (data.json()))
      .then(data => {
        return data.lightTheme
      })
}

export const getInterests = () => {
  return interests().then((entry: any) => entry).catch((e: any) => undefined)
}
export const getProjects = () => {
  return projects().then((entry: any) => entry).catch((e: any) => undefined)
}