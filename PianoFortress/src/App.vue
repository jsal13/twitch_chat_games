<script setup lang="ts">
import * as Tone from 'tone'
import MainSynth from './components/MainSynth.vue'
import { onMounted, ref, type Ref } from 'vue';

this.synth = new Tone.Synth().toDestination();

async function StartTone() {
  await Tone.start()
  console.log('audio is ready')

}

</script>

<template>
  <main>
    <button @click="StartTone">Start Tone</button>
    <p>{{ synth }}</p>
    <!-- <MainSynth :note="'C4'" :interval="4" /> -->
  </main>
</template>
