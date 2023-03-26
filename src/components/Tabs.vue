<template>
  <div class="Tabs">
    <header class="flex flex-row items-center justify-center mb-4">
      <div v-for="obj, objIndex in tabs" :key="objIndex" class="TabsHeaderItem px-6 py-4 mx-3 cursor-pointer"
      :class="objIndex === activeTab ? 'text-blue-900 border-b-4' : 'border-b-4 border-blue-900'"
      @click="updateActiveTab(objIndex)">
        <h2>{{ obj.title }}</h2>
      </div>
    </header>
    <div class="container flex flex-col items-center justify-center text-center py-16 bg-cover h-[500px] rounded-b-2xl" :style="`background-image: url(${getActiveTabContent.imgSrc});`">
      <div class="bg-black bg-opacity-75 w-full px-16 py-4">
        <h2 data-aos="zoom-in" data-aos-delay="600" data-aos-duration="750" class="text-4xl font-bold text-white">{{ getActiveTabContent.title }}</h2>
        <div data-aos="zoom-in" data-aos-delay="600" data-aos-duration="750" class="h-2 w-1/6 mb-4 bg-white mx-auto" />
        <p data-aos="zoom-in" data-aos-delay="600" data-aos-duration="750" class="text-white">{{ getActiveTabContent.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue';
import Inside1 from '../assets/images/inside_1.jpg'
import Inside2 from '../assets/images/inside_2.webp'
import Inside3 from '../assets/images/inside_3.webp'
import Inside4 from '../assets/images/inside_4.webp'

export default {
  setup() {
    const data = reactive({
      activeTab: 0,
      getActiveTabContent: computed(() => {
         return data.tabs[data.activeTab]
      }),
      tabs: [
        {
          imgSrc: Inside1,
          title: 'Design',
          description: "Welcome to the luxurious and high-performance interior of the Porsche. Every detail has been meticulously designed to ensure an unforgettable driving experience. Sink into the plush leather seats, crafted to hug every curve of your body, as you grip the steering wheel wrapped in the finest materials."
        },
        {
          imgSrc: Inside2,
          title: 'Performance',
          description: 'The Porsche is the embodiment of ultimate performance. Equipped with the latest cutting-edge technology and engineering, this vehicle is built to push the limits of speed, agility, and handling. Its powerful engine produces an unparalleled roar, propelling you from zero to sixty in a matter of seconds.'
        },
        {
          imgSrc: Inside3,
          title: 'Identity',
          description: "The Porsche identity is rooted in a legacy of innovation, engineering excellence, and motorsport success. From the iconic silhouette of the 911 to the cutting-edge technology of the Taycan, every Porsche vehicle is instantly recognizable as a masterpiece of design and performance."
        },
        {
          imgSrc: Inside4,
          title: 'Comfort',
          description: "The Porsche experience is not just about performance and speed, but also about luxurious comfort. The interior of every Porsche is designed to provide the ultimate in passenger comfort, ensuring that even the longest journeys are a pleasure. Every aspect has been crafted to create a serene and relaxing environment."
        }
      ]
    })


    const updateActiveTab = (index) => {
      data.activeTab = index
    }
    return {
      updateActiveTab,
      ...toRefs(data)
    }
  }
}

</script>