// Create an N ms delay.
const delay = ms => new Promise(res => setTimeout(res, ms));

// Check for collision between two sprite objects.
function collisionTest(obj1, obj2) {
    const bounds1 = obj1.getBounds();
    const bounds2 = obj2.getBounds();

    return bounds1.x < bounds2.x + bounds2.width
        && bounds1.x + bounds1.width > bounds2.x
        && bounds1.y < bounds2.y + bounds2.height
        && bounds1.y + bounds1.height > bounds2.y;
}

function randIntBetween(min, max) { // inclusive
    return Math.floor(Math.random() * (max - min + 1) + min)
}