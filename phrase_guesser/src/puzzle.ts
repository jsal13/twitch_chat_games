const puzzlePhrases: string[] = [
    "Piece of cake",
    "Bite the bullet",
    "Hit the hay",
    "Break a leg",
    "Cost an arm and a leg",
    "Hang in there",
    "Get cold feet",
    "Spill the beans",
    "Kick the bucket",
    "On the same page",
    "Under the weather",
    "Go the extra mile",
    "Beat around the bush",
    "By the skin of your teeth",
    "Jump the gun",
    "Bite off more than you can chew",
    "Cut to the chase",
    "Spitting image",
    "Kill two birds with one stone",
    "A dime a dozen",
]

const puzzlePeople: string[] = [
    "Emma Watson",
    "LeBron James",
    "Taylor Swift",
    "Barack Obama",
    "Cristiano Ronaldo",
    "Lady Gaga",
    "Kylie Jenner"
]

const puzzleVideoGames: string[] = [
    "Super Mario All Stars",
    "Super Metroid",
    "Chrono Trigger",
    "The Legend of Zelda A Link to the Past",
    "Super Mario World",
    "Final Fantasy III",
    "Super Mario All-Stars",
    "Super Mario World",
    "Donkey Kong Country",
    "Street Fighter II Turbo",
    "EarthBound",
    "Super Castlevania IV",
    "Street Fighter II",
    "Super Street Fighter II",
    "Secret of Mana",
    "Super Mario Kart",
    "Tactics Ogre",
    "Tetris Attack",
    "Super Mario RPG Legend of the Seven Stars",
    "NBA Jam Tournament Edition",
    "Mega Man X",
    "Parodius",
    "Contra III The Alien Wars",
    "Mortal Kombat II",
    "NBA Jam",
    "International Superstar Soccer Deluxe",
    "Rock n Roll Racing",
    "International Superstar SoccerTrouble",
    "Demons Crest",
    "The Legend of the Mystical Ninja",
    "Jimmy Connors Pro Tennis Tour",
    "Batman Returns",
    "Terranigma",
    "Breath of Fire II",
    "The Magical Quest Starring Mickey Mouse",
    "Kirby Super Star",
    "Space Megaforce",
    "Ogre Battle",
    "R-Type III The Third Lightning",
    "Lemmings",
    "Wild Guns"
];

const puzzleData: { category: string, data: string[] }[] = [
    {
        category: "Phrase",
        data: puzzlePhrases
    },
    {
        category: "Person",
        data: puzzlePeople
    },
    {
        category: "Video Games",
        data: puzzleVideoGames
    }
]

function GetPuzzle(): { category: string, puzzle: string } {
    const randIdx: number = Math.floor(Math.random() * puzzleData.length)

    const randCategory: string = puzzleData[randIdx].category;
    const randPuzzle: string = puzzleData[randIdx].data[Math.floor(Math.random() * puzzleData[randIdx].data.length)];
    return { category: randCategory, puzzle: randPuzzle }
}

export { GetPuzzle, puzzleData };
