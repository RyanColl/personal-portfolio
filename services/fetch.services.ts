
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