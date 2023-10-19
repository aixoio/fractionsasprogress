
<template>

  <h1 class="title">Fractions as Progress</h1>

  <div class="center">
    <Fraction></Fraction>
  </div>

  <div class="center">
    <Equals></Equals>
  </div>

  <div class="center">
    <Results></Results>
  </div>

</template>

<script lang="ts" setup>
import Equals from './components/Equals.vue';
import Fraction from './components/Fraction.vue';
import Results from './components/Results.vue';

</script>
