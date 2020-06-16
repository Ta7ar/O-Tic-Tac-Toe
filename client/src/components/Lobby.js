import React, { Component, useState } from 'react'
import {motion,AnimatePresence} from 'framer-motion';
import {Button, Spinner} from 'reactstrap';
import Board from './Board';
import Stats from './Stats';
import Announcement from './Announcement';
import socket from './../apis/port';


export default class Lobby extends Component {
    
    constructor(props){
      super(props);
      this.state = {
    
        isPlayer_one:this.props.isPlayer_one,
        code: this.props.code,
        gamestate: this.props.gamestate
        
        
      }
    }



    componentDidMount=()=>{
      socket.on("update",(gamestate)=> {
        this.setState({gamestate: gamestate})
        
      })
    }


    
    render=()=>{
      const gamestate = this.state.gamestate;
      
      return(
        <div>
          {this.props.waiting && <Waiting code={this.state.code}/>}
          {!this.props.waiting && <Game gamestate={gamestate} isPlayer_one={this.props.isPlayer_one}/>}
        </div>
    )
    
  
  
      
    }
}

class Waiting extends Component{
  render(){
    return (
      <AnimatePresence>
        <motion.div className="waiting-lobby" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} >
            <h5>Waiting for someone to join</h5>
            <Spinner color="dark"></Spinner>
            <h6>Click to Copy Session Code:</h6>
            <Button onClick={()=> {navigator.clipboard.writeText(this.props.code)}}>{this.props.code}</Button>
            
        </motion.div>
      </AnimatePresence>
    )
  }
}


class Game extends Component{

  state={
    announcement: false,
    message: "",
    OpponentDisconnected: false
  }

  


  componentDidMount=()=> {
    socket.on("announcement", (text)=>{
      switch (text){
        case "player_one":
          if(this.props.isPlayer_one){
            this.setState({
              announcement:true,
              message: "You Won!"
            });
          }
          else{
            this.setState({
              announcement:true,
              message: "You Lost"
            }
            );
          }
          break;
        case "player_two":
          if(this.props.isPlayer_one){
            this.setState({
              announcement:true,
              message: "You Lost"
            });
          }
          else{
            this.setState({
              announcement:true,
              message: "You Won!"
            });
          }
          break;
        case "tie":
          this.setState({
            announcement:true,
            message: "Tie"
          });
          break;
        
      }
      setTimeout(()=>{
        this.setState({announcement: false});
      }, 1250);
    })

    socket.on("user-disconnected", ()=>{
      this.setState({OpponentDisconnected:true});
    })
  }
  
  render(){
    const gamestate = this.props.gamestate;
    

    return(
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100%"}}>
      {this.state.OpponentDisconnected &&
        <AnimatePresence>
          <motion.div style={{display:"flex", alignItems:"center", justifyContent:"center",height:"100%",position:"absolute",left:"0%",top:"0%",width:"100%"}}
          initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <h6>Opponent Disconnected :( </h6>
          </motion.div>
        </AnimatePresence>}
      {!this.state.OpponentDisconnected && 
      <div className="game">
        <div className="board-container">
          <Board gamestate={gamestate} isPlayer_one={this.props.isPlayer_one}/>
          
        </div>
        <div className="stats-container">
          {this.state.announcement && <Announcement>{this.state.message}</Announcement>}
          {!this.state.announcement && <Stats gamestate={gamestate} isPlayer_one={this.props.isPlayer_one}/>}
        </div>
      </div>
      }
      </div>
    )
    
  }
}


