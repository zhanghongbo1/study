<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/mine' }">个人学习</el-breadcrumb-item>
    </el-breadcrumb>
    <tails/>
  </div>
</template>


<script>
import tails from './tails'
export default {
  components:{
    tails
  }
}
</script>