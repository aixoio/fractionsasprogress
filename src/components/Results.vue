<template>
    <div>
        <h3 class="center">Results</h3>
        <span class="result">Fraction as decimal: <span class="bold">{{ fractionStore.decimal }}</span></span>
        <span class="result">Fraction as percent: <span class="bold">{{ fractionStore.percent }}%</span></span>
        <div class="result">
            <h4>Fraction as progress</h4>
            <div class="progress">
                <div class="filler" ref="$filler"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useFractionStore } from '@/stores/fractionstore';
import { onMounted, ref, watchEffect } from 'vue';


const fractionStore = useFractionStore()
const $filler = ref<HTMLElement | null>(null)

onMounted(() => {
    watchEffect(() => {
        $filler.value!.style.width = `${fractionStore.percent}%`
    })
})

</script>

<style lang="scss" scoped>
@import "../assets/master.scss";

h3 {
    font-size: x-large;
}

h4 {
    font-size: larger;
}

.result {
    display: block;
}

.progress {
    background-color: $secondary;
    border-radius: 15px;
    overflow: hidden;
    & > .filler {
        height: 1rem;
        background-color: $primary;
    }
}

</style>
