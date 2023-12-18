<script setup lang="ts">
import { onMounted, ref, type Ref, watch, onActivated } from "vue";

import PuzzleArea from './components/PuzzleArea.vue'
import CategoryArea from './components/CategoryArea.vue'
import GuessesArea from './components/GuessesArea.vue'
import ScoreBoard from './components/ScoreBoard.vue'
import tmi from "tmi.js";

import { GetPuzzle } from './puzzle'

const ALPHABET: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

const scores: Ref<{ user: string, score: number }[]> = ref([
  { "user": "Melat0nin", "score": 10 },
  { "user": "webtomato", "score": 11 },
  { "user": "Jen_theHuman", "score": -1 },
  { "user": "enigma_mf", "score": 3 }
])
const puzzleData: Ref<{ category: string, puzzle: string }> = ref({ category: "", puzzle: "" })
const puzzle: Ref<string> = ref("")
const category: Ref<string> = ref("")
const guesses: Ref<string[]> = ref([])
const solved: Ref<boolean> = ref(false)

onMounted(() => {
  setInterval(RunRandomGuesses, 5000);
  resetGame();
});

function RunRandomGuesses() {
  if (solved.value) return;
  makeRandomGuess()
}

watch(puzzleData, async (newData: { category: string, puzzle: string }) => {
  console.log(newData);
  puzzle.value = newData.puzzle.toUpperCase();
  category.value = newData.category.toUpperCase();
})

const client = new tmi.Client({
  channels: ['melat0nin']
});

client.connect();
client.on('message', (channel, tags, message, self) => {
  if (self || !message.startsWith('!')) return;

  const args = message.slice(1).split(' ');
  const command = args.shift()?.toUpperCase();
  const guess = args.join(" ").trim().toUpperCase();

  console.log(args, command, guess)

  if (command === 'RESET') {
    resetGame();
  }
  else if (command === 'SOLVE') {
    console.log(`Solving puzzle ${guess}`)
    if (solved.value) return;
    guessThePuzzle(guess);
  }
})

function guessLetter(guess: string) {
  guesses.value.push(guess);
}

function makeRandomGuess() {
  let acc = 0;
  let randAlpha: string = ""
  while (acc < 200) {
    acc += 1 // Failsafe.
    randAlpha = ALPHABET[Math.floor(Math.random() * ALPHABET.length)]
    if (!guesses.value.includes(randAlpha)) {
      console.log("Guessing ", randAlpha)
      break;
    }
  }
  if (!guesses.value.includes(randAlpha)) {
    guessLetter(randAlpha)
  }
}

function guessThePuzzle(guess: string) {

  if (guess === puzzle.value) {
    console.log("You did it.")
    solved.value = true;

    for (var val of puzzle.value.split("")) {
      guessLetter(val);
    }
    setTimeout(() => {
      resetGame()
    }, 5000);
  }
  else {
    console.log("You are the greatest fool.")
  }
}

function resetGame() {
  guesses.value.splice(0);
  puzzleData.value = GetPuzzle();
  solved.value = false;
}

</script>

<template>
  <header>
    <h1>Phrase Guesser</h1>
  </header>

  <main>
    <div class="container">
      <PuzzleArea :puzzle="puzzle" :guesses="guesses" />
      <hr />
      <GuessesArea :guesses="guesses" />
      <hr />
      <CategoryArea :category="category" />
      <hr />
      <!-- <ScoreBoard :scores="scores" /> -->
    </div>
  </main>
</template>
