import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/blog/SearchBar'
import Header from '../components/Header/Header'
import Link from 'next/link'
import { getBlogDescriptions } from '../services/contentful.services'
const blog = ({lightTheme}: {lightTheme: boolean}) => {
    const [postsTitle, setPostsTitle] = useState('All Posts')
    const [descriptions, setDescriptions] = useState([])
    const [value, setValue] = useState('')
    const [tags, setTags] = useState([])
    const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    useEffect(() => {
        getBlogDescriptions()
            .then((entry: any) => {
                let descriptions = entry.fields.blogDescriptions
                if(descriptions.length>0) {
                    let tagArr: string[] = []
                    descriptions.map((desc: any, i: number) => {
                        tagArr = [...tagArr, ...desc.tags]
                    })
                    {/* @ts-ignore */}
                    setTags(tagArr)
                    setDescriptions(descriptions)
                }
                
            })
            .catch((e: any) => console.log(e))
    }, [])
    const tagStyles = {
        backgroundImage: `linear-gradient(90deg, ${lightTheme?'black':'white'} 50%, transparent 50%), linear-gradient(90deg, ${lightTheme?'black':'white'} 50%, transparent 50%), linear-gradient(0deg, ${lightTheme?'black':'white'} 50%, transparent 50%), linear-gradient(0deg, ${lightTheme?'black':'white'} 50%, transparent 50%)`
    }
    return (
        <motion.div className="blog-wrapper">
            <Header tags={tags} search={true} text={postsTitle} />
            <SearchBar value={value} setValue={setValue} formSubmit={formSubmit} />
            <motion.div className="posts">
                {descriptions.length>0 && descriptions.map((descript, i) => {
                    let {id, title, description, tags, date, image} = descript;
                    console.log('id: ', id)
                    console.log('description: ', description)
                    console.log('tags: ', tags)
                    return ( 
                        <motion.div key={i} className='blog-description'>
                            <motion.div className='b-d-image-container'>
                                <motion.div className="b-d-image-div">
                                    <Link href={`post/${id}`}>
                                        <motion.img 
                                        whileHover={{scale: 1.1}} whileTap={{scale: 1}}
                                        className="blog-description-img" src={image} />
                                    </Link>
                                </motion.div>
                            </motion.div>
                            <motion.div className='b-d-text-container'>
                                <motion.div className='b-d-t-c-first'>
                                    <motion.span className='b-d-title'><Link href={`post/${id}`}>{title}</Link></motion.span>
                                    <motion.span className='b-d-date'>{date}</motion.span>
                                </motion.div>
                                <motion.div className='b-d-t-c-second'>
                                    {/* @ts-ignore */}
                                    {tags.map((tag: string, j: number) => {
                                        return <motion.div whileHover={tagStyles} key={`tag-${j}`} className='tag'><a>{tag.toUpperCase()}</a></motion.div>
                                    })}
                                </motion.div>
                                <motion.div className='b-d-t-c-third'>
                                    <motion.p>{description}</motion.p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    )
}

export default blog
