<template>
<div>
<head>
  <meta name=viewport content="width=device-width,initial-scale=1">
</head>
  <div>
    <Header></Header>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"> </component>
      </transition>
    </router-view>
  </div>
</div>
</template>

<script>
import Header from './components/layout/Header.vue';

export default {
  components:{
    Header
  },
   computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    }
  },
  created() {
    this.$store.dispatch('tryLogin');
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/coaches');
      }
    }
  }
}
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}


.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.route-leave-from,
.route-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}

</style>
