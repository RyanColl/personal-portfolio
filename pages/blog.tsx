import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/blog/SearchBar'
import Header from '../components/Header/Header'
import Link from 'next/link'
import { getBlogDescriptions } from '../services/contentful.services'
import { useRouter } from 'next/router'
export interface Description {
    id: string; 
    title: string; 
    description: string;
    tags: string[]; 
    date: string; 
    image: string;
}
const blog = ({lightTheme}: {lightTheme: boolean}) => {
    const router = useRouter()
    useEffect(() => {
        if(router.query.tag) setPostsTitle(router.query.tag as string)
    }, [router.query])
    const [postsTitle, setPostsTitle] = useState('All Posts')
    const [descriptions, setDescriptions] = useState([])
    const [value, setValue] = useState('')
    const [tags, setTags] = useState([])
    const [searchQuery, inputQuery] = useState('')
    const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        inputQuery(value)
        setPostsTitle('All Posts')
    }
    useEffect(() => {
      getBlogDescriptions()
        .then((entry: any) => {
          let descriptions = entry.fields.blogDescriptions;
          if (descriptions.length > 0) {
            let tagArr: string[] = [];
            descriptions.map((desc: any, i: number) => {
              if (i === 0) tagArr = ["All Posts"];
              tagArr = [...tagArr, ...desc.tags];
            });
            {/* @ts-ignore */}
            setTags(tagArr);
            setDescriptions(descriptions);
          }
        })
        .catch((e: any) => console.log(e));
    }, []);
    const tagStyles = {
        backgroundImage: `linear-gradient(90deg, ${lightTheme?'black':'white'} 50%, transparent 50%), linear-gradient(90deg, ${lightTheme?'black':'white'} 50%, transparent 50%), linear-gradient(0deg, ${lightTheme?'black':'white'} 50%, transparent 50%), linear-gradient(0deg, ${lightTheme?'black':'white'} 50%, transparent 50%)`
    }
    const filterFunction = (d: Description, j: number) => {
        let {id, title, description, tags, date, image} = d;
        if(postsTitle!=='All Posts') return tags.includes(postsTitle!=='All Posts'?postsTitle:'')
        else if(postsTitle==='All Posts' && searchQuery!=='') {
            let combinedString = `${id} ${title} ${description} ${tags.join(' ')} ${date} ${image}`
            if(combinedString.toLowerCase().includes(searchQuery.toLowerCase())) return true
            else return false
        }
        else return true
    }
    const setTitle = (input: string) => {
        inputQuery('')
        setPostsTitle(input)
    }
    return (
        <motion.div className="blog-wrapper">
            <Header lightTheme={lightTheme} setTitle={setTitle} tags={tags} text={postsTitle} />
            <SearchBar value={value} setValue={setValue} formSubmit={formSubmit} />
            <motion.div variants={parentAnimation} animate="visible" initial="hidden" className="posts">
                {descriptions.length && 
                <AnimatePresence>
                {descriptions.filter(filterFunction).length ? 
                    descriptions.filter(filterFunction).map((descript, i) => {
                    let {id, title, description, tags, date, image} = descript;
                    // console.log('id: ', id)
                    // console.log('description: ', description)
                    // console.log('tags: ', tags)
                    return ( 
                        <motion.div variants={childrenAnimation} exit="hidden"
                        initial="hidden" animate="visible" transition={{delay: 0.4*i}}
                        key={i} className='blog-description'>
                            <motion.div className='b-d-image-container'>
                                <motion.div className="b-d-image-div">
                                    <Link href={{pathname: '/post', query: {'post': `${id}`}}}>
                                        <motion.img 
                                        whileHover={{scale: 1.1}} whileTap={{scale: 1}}
                                        className="blog-description-img" src={image} />
                                    </Link>
                                </motion.div>
                            </motion.div>
                            <motion.div className='b-d-text-container'>
                                <motion.div className='b-d-t-c-first'>
                                    <motion.span whileHover={{scale: 1.1}} className='b-d-title'>
                                        <Link href={{pathname: '/post', query: {'post': `${id}`}}}>{title}</Link>
                                    </motion.span>
                                    <motion.span className='b-d-date'>{date}</motion.span>
                                </motion.div>
                                <motion.div className='b-d-t-c-second'>
                                    {/* @ts-ignore */}
                                    {tags.map((tag: string, j: number) => {
                                        return (
                                        <motion.div 
                                        onClick={() => {setPostsTitle(tag)}}
                                        whileHover={tagStyles} key={`tag-${j}`} className='tag'>
                                            <a>{tag.toUpperCase()}</a>
                                        </motion.div>)
                                    })}
                                </motion.div>
                                <motion.div className='b-d-t-c-third'>
                                    <motion.p>{description}</motion.p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    );
                }) :
                <motion.div transition={{delay: 1.6,duration: 0.2}}
                variants={childrenAnimation} initial="hidden" animate="visible" exit="hidden" className="empty-div">
                    <motion.img src={lightTheme?"":"./error-empty-dark.png"} />
                    <motion.span>The search term: "<span style={{fontStyle: 'italic'}}>{searchQuery}</span>" could not be found amongst the blog data</motion.span>
                </motion.div>}
            </AnimatePresence>
            }
            </motion.div>
        </motion.div>
    )
}

export default blog

const parentAnimation = {
    hidden: {
        opacity: 0,
        x: 300,
        transition: {when: "afterChildren"}
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.4
        }
    }
}
const childrenAnimation = {
    hidden: {
        opacity: 0,
        x: 300,
    },
    visible: {
        opacity: 1,
        x: 0, 
        transition: {delay: 0.4}
    }
}