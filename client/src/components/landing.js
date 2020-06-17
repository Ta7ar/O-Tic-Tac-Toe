import React, { Component, useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, NavLink, Nav} from 'reactstrap';
import CreateSession from './createSession';
import JoinSession from './joinSession';
import {Link,Route,Switch} from 'react-router-dom';
import { AnimatePresence,motion } from 'framer-motion';
import socket from './../apis/port';


const Landing = props => {
   
    const [modal_create, setModal_create] = useState(false);
    const [modal_join, setModal_join] = useState(false);
      
    const create_toggle = () => setModal_create(!modal_create);
    const join_toggle = () => setModal_join(!modal_join);

    
    return (
        <AnimatePresence>
        <motion.div className="landing" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <h1 className="title">O Tic-Tac-Toe</h1>
            
                <Button className="session-btn" color="primary" size="md" onClick={create_toggle} >Create Session</Button>
                <Modal isOpen={modal_create} toggle={create_toggle}>
                    <ModalHeader toggle={create_toggle}></ModalHeader>
                    <ModalBody>
                        <CreateSession/>
                    </ModalBody>
                </Modal>
                    
            
            
                <Button className="session-btn" color="primary" size="md" onClick={join_toggle}>Join Session</Button>
                <Modal isOpen={modal_join} toggle={join_toggle}>
                    <ModalHeader toggle={join_toggle}></ModalHeader>
                    <ModalBody>
                        <JoinSession/>
                    </ModalBody>
                </Modal>
                
                <NavLink href="https://github.com/Ta7ar"><Button>Github</Button></NavLink>
                
            
        </motion.div>
        </AnimatePresence>
    )
    
}

export default Landing;
