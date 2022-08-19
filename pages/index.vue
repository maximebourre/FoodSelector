<template>
  <div>
    <h1>bonjour est</h1>
    <Meals :userId="1"/>
  </div>
</template>

<script>
import Meals from '../components/Meals.vue'
export default {
  components: { Meals },
  name: 'IndexPage'
}
</script>
