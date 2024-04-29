<template>
  <div id="carousel-container">
    <Carousel @slide-start="handleSlideChange">
      <Slide v-for="slide in 4" :key="slide">
        <div v-if="slide === 1" class="carousel__item"><p>What's the mascot of github called?</p></div>
        <div v-if="slide === 2" class="carousel__item best-ux">
          <div class="box">dd*<input type="text" v-model="tempDay" @keyup.enter="updateDay" /></div>
          <div class="box">The</div>
          <div class="box">best</div>
          <div class="box">UX</div>
          <div class="box">you'll</div>
          <div class="box">yyyy*<input type="text" v-model="tempYear" @keyup.enter="updateYear" /></div>
          <div class="box">mm*<input type="text" v-model="tempMonth" @keyup.enter="updateMonth" /></div>
          <div class="box">ever</div>
          <div class="box">see hehe</div>
        </div>
        <div v-if="slide === 3" class="carousel__item">
          <div class="info-slide">
            <h1>De-noobinator (version 10111011100 * 0010)</h1>
            <h3>Workshop by JEECENSHMIRTZ</h3>
            <p>This recently built machine by the Dr. we all know, aims to equip students with the holy knowledge to build decent and user friendly (unlike slide number 2) interfaces. In future versions it might be able to provide with backend support hehe. Careful with the autodestruction but... Damn too late...</p>
          </div>
        </div>
        <div v-if="slide === 4" class="carousel__item carousel-img"></div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
    <div v-if="currentSlide == 1">Octocat</div>
    <div v-if="currentSlide == 2">The date that was chosen was {{ day }}/{{ month }}/{{ year }}</div>
  </div>

</template>

<script>
import { defineComponent, ref } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const currentSlide = ref(1)

    const handleSlideChange = (index) => {
      currentSlide.value = index.slidingToIndex + 1
  }

    const day = ref("")
    const month = ref("")
    const year = ref("")
    const tempDay = ref("Pick a day")
    const tempMonth = ref("Pick a month")
    const tempYear = ref("Pick a year")

    const updateDay = () => {
      day.value = tempDay.value;
      tempDay.value = ""; 
    }

    const updateMonth = () => {
      month.value = tempMonth.value;
      tempMonth.value = ""; // Clear tempDay after updating day
    }

    const updateYear = () => {
      year.value = tempYear.value;
      tempYear.value = ""; // Clear tempDay after updating day
    }

    return {
      currentSlide,
      handleSlideChange,
      day,
      month,
      year, 
      tempDay,
      tempMonth,
      tempYear,
      updateDay,
      updateMonth,
      updateYear
    }
  }
})
</script>

<style>
.carousel__item {
  min-height: 100%;
  width: 100%;
  background-color: red;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.best-ux  {
  min-height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  height: 100%;
  font-size: 150%;
}

.info-slide {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 50px;
}

.info-slide > p {
  text-align: justify;
}

.info-slide > h3 {
  padding-bottom: 20px;
}

.carousel-img{
  background-image: url('@/assets/challenge.png');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
}

#carousel-container{
  width: 800px; 
  height: 700px; 
  margin: 0 auto; 
}


</style>
