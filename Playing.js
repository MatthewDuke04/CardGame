deck = []
imgs = {
    'card1': 'CardImages/GoblinScout.png',
    'card2': 'CardImages/YoungTreant.png',
    'card3': 'CardImages/ElvenArcher.png'
}
class Playing extends Phaser.Scene
{
    constructor()
    {
        super("Playing");
    }
    preload() 
    {
        
        deck.forEach((element) => {
            this.load.image(element, element); 
        });
        
        
    }
    
    create() 
    {
        let i = 0
        this.cameras.main.setBackgroundColor('rgb(0, 100, 0)');
        deck.forEach (element=> {
            
            const x = 700 + i * 50
            i++
            const image = this.add.image(x,870,element);
            image.setDisplaySize(175, 250);
            image.setInteractive({draggable:true});
            image.on('pointerover', () =>{
                image.setDisplaySize(200, 300)
                this.children.bringToTop(image)
            })

            image.on('pointerout', (event, gameObject) =>
            {
                image.setDisplaySize(175,250)
            })

            this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
            {
                gameObject.x = dragX;
                gameObject.y = dragY;
            })

        });
        
            

            
    
        }

        
        }
    
    


class DeckEditor1 extends Phaser.Scene{
    constructor(){
        super('DeckEditor1')
    }
    preload(){

        this.load.image('add', "IconFolder/AdditionIcon.png")
        this.load.image('subtract', 'IconFolder/SubtractionIcon.png')
        for (const key in imgs) {
            this.load.image(key, imgs[key])
        }
    }

    create(){

        const back = this.add.text(100,0,'Back',{font:'64px Luminari'})
        back.setShadow(1,1, 'white', 0, false, true)
        back.setColor('black')
        back.setInteractive({useHandCursor: true})
        back.on('pointerdown',goBack)

        function goBack()
        {
            this.scene.scene.start('startMenu');
        }

        const heading = this.add.text(800,0,'Deck Editor',{font:'64px Luminari'});
        heading.setShadow(1,1, '#000', 0, false, true)
        heading.setColor('brown')
        this.cameras.main.setBackgroundColor('rgb(0, 100, 0)');

        const images =[]
        const plusSigns =[]
        const subSigns =[]
        for (const key in imgs) {
            
            const subSign = this.add.image(0,0,'subtract')
            .setDisplaySize(50,50)
            .setInteractive()
            .on('pointerdown',removeFromDeck)
            subSigns.push(subSign)
            const plusSign = this.add.image(0,0,'add')
            .setDisplaySize(50,50)
            .setInteractive()
            .on('pointerdown',addToDeck)
            plusSigns.push(plusSign)

            const image = this.add.image(0,0, key, imgs[key])
            .setDisplaySize(175, 250)
            images.push(image)
            
            
            function addToDeck()
            {
                deck.push(imgs[key])
                image.setTint('0x16FF00')
                console.log(`Added ${imgs[key]} to deck`)
            }

            function removeFromDeck()
            {
                deck.pop(imgs[key])
                image.setTint('0xffffff')
                console.log(`Removed ${imgs[key]} from deck`)
            }

            

            
            }
            const imageGrid = Phaser.Actions.GridAlign(images,{
                width: 10,
                height: 2,
                cellWidth: 250,
                cellHeight: 300,
                x: 0,
                y: -100
            });

            const plusSignGrid = Phaser.Actions.GridAlign(plusSigns,{
                width: 10,
                height: 2,
                cellWidth: 250,
                cellHeight: 250,
                x: 57,
                y:150
            });

            const subSignGrid = Phaser.Actions.GridAlign(subSigns,{
                width: 10,
                height: 2,
                cellWidth: 250,
                cellHeight: 250,
                x: -75,
                y:150
            });
        
    }
}
