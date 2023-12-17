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

const client = new tmi.Client({
  channels: ['melat0nin']
});

client.connect();
client.on('message', (channel, tags, message, self) => {
  let guess: string = message.trim().toUpperCase()
  console.log(guess)
  if (guess === "!RESET") {
    resetGame();
    return;
  };

  if (guess.length === 1 && "ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(guess)) {
    console.log(`Guessing letter ${guess}`)
    guessLetter(guess);
  } else {
    console.log(`Guessing puzzle ${guess}`)
    guessThePuzzle(guess);
  }
})

function guessLetter(guess: string) {
  guesses.value.push(guess);
}

function guessThePuzzle(guess: string) {
  if (guess === puzzle.value) {
    console.log("You did it.")
    for (var val of puzzle.value.split("")) {
      guessLetter(val);
    }
  }
  else {
    console.log("You are the greatest fool.")
  }
}

function resetGame() {
  console.log("I'm always resetting.")
  // guesses.value = [];  // THIS DOESNT WORK?!  FOR SOME REASON!?
  console.log("GV: ", guesses.value)
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
