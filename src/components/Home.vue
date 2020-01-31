<template>
  <div>
    <h1>Home</h1>
    <p><button @click="addMessage">Add Message</button></p>
    <p v-for="message in messages" :key="message.id">{{ new Date(message.date.seconds*1000).toUTCString() }} | {{ message.date.nanoseconds }}</p>
  </div>
</template>

<style scoped>
h1 {
  color: blue
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters(["messages"])
  },
  mounted() {
    this.$store.dispatch("bindMessages")
  },
  methods: {
    addMessage() {
      this.$store.dispatch("addMessage", { value: "Coucou" } )
    }
  }
}
</script>
