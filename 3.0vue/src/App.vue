<template>
  <div id="app">
    <partJs/>
     <router-view/>
  </div>
</template>


<script>
import partJs from '@/components/particles.vue'
export default {
  components:{
    partJs
  }
}
</script>
<style>
#app {
  
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
