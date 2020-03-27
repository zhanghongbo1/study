<template>
    <div id="particlesId">
        
    </div>
</template>

<script>
import particles from 'particles.js' 
import particlesConfig from '@/assets/particles.json' 
export default {
    mounted() {
         particlesJS("particlesId",particlesConfig);
    },
}
</script>

<style lang="scss">
    #particlesId{
      width: 100%;
      height: 100%;
      background:url('../assets/img/timg.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
      position: fixed;
      left: 0;
      top: 0;
      z-index: -1;
    }
</style>