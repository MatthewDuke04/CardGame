

class StartMenu extends Phaser.Scene{
    constructor()
    {
        super("startMenu")
    }
    preload()
    {
        
    }

    create()
    {
    
        const heading = this.add.text(765, 0, 'Forest Of Ruin', {font:'64px Luminari'});
        heading.setShadow(1,1, '#000', 0, false, true)
        heading.setColor('brown')

        
        this.cameras.main.setBackgroundColor('rgb(0, 100, 0)');
        const startButton = this.add.text(800, 200,'Start Game',{font:'64px Luminari'})
        .setInteractive({useHandCursor: true})
        .setPadding(10)
        .setColor('black')
        .setShadow(1,1,'white',2,false,true)
        .on('pointerdown', startGame)
        
        

        const deckEditorButton = this.add.text(800, 300,'Deck Editor',{font:'64px Luminari'})
        .setInteractive({useHandCursor: true})
        .setPadding(10)
        .setColor('black')
        .setShadow(1,1,'white',2,false,true)
        .on('pointerdown', goDeckEditor)
        
        function startGame() 
        {
            this.scene.scene.start('Playing');
        }
        function goDeckEditor()
        {
            this.scene.scene.start('DeckEditor1')
        }
    }
}
