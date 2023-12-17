<script setup lang="ts">
import { type Ref, ref, onMounted, onUpdated, watch } from 'vue';
interface Props {
    puzzle: string,
    guesses: string[]
}

const props = defineProps<Props>();
const puzzleSoFar: Ref<string> = ref("");

function DisplayPuzzleLetters(): string {
    let upperPuzzle = props.puzzle.toUpperCase();
    let acc: string[] = []
    for (let idx = 0; idx < upperPuzzle.length; idx++) {
        let currentChar = upperPuzzle[idx];
        if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").includes(currentChar)) {
            if (props.guesses.includes(currentChar)) {
                acc.push(currentChar)
            }
            else {
                acc.push("_")
            }
        }
        else {
            acc.push(currentChar)
        }
    }
    return acc.join("&nbsp;")
}

onMounted(() => {
    puzzleSoFar.value = DisplayPuzzleLetters();
});

onUpdated(() => {

    puzzleSoFar.value = DisplayPuzzleLetters();
});

watch(props.guesses, () => {
    puzzleSoFar.value = DisplayPuzzleLetters();
})


</script>

<template>
    <div class="guessing-area container">
        <span class="puzzle-text" v-html="puzzleSoFar"></span>
    </div>
</template>

