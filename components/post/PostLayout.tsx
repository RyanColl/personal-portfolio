import { motion } from 'framer-motion'
import React from 'react'
import { Description } from '../../pages/blog'
import { useRouter } from 'next/router'
import { Icon } from '@iconify/react'
import { ContentfulBlogData } from '../../pages/post'
const PostLayout = ({desc, i, post}: {desc: Description, i: number, post: ContentfulBlogData[]}) => {
    const router = useRouter()
    return (
        <motion.div id={`blog-post-${desc.id}`} className="blog-post" key={i}>
            <motion.div className="blog-header">
                <motion.span className="blog-date">{desc.date}</motion.span>
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
                            return <motion.span key={`blog-tag-${i}`} className="blog-tag">{tag.toUpperCase()}</motion.span>
                        })}
                    </motion.div>
                    <motion.hr className="hr-header" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.8}}></motion.hr>
                    <motion.div className="blog-side-bottom">
                        <motion.span className="small-title">{desc.title}</motion.span>
                        <motion.span className="back-to-blog" onClick={() => router.push('/blog')}><Icon className="back-arrow-icon" icon="akar-icons:arrow-left" color="#3AF7F0" width="14" /> Back To Blog</motion.span>
                    </motion.div>
                </motion.div>
                <motion.div className="blog-body">
                        <motion.div className='blog-body-image'>
                            <motion.img src={desc.image} /> 
                        </motion.div>
                        <motion.div className="blog-post-text">
                            {post.map((p, i) => {
                                console.log(p)
                                return (
                                    p.content.map((pp, i) => {
                                        return <p>{pp.value}</p>
                                    })
                                )
                            })}
                        </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default PostLayout
