<template>
  <div class="carousel">
    <div class="slider">
      <img :src="currentPhoto" alt="carousel photo" />
    </div>
    <div class="controls">
      <span class="arrowLeft" @click="prevPhoto">
        <i class="fas fa-caret-left fa-lg" style="color: #a70909"></i
      ></span>
      <div class="indicators">
        <span
          v-for="(photo, index) in photos"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="goToPhoto(index)"
        ></span>
      </div>
      <span class="arrowRight" @click="nextPhoto">
        <i class="fas fa-caret-right fa-lg" style="color: #a70909"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        "src/assets/PIC/slideshow/3C.jpg",
        "src/assets/PIC/slideshow/airpods.jpg",
        "src/assets/PIC/slideshow/bags.jpg",
        "src/assets/PIC/slideshow/BubbleMachine.jpg",
        "src/assets/PIC/slideshow/GARMIN.jpg",
        "src/assets/PIC/slideshow/Healthy.jpg",
        "src/assets/PIC/slideshow/mother18off.jpg",
        "src/assets/PIC/slideshow/mother22off.jpg",
        "src/assets/PIC/slideshow/mother30off.jpg",
        "src/assets/PIC/slideshow/mother57off.jpg",
        "src/assets/PIC/slideshow/pad.jpg",
        "src/assets/PIC/slideshow/pregnant.jpg",
        "src/assets/PIC/slideshow/travel.jpg",
        "src/assets/PIC/slideshow/VacuumCleaner.jpg",
      ],
      currentIndex: 0,
      autoplayInterval: null,
    };
  },
  computed: {
    currentPhoto() {
      return this.photos[this.currentIndex];
    },
  },
  methods: {
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.nextPhoto();
      }, 3000);
    },
    stopAutoplay() {
      //   clearInterval(this.autoplayInterval);
      setTimeout(() => {
        this.autoplayInterval();
      }, 3000);
    },
    prevPhoto() {
      this.currentIndex =
        (this.currentIndex - 1 + this.photos.length) % this.photos.length;
    },
    nextPhoto() {
      this.currentIndex = (this.currentIndex + 1) % this.photos.length;
    },
    goToPhoto(index) {
      this.currentIndex = index;
      this.stopAutoplay();
    },
  },
  mounted() {
    this.startAutoplay();
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  overflow: hidden;
  left: 240px;
  top: 20px;
  width: 800px;
}

.slider img {
  width: 800px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}
img:hover i {
  display: block;
  background-color: #fff;
  cursor: pointer;
} /*顯示不出來*/
.controls {
  position: absolute;
}
.arrowLeft i {
  display: none;
  position: absolute;
  width: 40px;
  height: 40px;
  cursor: pointer;
  left: 20px;
  top: 150px;
}
.arrowRight i {
  display: none;
  position: absolute;
  width: 40px;
  height: 40px;
  color: #fff;
  cursor: pointer;
  left: 760px;
  top: 150px;
}

.indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: 0 10px;
  left: 275px;
  top: 280px;
}
.indicators span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 3s;
}
</style>
