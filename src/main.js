import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter, faInstagram, faBehance, faDribbble, faFlickr, faGit, faLinkedin, faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import {
  faChevronDown, faBars, faSearch, faBullhorn, faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import {
  faUser, faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

library.add(faTwitter, faInstagram, faBehance, faDribbble,
  faFlickr, faGit, faLinkedin, faPinterest, faChevronDown,
  faBars, faSearch, faBullhorn, faBriefcase, faUser, faBookmark);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
