<template>
  <div id="mega-container">
    <router-link to="/sheep" class="meme-sheep">JEECHALLENGE</router-link>
    <div id="carousel-container">
      <Carousel @slide-start="handleSlideChange">
        <Slide v-for="slide in 4" :key="slide">
          <div v-if="slide === 1" class="carousel__item"><p>What's the mascot of github called?</p></div>
          <div v-if="slide === 2" class="carousel__item best-ux">
            <div class="box"><input type="text" v-model="tempDay" @keyup.enter="updateDay" @focus="clearTextDay"/></div>
            <div class="box">The</div>
            <div class="box">best</div>
            <div class="box">UX</div>
            <div class="box">you'll</div>
            <div class="box"><input type="text" v-model="tempYear" @keyup.enter="updateYear" @focus="clearTextYear"/></div>
            <div class="box"><input type="text" v-model="tempMonth" @keyup.enter="updateMonth" @focus="clearTextMonth" /></div>
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
    </div>
    <div class="response-container">
      <div v-if="currentSlide == 1" class="response">Octocat</div>
      <div v-if="currentSlide == 2" class="response">The date that was chosen was {{ day }}/{{ month }}/{{ year }}</div>
    </div>
  </div>

<RouterView />

</template>

<script>
import { defineComponent, ref } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { RouterLink, RouterView } from 'vue-router';

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
    }

    const updateMonth = () => {
      month.value = tempMonth.value;
    }

    const updateYear = () => {
      year.value = tempYear.value;
    }

    const clearTextDay = () => {
      tempDay.value = "";
    }
    const clearTextYear = () => {
      tempYear.value = "";
    }
    const clearTextMonth = () => {
      tempMonth.value = "";
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
      updateYear, 
      clearTextDay,
      clearTextYear,
      clearTextMonth
    }
  }
})
</script>

<style>

.meme-sheep {
  font-size: 2rem;
  color: white;
  background-color: #3C08AB;
  border-radius: 8px;
  padding: 10px;
}

.carousel__item {
  min-height: 100%;
  width: 100%;
  background-color: #041668;
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
  border: 5px solid transparent;
  border-radius: 10px;
  color: white;
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%; 
  height: 40%; 
  margin: 0 auto; 
}

.response {
  font-size: 1.5rem;
  color: white;
  background-color: #041668;
  border-radius: 8px;
  padding: 10px;
}

.response-container {
  height: 7%;
  width: 100%;
  display: flex;
  justify-content: center;  
  align-items: center;
}

#mega-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.box > input{
  height: 50%;
  border: solid white 1px;
  border-radius: 10px;
  background-color: transparent;
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
}



</style>
