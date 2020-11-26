class Player{
    constructor(){}

    update(name){
        db.ref("/").update({ 
            player1:name
        })
    }
}