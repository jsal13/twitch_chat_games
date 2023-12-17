<script setup lang="ts">
import { onMounted, ref, type Ref, watch } from "vue";

import PuzzleArea from './components/PuzzleArea.vue'
import CategoryArea from './components/CategoryArea.vue'
import GuessesArea from './components/GuessesArea.vue'
import ScoreBoard from './components/ScoreBoard.vue'
import tmi from "tmi.js";

import { GetPuzzle } from './puzzle'


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

onMounted(() => {
  resetGame();
});

watch(puzzleData, async (newData: { category: string, puzzle: string }) => {
  console.log(newData);
  puzzle.value = newData.puzzle.toUpperCase();
  category.value = newData.category.toUpperCase();
})

// Create an N ms delay.
const delay = ms => new Promise(res => setTimeout(res, ms));


const client = new tmi.Client({
  channels: ['melat0nin']
});

client.connect();
client.on('message', (channel: string, tags: string[], message, self) => {
  if (message === "!reset") {
    resetGame();
  }
  const args: string = message
  const letter = args.trim().toUpperCase()
  if (letter?.length === 1) {
    guessLetter(letter);
  } else {
    const guess = args.trim().toUpperCase()
    guessThePuzzle(guess);
  }
})

function guessLetter(letter: string) {
  guesses.value.push(letter);
}

function guessThePuzzle(guess: string | undefined) {
  if (guess === puzzle.value) {
    console.log("You did it.")
    for (var val of puzzle.value.split("")) {
      guessLetter(val);
    }
    // THIS DOESN'T WORK
    var winScreenTimeUp = 5000 // 5 seconds
    const winScreen = async () => {
      await delay(winScreenTimeUp);
      // PAUSEGAME = false;
      console.log("resetting...")
      resetGame();
    }
  }
  else {
    console.log("You are the greatest fool.")
  }
}

function resetGame() {
  puzzleData.value = GetPuzzle();
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
