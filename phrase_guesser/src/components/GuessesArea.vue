<script setup lang="ts">
import { type Ref, ref, onMounted, onUpdated, watch } from 'vue';
interface Props {
    guesses: string[]
}

const props = defineProps<Props>();
const lettersLeft: Ref<string> = ref("ABCDEFGHIJKLMNOPQRSTUVWXYZ")

function DisplayGuessesLetters(): string {
    let allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let acc: string[] = []
    for (let idx = 0; idx < allLetters.length; idx++) {
        let currentChar = allLetters[idx];

        if (props.guesses.includes(currentChar)) {
            acc.push("_")
        }
        else {
            acc.push(currentChar)
        }
    }

    return acc.join("&nbsp;")
}

onMounted(() => {
    lettersLeft.value = DisplayGuessesLetters();
});

onUpdated(() => {
    lettersLeft.value = DisplayGuessesLetters();
});

watch(props.guesses, () => {
    lettersLeft.value = DisplayGuessesLetters();
})


</script>

<template>
    <div class="guessing-area container">
        <span class="guess-text" v-html="lettersLeft"></span>
    </div>
</template>

