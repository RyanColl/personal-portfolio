

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