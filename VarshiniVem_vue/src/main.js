import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserFriends, faCity, faRuler } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

library.add(faUserFriends, faCity, faRuler);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
