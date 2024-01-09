// Globals
window.SCORE = 0;
window.PAUSEGAME = false;
window.PLAYERSPEED = 1;  // Just try some values.

// Application definition
let app = new PIXI.Application({
    background: '#ffffff',
    resizeTo: window,
});
document.body.appendChild(app.view);

// Add Sprites
app.stage.addChild(player)
app.stage.addChild(target);

// Add Score Text
app.stage.addChild(scoreText);

// MAIN Game Loop
resetGame();
app.ticker.add((delta) => {
    if (window.userInput !== null && !window.PAUSEGAME) {
        parseInput(window.userInput)  // Process User Input.
        // window.userInput = null;  // Reset the user input.

        if (collisionTest(player, target)) {
            window.userInput = null;
            window.PAUSEGAME = true;
            window.SCORE += 1;
            scoreText.text = `Score: ${window.SCORE}`;  // Redraw score
            winScreen();
        }

        // OUT OF BOUNDS, RESTART.
        if ((player.x > screen.width) | (player.x < 0) | (player.y > screen.height) | (player.y < 0)) {
            window.userInput = null;
            window.PAUSEGAME = true;
            resetGame();
            window.PAUSEGAME = false;
        }
    }
});

// Win Screen.
var winScreenTimeUp = 2000 // 2 seconds
const winScreen = async () => {
    app.stage.addChild(youDidIt);
    await delay(winScreenTimeUp);
    app.stage.removeChild(youDidIt);
    window.PAUSEGAME = false;
    resetGame();
}

function resetGame() {
    player.x = randIntBetween(50, app.screen.width - 50)
    player.y = randIntBetween(50, app.screen.height - 50)
    target.x = randIntBetween(50, app.screen.width - 50)
    target.y = randIntBetween(50, app.screen.height - 50)
}
