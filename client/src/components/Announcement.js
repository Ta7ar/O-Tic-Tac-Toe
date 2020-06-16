import React, { Component } from 'react'
import {AnimatePresence, motion} from 'framer-motion';

export default class Announcement extends Component {
   

    render() {
        return (
            <AnimatePresence>
                <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                    <h3>{this.props.children}</h3>
                </motion.div>
            </AnimatePresence>
        )
    }
}
