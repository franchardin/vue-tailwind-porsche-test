<template>
  <div class="Nav container mx-auto my-8 grid grid-flow-col grid-cols-2 gap-4">
    <div>
      <img class="w-16 mx-auto md:mx-0" :src="Logo" alt="Porsche Logo in black and white">
    </div>
    <div class="hidden md:block">
      <div class="grid grid-flow-col items-center h-full">
        <p class="cursor-pointer text-sm" v-for="option, optionIndex in menu" :key="optionIndex" @click="openLink(option.link)">{{ option.title }}</p>
      </div>
    </div>
    <div class="block md:hidden fixed right-8 top-8 cursor-pointer">
      <img class="w-7" :src="MenuIcon" alt="Display menu">
    </div>
  </div>
</template>

<script setup>
import Logo from '../assets/images/Porsche_logo.png';
import MenuIcon from '../assets/icons/menuIcon.png';

const menu = [
  {
    title: 'Brand',
    link: 'https://www.porsche.com/'
  },
  {
    title: '718',
    link: 'https://en.wikipedia.org/wiki/Porsche_718'
  },
  {
    title: '911',
    link: 'https://es.wikipedia.org/wiki/Porsche_911'
  },
  {
    title: 'Taycan',
    link: 'https://es.wikipedia.org/wiki/Porsche_Taycan'
  },
  {
    title: 'Macan',
    link: ''
  },
  {
    title: 'Panamera',
    link: ''
  },
  {
    title: 'Cayenne',
    link: 'https://es.wikipedia.org/wiki/Porsche_Cayenne'
  }
];

const openLink = (link) => {
  window.open(link)
};
</script>