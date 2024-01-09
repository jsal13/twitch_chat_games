// Player Sprite
const player = PIXI.Sprite.from('sprites/player.png')
player.anchor.set(0.5)  // center the anchor point
player.x = 100
player.y = 100
player.scale.set(2, 2); // (ScaleX, ScaleY)

// Target Sprite
const target = PIXI.Sprite.from('sprites/target.png')
target.anchor.set(0.5)  // center the anchor point
target.x = 200
target.y = 150
target.scale.set(2, 2); // (ScaleX, ScaleY)
// const inverseFilter = new PIXI.ColorMatrixFilter();
// target.filters = [inverseFilter];
// inverseFilter.negative();