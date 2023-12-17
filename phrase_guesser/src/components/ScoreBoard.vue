<script setup lang="ts">

interface Props {
    scores: {
        user: string,
        score: number
    }[]
}

const props = defineProps<Props>();

</script>

<template>
    <div class="score-board container">
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(userscore, index) in scores" :key="`${userscore.user}-${index}`">
                    <td>
                        {{ userscore.user }}
                    </td>
                    <td class="score-col">
                        {{ userscore.score }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
