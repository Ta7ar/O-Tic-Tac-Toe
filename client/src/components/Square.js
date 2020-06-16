import React, {Component} from 'react';
import {Button} from 'reactstrap';
import socket from './../apis/port';

 export default class Square extends Component{


    renderValue = (val) => { //converts a value index to a string
        if (val === "1"){
            //return "✖"
            return "✕"
            
        }
        else if (val === "-1"){
            return "◯"
            //return "○"
        }
        else{
            return ""
        }
    }

    playerMove = () => {
        if(this.props.gamestate.p1_turn === this.props.gamestate.isPlayer_one
            && this.props.gamestate.grid[this.props.index]===0){
                if(this.props.gamestate.isPlayer_one){
                    socket.emit("player-move", this.props.index, 1);
                    console.log("X");
                }
                else{
                    socket.emit("player-move", this.props.index, -1);
                    console.log("O");
                }
        }
    }
    

    render(){
        return(
        
            <div className="square-inner" onClick={this.playerMove}>
                {this.renderValue(this.props.val)}
            </div>
        
        )
    }
}
