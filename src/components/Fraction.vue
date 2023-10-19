<template>
    <div class="fraction">
        <input contenteditable="true" class="number" v-model="fractionStore.numerator" type="number" min="0">
        <span class="line"></span>
        <input contenteditable="true" class="number" v-model="fractionStore.denominator" type="number" min="1">
    </div>
</template>

<script lang="ts" setup>
import { useFractionStore } from "@/stores/fractionstore"

const fractionStore = useFractionStore()

</script>

<style lang="scss" scoped>
@import "../assets/master.scss";

.fraction {
    width: fit-content;
    & > .number {
        all: unset;
        font-size: larger;
        margin: 0.25rem;
        display: block;
        text-align: center;

        outline: none;
    }
    & > .line {
        display: block;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: $black;
        @media (prefers-color-scheme: dark) {
            border-bottom-color: $white;
        }
    }
}

</style>
