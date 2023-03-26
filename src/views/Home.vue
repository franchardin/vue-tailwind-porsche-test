<template>
  <div>
    <Nav />
    <MainHeader />
    <Presentation v-for="obj, objIndex in presentations" :key="objIndex" :content="obj" class="mb-16"/>
    <Stats />
    <Tabs />
    <Footer />
  </div>
</template>

<script>
import { Nav, MainHeader, Presentation, Stats, Tabs, Footer } from '../components';
import { reactive, toRefs } from 'vue';
import PorscheInside from '../assets/images/Porsche_inside.jpg';
import Porsche_far from '../assets/images/Porsche_red_far.webp';

export default {
  components: {
    Nav, MainHeader, Presentation, Stats, Tabs, Footer
  },
  setup () {
    let data = reactive({
      presentations: [
        {
          left: true,
          columns: [
            {
              backgroundColor: 'bg-blue-900',
              title: 'The future is now',
              subtitle: 'Taycan concept',
              description: 'The soul has many aspects. It is variable and constantly changing. When viewing the Porsche Taycan, it reveals itself by a smile that expresses total delight. Or by the urge for freedom at the wheel of the new Taycan Cross Turismo that holds its ground even away from everyday life.'
            },
            {
              imgSrc: PorscheInside
            }
          ]
        },
        {
          left: false,
          columns: [
            {
              backgroundColor: 'bg-white',
              button: {
                backgroundColor: 'blue',
                text: 'Book a test'
              },
              title: 'Our first electric Sportscar',
              subtitle: 'Taycan concept',
              description: 'The soul has many aspects. It is variable and constantly changing. When viewing the Porsche Taycan, it reveals itself by a smile that expresses total delight. Or by the urge for freedom at the wheel of the new Taycan Cross Turismo that holds its ground even away from everyday life.'
            },
            {
              imgSrc: Porsche_far
            }
          ]
        }
      ]
    })
    return {
      ...toRefs(data)
    }
  }
}
</script>