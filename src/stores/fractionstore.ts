import { round } from "lodash"
import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useFractionStore = defineStore("fraction-store", () => {

    const numerator = ref(1)
    const denominator = ref(2)

    const decimal = computed(() => {
        return round(numerator.value / denominator.value, 4)
    })

    const percent = computed(() => {
        const clac = round(decimal.value * 100, 2)
        return clac > 100 ? 100 : clac
    })

    return {
        numerator,
        denominator,
        decimal,
        percent,
    }

})
