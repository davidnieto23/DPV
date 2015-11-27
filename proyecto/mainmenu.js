
Game.MainMenu = function(game){



};

Game.MainMenu.prototype = {

	create : function(){

		
        this.game.add.tileSprite(0, 0, 1200, 800, 'background');	

		this.game.world.bounds.x = 0;

		this.game.world.bounds.y = 0;

		this.game.world.bounds.width =600;

		this.game.world.bounds.height = 800;

		this.playbutton = this.add.button(600, 450,'play',this.playclicked,this,1,0,2);

		this.playbutton.anchor.setTo(0.5,0.5);

		this.tweenplay = this.game.add.tween(this.playbutton).to({y:500},1300,Phaser.Easing.Sinusoidal.InOut,true,0,100,true);

	},


//Botón de play en el menu principal
	playclicked : function() {

		score = 0;

		this.game.state.start('Mapa');
		//music = this.game.add.audio('song');
        //music.play('',0,1,true,false);

	},



};





Game.LoseScreen = function(game){



};



Game.LoseScreen.prototype = {

	create : function(){

		this.game.world.bounds.x = 0;

		this.game.world.bounds.y = 0;

		this.game.world.bounds.width = 600;

		this.game.world.bounds.height = 800;

		this.lose = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'lose');

		this.lose.anchor.setTo(0.5,0.5);

		this.playbutton = this.add.button(this.game.world.centerX, 40, 'play',this.playclicked,this,1,0,2);

		this.playbutton.anchor.setTo(0.5,0.5);

		this.tweenplay = this.game.add.tween(this.playbutton).to({y:50},1000,Phaser.Easing.Sinusoidal.InOut,true,0,100,true);

		this.scoretextmain = this.add.text(this.game.world.centerX,450,score,{ font: "40px Arial", fill: "#fff", align: "center" })

		this.scoretextmain.anchor.setTo(0.5,0.5);

		music.stop();

		

	},
//botón de play en la vista cuando un jugador pierde
	playclicked : function() {

		score = 0;

		this.game.state.start('Game');
		music = this.game.add.audio('song');
        music.play('',0,1,true,false);
	},



};


Game.MapScreen = function(game){



};



Game.MapScreen.prototype = {

	create : function(){
		
		var mapa = this.game.add.sprite(0, 0 , 'mapa');


		this.game.world.setBounds(0, 0, 543, 2048);

		cursors = this.game.input.keyboard.createCursorKeys();

		mapa.inputEnabled = true;

		mapa.input.enableDrag();
		
		this.playbutton = this.add.button(this.game.world.centerX, 100, 'boton',this.playclicked,this,1,0,2);

		

	},

	playclicked : function() {

		score = 0;

		this.game.state.start('Game');
		music = this.game.add.audio('song');
        music.play('',0,1,true,false);
	},



	update : function(){ 

	 if (cursors.up.isDown)
    {
        //  If the shift key is also pressed then the world is rotated
   
            this.game.camera.y -= 20;
        }
    
    else if (cursors.down.isDown)
    {
        
            this.game.camera.y += 20;
        }
   

},
render : function() {

   // this.game.debug.cameraInfo(this.game.camera, 32, 500);

}

};



Game.WinScreen = function(game){



};



Game.WinScreen.prototype = {

	create : function(){

		this.game.world.bounds.x = 0;

		this.game.world.bounds.y = 0;

		this.game.world.bounds.width = 600;

		this.game.world.bounds.height = 800;

		this.winimage = this.game.add.sprite(0,0,'win');

		this.playbutton = this.add.button(this.game.world.centerX, 500, 'play',this.playclicked,this,1,0,2);

		this.playbutton.anchor.setTo(0.5,0.5);

		this.tweenplay = this.game.add.tween(this.playbutton).to({y:550},1000,Phaser.Easing.Sinusoidal.InOut,true,0,100,true);

		

	},
//botón de play en la vista donde el jugador ganó
	playclicked : function() {

		score = 0;

		this.game.state.start('Game');

		
		this.game.state.start('Game');
		music = this.game.add.audio('song');
        music.play('',0,1,true,false);
	},

};