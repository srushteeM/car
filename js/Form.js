class Form{
    constructor(){}
    display(){
        var title=createElement("h1","Car Racing Game")
        title.position(150,10);
        var input=createInput("Enter your name");
        input.position(180,170)
        var button = createButton('Register');
        button.position(200,250)
        button.mousePressed(function(){
            var name=input.value()
            console.log(name)
            player.update(name)
        })
    }
}