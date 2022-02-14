import { motion } from 'framer-motion'
import React from 'react'

const CopyButton = ({text}: {text: string}) => {
    const [copyResultMsg, setMsg] = React.useState('')
    const copy = () => {
        navigator.clipboard.writeText(text)
            .then((success) => {
                setMsg('Message Copied To Clipboard!')
                setTimeout(() => {
                    setMsg('')
                }, 4000)
            })
            .catch((e) => {
                setMsg('Error Copying Message')
            })
    }
    return (
        <>
            {copyResultMsg!=='' && <motion.div className="copy-message"><span>{copyResultMsg}</span></motion.div>}
            <motion.button onClick={copy} whileTap={{scale: 0.95}} className='copy-button'>[ ]</motion.button>
        </>
    
  )
}

export default CopyButton