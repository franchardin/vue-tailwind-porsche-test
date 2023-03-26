<template>
  <div class="Stats bg-center bg-cover bg-no-repeat bg-top relative mb-32 rounded-t-2xl" :style="`background-image: url(${PorscheBack}); min-height: 300px; background-position: center`">
    <div class="bg-blue-900 opacity-60 absolute z-10 w-full h-full rounded-t-2xl" />
    <div class="StatsCardsContainer w-full z-50 flex flex-col md:flex-row items-center justify-around relative md:absolute px-8 py-8 md:pt-32">
      <StatsCard v-for="obj, objIndex in data.cards" :key="objIndex" :content="obj" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import {StatsCard} from './index.js';
import PorscheBack from '../assets/images/porsche_back.webp';
import RangeIcon from '../assets/icons/energy.png';
import SpeedIcon from '../assets/icons/speedometer.png';
import SizeIcon from '../assets/icons/maximize.png';
import WeightIcon from '../assets/icons/kg.png';

const data = reactive({
  cards: [
    {
      imgSrc: RangeIcon,
      title: 'Range',
      description: '310 miles<br>(25.4 - 20.4 kWm/100 miles)'
    },
    {
      imgSrc: SpeedIcon,
      title: 'Speed',
      description: '5.4s<br>0 - 100km'
    },
    {
      imgSrc: SizeIcon,
      title: 'Size',
      description: 'L: 4,963m<br>W: 1,966m<br>1,395m'
    },
    {
      imgSrc: WeightIcon,
      title: 'Weight',
      description: '2,050kg'
    }
  ]
})
</script>