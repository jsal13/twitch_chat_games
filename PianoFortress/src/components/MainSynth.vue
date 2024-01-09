<script setup lang="ts">
import * as Tone from 'tone'
import { type Ref } from 'vue'

const props = defineProps<{
  note: string,
  interval: number,
}>()

function PlaySynth() {
  console.log(props)
  console.log(this.synth)
  const loop = new Tone.Loop(time => {
    this.synth?.triggerAttackRelease("C2", "8n", time);
  }, "4n").start(0);
}

</script>

<template>
  <div class="main-synth">
    <button @click="PlaySynth">Play Thing</button>
  </div>
</template>
