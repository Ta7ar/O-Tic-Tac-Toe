import React, { Component } from 'react';
import {InputGroup,InputGroupAddon,Input,InputGroupText, Button} from 'reactstrap';
import {motion,AnimatePresence} from 'framer-motion';
import {Link} from 'react-router-dom';
import io from 'socket.io-client';

import socket from './../apis/port';



export default class createSession extends Component {
    constructor(props){
        super(props);
        this.state = {
            player1_name:""
        };
        
        
        
        
    }
    
    

    updateForm = (e) => {
        this.setState({
            player1_name: e.target.value
        }
        );

    }
    
    createSession = (e) => {
        if(this.state.player1_name !== ""){
            socket.emit("create-session",this.state.player1_name);
        }

        else{
            e.preventDefault();
        }
    }

    

    
      

    render() {
        return (
            
            <div className="session-page">
                <InputGroup style={{width:"95%", margin:"0 auto"}}>
                    <Input placeholder="username" onChange={this.updateForm}/>
                </InputGroup>
                
                    <Button className="session-btn" color="primary" onClick={this.createSession}>Create & Join</Button>
                    
                
            </div>
            
            
            
        )
    }
}
