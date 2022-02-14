import React from 'react'
import { useRouter } from 'next/router'
import { ContentfulBlogData } from '../../pages/post';
import { motion } from 'framer-motion';
import CopyButton from './CopyButton';
import DownloadButton from './DownloadButton';


const ContentPost = ({ piece, i, tagStyles, lightTheme } : {piece: ContentfulBlogData, i: number, tagStyles: {backgroundImage: string}, lightTheme: boolean}) => {
    const router = useRouter();
    // console.log(piece)
  return (
    <>
        {piece.nodeType==='embedded-asset-block' && 
          <motion.div key={`blog-content-post-image-${i}`} className='blog-content-post-image'>
            <motion.img whileTap={{scale: 1}} whileHover={{scale: 1.04}} src={`${piece.data.target!.fields.file.url}`} />
            {<motion.span><i>{piece.data.target?.fields.description}</i></motion.span>}
          </motion.div>
        }
        {piece.nodeType === 'heading-1' && <motion.h1 className='content-piece-header'>{piece.content[0].value}</motion.h1>}
        {piece.nodeType === 'paragraph' && <p className='content-piece-paragraph'>{piece.content[0].value}</p>}
        {piece.nodeType === 'heading-3' && <DownloadButton lightTheme={lightTheme} text={piece.content[0].value} />}
        {piece.nodeType === 'heading-4' && <motion.h3 className='content-piece-header-h3'>{piece.content[0].value}</motion.h3>}
        {piece.nodeType === 'heading-5' && <i className='content-piece-i'>{piece.content[0].value}</i>}
        {piece.nodeType === 'heading-6' && <pre className='content-piece-pre'><code className='content-piece-codeblock'>{piece.content[0].value}<CopyButton text={piece.content[0].value} /></code></pre>}
    </>
  )
}

export default ContentPost