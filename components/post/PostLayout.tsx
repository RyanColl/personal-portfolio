import { motion } from 'framer-motion'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Description } from '../../pages/blog'
import { useRouter } from 'next/router'
import { Icon } from '@iconify/react'
import { ContentfulBlogData } from '../../pages/post'
import ContentPiece from './ContentPiece'
import LikeButton from '../Like/LikeButton'
const PostLayout = ({desc, post, lightTheme}: {desc: Description, post: ContentfulBlogData[], lightTheme: boolean}) => {
    const router = useRouter()
    const tagStyles = {
        backgroundImage: `linear-gradient(90deg, ${lightTheme?'black':'white'} 50%, transparent 50%), linear-gradient(90deg, ${lightTheme?'black':'white'} 50%, transparent 50%), linear-gradient(0deg, ${lightTheme?'black':'white'} 50%, transparent 50%), linear-gradient(0deg, ${lightTheme?'black':'white'} 50%, transparent 50%)`
    }
    const backToBlogWithQuery = (tag: string) => {
        router.push({pathname: '/blog', query: {'tag': `${tag}`}})
    }
    let delay = 0;
    console.log(post);
    return (
        <>
            
            <motion.div variants={parent} animate="visible" initial="hidden" id={`blog-post-${desc.id}`} className="blog-post">
                <motion.div variants={child} animate="visible" initial="hidden" transition={{delay: 0.4}} className="blog-header">
                    <motion.span className="blog-date">{desc.date.substr(0, 10)}</motion.span>
                    <motion.span className="blog-title">{desc.title}</motion.span>
                </motion.div>
                <motion.hr className="hr-header" variants={child} animate="visible" initial="hidden" transition={{delay: 0.6}} ></motion.hr>
                <motion.div variants={child} animate="visible" initial="hidden" transition={{delay: 0.8}} className="blog-wrap">
                    <motion.div variants={parent} animate="visible" initial="hidden" transition={{delay: 1}} className="blog-side">
                        <motion.div variants={child} animate="visible" initial="hidden" transition={{delay: 1.2}} className="blog-side-about">
                            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 1}} className='blog-side-image-div'>
                                <motion.img  src='./avatar.png' />
                            </motion.div>
                            <motion.div className="blog-side-name-div">
                                <motion.span className="name">Ryan Collicutt</motion.span>
                                <motion.span className="at">@rcollicutt.dev</motion.span>
                            </motion.div>
                        </motion.div>
                        <motion.hr className="hr-header" variants={child} animate="visible" initial="hidden" transition={{delay: 1.4}}></motion.hr>
                        <motion.div variants={child} animate="visible" initial="hidden" transition={{delay: 1.6}} className="blog-side-tags">
                            <motion.span className='tags-title'>TAGS</motion.span>
                            {desc.tags.map((tag, i) => {
                                return <motion.span onClick={() => {backToBlogWithQuery(tag)}} whileHover={tagStyles} key={`blog-tag-${i}`} className="blog-tag tag">{tag.toUpperCase()}</motion.span>
                            })}
                        </motion.div>
                        <motion.hr className="hr-header"  variants={child} animate="visible" initial="hidden" transition={{delay: 1.8}}></motion.hr>
                        <motion.div variants={child} animate="visible" initial="hidden" transition={{delay: 2}} className="blog-side-bottom">
                            <motion.span className="small-title">{desc.title}</motion.span>
                            <motion.span  className="back-to-blog" onClick={() => router.push('/blog')}><Icon className="back-arrow-icon" icon="akar-icons:arrow-left" color="#3AF7F0" width="16" /> Back To Blog</motion.span>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={child} animate="visible" initial="hidden" transition={{delay: 2.2}} className="blog-body">
                            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 1}} className='blog-body-image'>
                                <motion.img src={desc.image} /> 
                            </motion.div>
                            <motion.h1 whileHover={tagStyles} className='content-piece-header-first tag'>{desc.title}</motion.h1>
                    </motion.div>
                </motion.div>
                <motion.div className="blog-post-text">
                        {post.map((piece, i) => <ContentPiece lightTheme={lightTheme} tagStyles={tagStyles} piece={piece} i={i} />)}
                </motion.div>
            </motion.div>
            <LikeButton lightTheme={lightTheme} />
        </>
    )
}

export default PostLayout

const parent = {
    hidden: {
        y: '-100vh',
        opacity: 0,
        transition: {
            when: "afterChildren"
        }
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3
        }
    }
}
const child = {
    hidden: {
        y: '100vh',
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}