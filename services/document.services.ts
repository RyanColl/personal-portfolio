

export const changeThemeToDark = () => {
    document.documentElement.style.setProperty('--background-color1', '#2E2E2E');
    document.documentElement.style.setProperty('--background-color2', '#1F2424');
    document.documentElement.style.setProperty('--foreground-color1', 'white');
    document.documentElement.style.setProperty('--foreground-color2', 'white');
}

export const changeThemeToLight = () => {
    document.documentElement.style.setProperty('--background-color1', 'white');
    document.documentElement.style.setProperty('--background-color2', 'white');
    document.documentElement.style.setProperty('--foreground-color1', '#2E2E2E');
    document.documentElement.style.setProperty('--foreground-color2', '#1F2424');
}

export const changeBorderColor = (color: string) => {
    document.documentElement.style.setProperty('--border-color', color);
}

export const myDetails = [
    'Ever since I was a child, my fascination in physics produced my creative nature. I would often lie awake at night, pondering to myself as I watched upon the stars. Wondering who I was and my place in this world led to a lot of mental conclusions on how to live my life.',
    'I choose every day to wake up and work hard for the people I love and care about, for my company, my industry, but most importantly for myself.',
    'This leads me to be a powerful developer with a lot on my mind. Given a task, and I will tear it apart and construct a perfect answer.',
    'My passion for computers comes from my childhood. I would play games and do homework for hours. This led to a lot of understanding of their nature.',
    'I use this passion to drive my understanding of code. It has helped me push past the sometimes infuriating errors that come with coding. Now, no challenge is too difficult to overcome.',
]