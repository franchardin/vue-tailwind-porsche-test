<template>
  <div class="StatsCard flex flex-col items-center p-8 m-2 bg-white text-black text-center shadow-lg w-full">
    <img class="h-16" :src="content.imgSrc" :alt="content.title" />
    <h2 class="text-lg font-light mb-2">{{ content.title }}</h2>
    <p class="text-sm font-bold" v-html="content.description" />
  </div>
</template>

<script>
import ContentProps from '../../../mixins/ContentProps.js';

export default {
  mixins: [ContentProps]
}
</script>

<style>
  .StatsCard {
    width: 266px;
    height: 233px;
  }
</style>
