const textStyle = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
});

// Score text and initial position.
const scoreText = new PIXI.Text(`Score: 0`, textStyle);
scoreText.x = 0;
scoreText.y = 0;

// Congratulation text and initial position. 
const youDidIt = new PIXI.Text('You Did It!', textStyle);
youDidIt.x = 50;
youDidIt.y = 100;
