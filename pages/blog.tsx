import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/blog/SearchBar'
import Header from '../components/Header/Header'
import { getBlogDescriptions } from '../services/contentful.services'
const blog = ({lightTheme}: {lightTheme: boolean}) => {
    const [postsTitle, setPostsTitle] = useState('All Posts')
    const [descriptions, setDescriptions] = useState([])
    const [value, setValue] = useState('')
    const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    useEffect(() => {
        getBlogDescriptions()
            .then((entry: any) => setDescriptions(entry.fields.blogDescriptions))
            .catch((e: any) => console.log(e))
    }, [])
    const tagStyles = {
        backgroundImage: `linear-gradient(90deg, ${lightTheme?'black':'white'} 50%, transparent 50%), linear-gradient(90deg, ${lightTheme?'black':'white'} 50%, transparent 50%), linear-gradient(0deg, ${lightTheme?'black':'white'} 50%, transparent 50%), linear-gradient(0deg, ${lightTheme?'black':'white'} 50%, transparent 50%)`
    }
    return (
        <motion.div className="blog-wrapper">
            <Header search={true} text={postsTitle} />
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
                                    {/* @ts-ignore */}
                                    <motion.img src={image} />
                                </motion.div>
                            </motion.div>
                            <motion.div className='b-d-text-container'>
                                <motion.div className='b-d-t-c-first'>
                                    <motion.span className='b-d-title'>{title}</motion.span>
                                    <motion.span className='b-d-date'>{date}</motion.span>
                                </motion.div>
                                <motion.div className='b-d-t-c-second'>
                                    {/* @ts-ignore */}
                                    {tags.map((tag, j) => {
                                        return <motion.div whileHover={tagStyles} key={`tag-${j}`} className='tag'><a>{tag}</a></motion.div>
                                    })}
                                </motion.div>
                                <motion.div className='b-d-t-c-third'></motion.div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    )
}

export default blog
