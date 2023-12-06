<template>
  <div class="states-list">
    <StateCard
      v-for="state in states"
      :key="state._id"
      :state="state"
      :expanded="expandedState === state._id"
      @toggle="toggleState(state._id)"
    />
  </div>
</template>

<script>
import axios from 'axios';
import StateCard from './StateCard.vue';

export default {
  name: 'StatesList',
  components: {
    StateCard
  },
  data() {
    return {
      states: [],
      expandedState: null
    };
  },
methods: {
  async toggleState(stateId) {
    if (this.expandedState === stateId) {
      this.expandedState = null;
    } else {
      const oldExpandedState = this.expandedState;
      this.expandedState = null;
      await this.$nextTick(); // Wait for DOM update
      if (oldExpandedState !== null) {
        setTimeout(() => {
          this.expandedState = stateId;
        }, 1); // Add a small delay
      } else {
        this.expandedState = stateId;
      }
    }
  }
},
  async created() {
    try {
      const response = await axios.get('http://localhost:3000/api');
      this.states = response.data;
      console.log(this.states)
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style scoped>
.states-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>


