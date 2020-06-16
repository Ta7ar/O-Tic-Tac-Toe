class Session{
    
    player_one_socket;
    player_two_socket;

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
    

    constructor(pl_one_name,pl_one_socket,code){
        this.gameState.p1_name = pl_one_name;
        this.player_one_socket = pl_one_socket;
        this.code = code;
        
        
        
    }

    JoinSession=(name,socket)=>{
        this.gameState.p2_name = name;
        this.player_two_socket = socket;
    }
    
    Broadcast=(event,data) => {
        this.player_one_socket.emit(event, data);
        this.player_two_socket.emit(event, data);
    }
  
    PlayerMove=(index,value)=> {
        this.gameState.grid[index]=value;
        this.gameState.p1_turn = !this.gameState.p1_turn
    }

    checkWinner = () => {

        const grid = this.gameState.grid;
    
    
        if(grid[0]===grid[1] &&
            grid[1]===grid[2]){
            
            if(grid[0]===1){
                this.gameState.p1_score += 1;
                this.gameState.grid = [0,0,0,0,0,0,0,0,0];
                this.gameState.p1_turn = false;
                return "player_one";
            }
            else if(grid[0]===-1){
                this.gameState.p2_score += 1;
                this.gameState.grid = [0,0,0,0,0,0,0,0,0];
                this.gameState.p1_turn = true;
                return "player_two";
            }
        }

        if(grid[3]===grid[4] &&
            grid[4]===grid[5]){
            
            if(grid[3]===1){
                this.gameState.p1_score += 1;
                this.gameState.grid = [0,0,0,0,0,0,0,0,0];
                this.gameState.p1_turn = false;
                return "player_one";
            }
            else if(grid[3]===-1){
                this.gameState.p2_score += 1;
                this.gameState.grid = [0,0,0,0,0,0,0,0,0];
                this.gameState.p1_turn = true;
                return "player_two";
            }
        }

        if(grid[6]===grid[7] &&
            grid[7]===grid[8]){
            
            if(grid[6]===1){
                this.gameState.p1_score += 1;
                this.gameState.grid = [0,0,0,0,0,0,0,0,0];
                this.gameState.p1_turn = false;
                return "player_one";
            }
            else if(grid[6]===-1){
                this.gameState.p2_score += 1;
                this.gameState.grid = [0,0,0,0,0,0,0,0,0];
                this.gameState.p1_turn = true;
                return "player_two";
            }
        }
    
    
        //vertical lines
        for(let j=0; j<3; j++){
            if(grid[j]===grid[j+3] &&
                grid[j+3]===grid[j+6] &&
                grid[j]===grid[j+6]
                ){
                    if(grid[j] === 1){
                        this.gameState.p1_score += 1;
                        this.gameState.grid = [0,0,0,0,0,0,0,0,0];
                        this.gameState.p1_turn = false;
                        return "player_one";
                    }
                    else if(grid[j]===-1){
                        this.gameState.p2_score += 1;
                        this.gameState.grid = [0,0,0,0,0,0,0,0,0];
                        this.gameState.p1_turn = true;
                        return "player_two";
                    }
                }
        }
        //diagonals
        if(grid[0] === grid[4] &&
            grid[4] === grid[8]){
                if(grid[0] === 1){
                    this.gameState.p1_score += 1;
                    this.gameState.grid = [0,0,0,0,0,0,0,0,0];
                    this.gameState.p1_turn = false;
                    return "player_one";
                }
                else if(grid[0] === -1){
                    this.gameState.p2_score += 1;
                    this.gameState.grid = [0,0,0,0,0,0,0,0,0];
                    this.gameState.p1_turn = true;
                    return "player_two";
                }
            }
    
        else if(grid[2] === grid[4] &&
                grid[4] === grid[6]){
                    if(grid[2] === 1){
                        this.gameState.p1_score += 1;
                        this.gameState.grid = [0,0,0,0,0,0,0,0,0];
                        this.gameState.p1_turn = false;
                        return "player_one";
                    }
                    else if (grid[2] === -1){
                        this.gameState.p2_score += 1;
                        this.gameState.grid = [0,0,0,0,0,0,0,0,0];
                        this.gameState.p1_turn = true;
                        return "player_two";
                    }
            }
    
        else{
            if(this.isFullBoard()){
                this.gameState.ties += 1;
                this.gameState.grid = [0,0,0,0,0,0,0,0,0];
                this.gameState.p1_turn = !this.gameState.p1_turn;
                return "tie";
            }
            

            
        }

        return "ongoing";
    
    

        
    }
    

    isFullBoard =()=> {
        for(let i=0;i<9;i++){
            if(this.gameState.grid[i] === 0){
                
                return false;
            }
        }
    
        return true;
    }
        
}



module.exports = {
    Session:Session
}