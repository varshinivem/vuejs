<template>
  <div class="state-card" @click="toggle">
    <div class="state-card-header">
      <h3>{{ state['name'] }} ({{ state['abbreviation'] }})</h3>
      <font-awesome-icon :icon="expanded ? 'angle-up' : 'angle-down'" class="icon-chevron" />
    </div>
    <transition name="expand">
      <div v-show="expanded" class="state-details">
        <p>
          <font-awesome-icon icon="user-friends" class="icon" />
          Population: {{ state['population'] }}
        </p>
        <p>
          <font-awesome-icon icon="city" class="icon" />
          Capital: {{ state['capital'] }}
        </p>
        <p>
          <font-awesome-icon icon="ruler" class="icon" />
          Land Area: {{ state['area_sq_mi'] }} mi²
        </p>
        <p>
          <font-awesome-icon icon="city" class="icon" />
          Largest city of state: {{ state['largest_city'] }}
        </p>
      </div>
    </transition>
  </div>
</template>


<script>
export default {
  name: 'StateCard',
  props: {
    state: {
      type: Object,
      required: true
    },
    expanded: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle() {
      this.$emit('toggle');
    }
  }
};
</script>


<style scoped>
.state-card {
  background-color: #2196f3; /* Primary color */
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}

.state-card:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.state-card h3 {
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  user-select: none;
  color: #ffffff; /* Text color */
}

.state-card .state-details p {
  margin: 0;
  padding-top: 8px;
  font-size: 16px;
  color: #ffffff; /* Text color */
}

.icon {
  margin-right: 8px;
  color: #ffffff;
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 200px; /* You can adjust this value to accommodate larger content */
  opacity: 1;
}
</style>


