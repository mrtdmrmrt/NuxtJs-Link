<template>
   <div>
    <search-product />
    <nuxt-child />
   </div>
</template>

<script>
import searchProduct from "@/components/serachProduct"
export default {
  components : {
    searchProduct
  }
}
</script>



