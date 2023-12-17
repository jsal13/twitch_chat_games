<script setup lang="ts">
interface Props {
    category: string
}

const props = defineProps<Props>();

</script>

<template>
    <div class="category-area container">
        <h3>Category: {{ category.toUpperCase() }}</h3>
    </div>
</template>
