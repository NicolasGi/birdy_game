import birdie from "./birdie";

const controller = {
    init(game){
        window.addEventListener('keydown',(e)=>{
            if(e.key === 'j'){
                if(!(game.hasStarted)){
                    game.hasStarted = true
                }
            }
            birdie.goUp()
        })
    }
}
export default controller