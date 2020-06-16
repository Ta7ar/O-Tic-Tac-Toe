import React from 'react';
import {Component} from 'react';
import Square from './Square';
import socket from './../apis/port';

/*
gameState = {            //packaged data sent to frontend
    p1_name: "",
    p2_name: "",
    p1_score: 0,
    p2_score: 0,
    ties: 0,
    p1_turn: true,
    grid: [0,0,0,
        0,0,0,
        0,0,0]

}
*/


export default class Board extends Component {
    
    
    
    playerMove = index => {
        if(this.state.p1_turn === this.state.isPlayer_one
            && this.state.grid[index]===0){
                if(this.state.isPlayer_one){
                    socket.emit("player-move", index, 1);
                }
                else{
                    socket.emit("player-move", index, -1);
                }
        }
    }

//note to self, when prop is changed state is not changed
    render = () => {
        
        const gamestate = this.props.gamestate;
    
        return (
            <div className="board">
                {gamestate.grid.map((value,index) => {
                    return <Square val={value.toString()} index={index} gamestate={{isPlayer_one:this.props.isPlayer_one, ...gamestate}}/>
                }) }

            
                

            </div>

        )
    }
}

