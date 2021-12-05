import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import UnderConstruction from '../components/post/UnderConstruction'
import { getPosts } from '../services/contentful.services'

const post = () => {
    const router = useRouter()
    const [postNumber, setPostNumber] = useState(0)
    const [postData, setPostData] = useState([sampleDataShape])
    useEffect(() => {
        let post = router.query.post as string
        setPostNumber(parseInt(post))
    }, [router.query])
    // console.log(images.filter(({id}, i) => postNumber === id).length)
    useEffect(() => {
        getPosts()
            .then((entry: any) => setPostData(entry.fields.posts.content as ContentfulBlogData[]))
            .catch((e: any) => console.log(e))
    }, [])
    console.log(postData)
    return (
        <motion.div>
            
            {!images.filter(({id}, i) => postNumber === id).length && <UnderConstruction images={images} postNumber={postNumber} />}
        </motion.div>
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
let sampleDataShape:ContentfulBlogData = {nodeType: '', content: []}