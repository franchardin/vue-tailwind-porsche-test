<template>
  <div class="Presentation flex flex-col md:flex-row" :class="{ 'md:flex-row-reverse': !content.left }">
    <div v-for="col, colIndex in content.columns" :key="colIndex" class="flex-1">
      <div v-if="col?.imgSrc" :style="`background-image: url(${col.imgSrc}); min-height: 300px;`" class="bg-cover h-full bg-center">
        <!-- <img :src="col.imgSrc" alt="Porsche car image" /> -->
      </div>
      <div v-else class="p-8 md:p-20" :class="`${col.backgroundColor} ${col.backgroundColor === 'bg-white' ? 'text-black' : 'text-white'}`">
        <div data-aos="zoom-in" data-aos-delay="900" data-aos-duration="600">
          <h2 class="text-4xl font-bold">{{ col.title }}</h2>
          <div class="h-2 w-2/4 mb-8" :class="`${col.backgroundColor === 'bg-white' ? 'bg-black' : 'bg-white'}`"></div>
          <p class="uppercase font-bold mb-2">{{ col.subtitle }}</p>
          <p class="font-light">{{ col.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentProps from '../mixins/ContentProps.js';

export default {
  mixins: [ContentProps]
}
</script>