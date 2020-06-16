import React, { Component} from 'react'
import { Spinner,Table } from 'reactstrap';
import {AnimatePresence, motion} from 'framer-motion';

export default class Stats extends Component {
    centeredStyle = {
        display:"flex",
        alignItems: "center",
        justifyContent:"center"
    }

    render() {
        const gamestate = this.props.gamestate;
        const isPlayer_one = this.props.isPlayer_one;
        const opponent_name = (isPlayer_one)? gamestate.p2_name : gamestate.p1_name;
        const wins = (isPlayer_one)?gamestate.p1_score:gamestate.p2_score;
        const losses = (isPlayer_one)?gamestate.p2_score:gamestate.p1_score;
        const ties = gamestate.ties;

        return (
            <AnimatePresence>
            <motion.div className="stats" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                {gamestate.p1_turn === isPlayer_one &&
                    <div className="turn">
                        <h5>Your Turn</h5>
                    </div>}

                {gamestate.p1_turn !== isPlayer_one &&
                    <div className="turn" style={{display:"grid", gridTemplateRows:"1fr 1fr"}}>
                        <h5>{opponent_name}'s Turn</h5>
                        
                        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                            <Spinner color="dark" ></Spinner>
                        </div>
                    </div>}

                <div style={{width:"100%", height:"100%", display:"grid", gridTemplateRows:"1fr 1fr",gridTemplateColumns:"1fr 1fr 1fr"}}>
                    <div style={this.centeredStyle}>
                        <p>Wins</p>    
                    </div>
                    <div style={this.centeredStyle}>
                        <p>Ties</p>    
                    </div>
                    <div style={this.centeredStyle}>
                        <p>Losses</p>    
                    </div>

                    <div style={this.centeredStyle}>
                        <p>{wins}</p>    
                    </div>
                    <div style={this.centeredStyle}>
                        <p>{ties}</p>    
                    </div>
                    <div style={this.centeredStyle}>
                        <p>{losses}</p>    
                    </div>
                    
                </div>
                    
            </motion.div>
            </AnimatePresence>
        )
    }
}
