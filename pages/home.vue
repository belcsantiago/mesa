<template>
<div>
  <Homepage />
</div>
  
</template>

<script>
export default {
  components: {
    Homepage: () => import("~/components/Homepage.vue")
  }
}
</script>