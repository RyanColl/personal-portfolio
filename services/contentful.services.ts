const contentful = require("contentful");
type Post = 'post1'
import {contentfulClient} from '../secrets/secrets'
const entries = {
    interests: '6xTo7B0ZnKbUXBaA4kpAIB',
    projects: '3CSMMnFy5b3BJJZsS27iIF',
    blogDescriptions: '70RE62lRGiuokbrbCbdWhV',
    post1: '37ZMuzcRE9VrY00TtsGyGk'
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

export const getPost = (post: Post) => {
    return client.getEntry(entries[post])
    .then((entry: any) => (entry))
    .catch((err: any) => console.log(`Post Doesnt Exist - Bad Post Number - ${post}`))
}

