const contentful = require("contentful");
import {contentfulClient} from '../secrets/secrets'
const entries = {
    interests: '6xTo7B0ZnKbUXBaA4kpAIB',
    projects: '3CSMMnFy5b3BJJZsS27iIF',
    blogDescriptions: '70RE62lRGiuokbrbCbdWhV',
    post1: '37ZMuzcRE9VrY00TtsGyGk',
    enviroview: 'BUSFPf6yCza2RUE4r34ub',
    projectkalm: '2lB5Tmhl2CD3YyhWqK5JaD',
    movieapp: 'URAAggfR3LcPQGQIRPHlC',
    animalrun: '64tlP7LBqKYnlV2qxDxf6H',
    complabscalculator: '3Esib2gJrGd0lXFD4C6r66',
    trashit: '7uwlTLzn7as6COReZCCADK',
}
const client = contentful.createClient(contentfulClient);

export const getInterests = () => {
    return client.getEntry(entries.interests)
    .then((entry: any) => (entry))
    .catch((err: any) => console.log(err))
}

export const getProjects = () => {
    return client.getEntry(entries.projects)
    .then((entry: any) => (entry))
    .catch((err: any) => console.log(err))
}

export const getBlogDescriptions = () => {
    return client.getEntry(entries.blogDescriptions)
    .then((entry: any) => (entry))
    .catch((err: any) => console.log(err))
}
type Post = 'post1'
export const getPost = (post: Post) => {
    return client.getEntry(entries[post])
    .then((entry: any) => (entry))
    .catch((err: any) => console.log(`Post Doesnt Exist - Bad Post Number - ${post}`))
}
type Project = 'enviroview' | 'projectkalm' | 'movieapp' | 'animalrun' | 'complabscalculator'
export const getProject = (name: Project) => {
    return client.getEntry(entries[name])
    .then((entry: any) => (entry))
    .catch((err: any) => console.log(err))
}
