import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import UnderConstruction from '../components/post/UnderConstruction'
import { getBlogDescriptions, getPost1 } from '../services/contentful.services'
import PostLayout from '../components/post/PostLayout'

const post = () => {
    const router = useRouter()
    const [postNumber, setPostNumber] = useState(0)
    const [postData, setPostData] = useState([sampleDataShape])
    const [tags, setTags] = useState([])
    const [descriptions, setDescriptions] = useState([])
    useEffect(() => {
        let post = router.query.post as string
        setPostNumber(parseInt(post))
    }, [router.query])
    // console.log(images.filter(({id}, i) => postNumber === id).length)
    useEffect(() => {
        getPost1()
            .then((entry: any) => setPostData(entry.fields.post.content as ContentfulBlogData[]))
            .catch((e: any) => console.log(e))
        getBlogDescriptions()
            .then((entry: any) => {
              let descriptions = entry.fields.blogDescriptions;
              console.log(descriptions)
              if (descriptions.length > 0) {
                let tagArr: string[] = [];
                descriptions.map((desc: any, i: number) => {
                  tagArr = [...tagArr, ...desc.tags];
                });
                {/* @ts-ignore */}
                setTags(tagArr);
                setDescriptions(descriptions);
              }
            })
            .catch((e: any) => console.log(e));
    }, [])
    {/*  @ts-ignore */}
    console.log()
    return (
        <>
            {descriptions.filter(({id}, i) => postNumber === parseInt(id)).length ?
                descriptions.filter(({id}, i) => postNumber === parseInt(id)).map((descript, i) => <PostLayout i={i} post={postData} desc={descript} />)
            : <UnderConstruction images={images} postNumber={postNumber} />}
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
let sampleDataShape:ContentfulBlogData = {nodeType: '', content: []}