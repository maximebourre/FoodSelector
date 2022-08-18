<template>
  <div>
    <h1>bonjour est</h1>
    <card :userId="1"/>
  </div>
</template>

<script>
import card from '../components/card.vue'
export default {
  components: { card },
  name: 'IndexPage'
}
</script>
