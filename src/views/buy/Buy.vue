<template>
  <div id="buy">
      <purchase></purchase>
      <introduce></introduce>
  </div> 
</template>
<script>
import Purchase from "./purchase/Purchase"
import Introduce from "./introduce/Introduce"

export default({
    name:"Buy",
    components:{
        Purchase,
        Introduce
    }
})
</script>
<style>
</style>