<template>
    <div>
          <Echarts :echartObj="echartObj"></Echarts>
    </div>
</template>

<script>
import Echarts from '../components/echarts'
export default {
     components: {
    Echarts
  }
}
</script>