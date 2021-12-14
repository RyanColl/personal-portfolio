import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import UnderConstruction from '../components/post/UnderConstruction'
import { getBlogDescriptions, getPost } from '../services/contentful.services'
import PostLayout from '../components/post/PostLayout'
import { Description } from './blog'

const post = ({lightTheme}: {lightTheme: boolean}) => {
    const router = useRouter()
    const [postNumber, setPostNumber] = useState(0)
    const [postData, setPostData] = useState([sampleDataShape])
    const [description, setDescription] = useState(initialDescription)
    const [doesExist, setExist] = useState(true)
    useEffect(() => {
        let post = router.query.post as string
        setPostNumber(parseInt(post))
    }, [router.query])
    
    useEffect(() => {
        if(postNumber!==0) {
            {/* @ts-ignore */}
           getPost(`post${postNumber}`)
            .then((entry: any) => {
                // console.log(entry.fields)
                let description = {...entry.fields.blogData, date: entry.fields.publishDate}
                // console.log(description)
                setExist(true)
                setDescription(description);
                setPostData(entry.fields.postText.content)
            })
            .catch((e: any) => setExist(false))
        }
    }, [postNumber])
    {/*  @ts-ignore */}
    // console.log('description: ', description)
    return (
        <>
            {doesExist ? <PostLayout lightTheme={lightTheme} post={postData} desc={description} /> :
            <UnderConstruction />}
        </>
    )
}

export default post



export interface Image {id:number;image:string;}
export interface ContentfulBlogData {
    nodeType: string;
    content: Content[]
}
export interface Content {
    nodeType: string;
    value: string;
}
const images: Image[] = [
    {
        id: 1,
        image: './under_constr1.png'
    },
    {
        id: 2,
        image: './under_constr2.png'
    },
]
export const sampleDataShape:ContentfulBlogData = {nodeType: '', content: []}
export const initialDescription:Description = {id: '0', description:'', date: '', tags: [''], image: '', title: ''}