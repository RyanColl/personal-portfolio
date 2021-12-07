import { motion } from 'framer-motion'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Description } from '../../pages/blog'
import { useRouter } from 'next/router'
import { Icon } from '@iconify/react'
import { ContentfulBlogData } from '../../pages/post'
const PostLayout = ({desc, post, lightTheme}: {desc: Description, post: ContentfulBlogData[], lightTheme: boolean}) => {
    const router = useRouter()
    const tagStyles = {
        backgroundImage: `linear-gradient(90deg, ${lightTheme?'black':'white'} 50%, transparent 50%), linear-gradient(90deg, ${lightTheme?'black':'white'} 50%, transparent 50%), linear-gradient(0deg, ${lightTheme?'black':'white'} 50%, transparent 50%), linear-gradient(0deg, ${lightTheme?'black':'white'} 50%, transparent 50%)`
    }
    const backToBlogWithQuery = (tag: string) => {
        router.push({pathname: '/blog', query: {'tag': `${tag}`}})
    }
    return (
        <motion.div id={`blog-post-${desc.id}`} className="blog-post">
            <motion.div className="blog-header">
                <motion.span className="blog-date">{desc.date.substr(0, 10)}</motion.span>
                <motion.span className="blog-title">{desc.title}</motion.span>
            </motion.div>
            <motion.hr className="hr-header" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8}}></motion.hr>
            <motion.div className="blog-wrap">
                <motion.div className="blog-side">
                    <motion.div className="blog-side-about">
                        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 1}} className='blog-side-image-div'>
                            <motion.img  src='./avatar.png' />
                        </motion.div>
                        <motion.div className="blog-side-name-div">
                            <motion.span className="name">Ryan Collicutt</motion.span>
                            <motion.span className="at">@rcollicutt.dev</motion.span>
                        </motion.div>
                    </motion.div>
                    <motion.hr className="hr-header" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8}}></motion.hr>
                    <motion.div className="blog-side-tags">
                        <motion.span className='tags-title'>TAGS</motion.span>
                        {desc.tags.map((tag, i) => {
                            return <motion.span onClick={() => {backToBlogWithQuery(tag)}} whileHover={tagStyles} key={`blog-tag-${i}`} className="blog-tag tag">{tag.toUpperCase()}</motion.span>
                        })}
                    </motion.div>
                    <motion.hr className="hr-header" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8}}></motion.hr>
                    <motion.div className="blog-side-bottom">
                        <motion.span className="small-title">{desc.title}</motion.span>
                        <motion.span className="back-to-blog" onClick={() => router.push('/blog')}><Icon className="back-arrow-icon" icon="akar-icons:arrow-left" color="#3AF7F0" width="14" /> Back To Blog</motion.span>
                    </motion.div>
                </motion.div>
                <motion.div className="blog-body">
                        <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 1}} className='blog-body-image'>
                            <motion.img  src={desc.image} /> 
                        </motion.div>
                        <motion.div className="blog-post-text">
                            {post.map((p, i) => (p.content.map(({value}, i) => (value))))
                            .map((p, i) => {
                               return p.map((paragraph, i) => {
                                   return <p key={`p-${i}`}>{paragraph}</p>
                               })
                            })}
                        </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default PostLayout
