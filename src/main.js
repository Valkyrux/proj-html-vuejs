import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTwitter, faInstagram, faBehance, faDribbble, faFlickr, faGit, faLinkedin, faPinterest,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import {
  faChevronDown, faBars, faSearch, faBullhorn, faBriefcase, faGlobeEurope, faDesktop, faStar,
  faChevronLeft, faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  faUser, faBookmark, faCalendarCheck, faClock,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

library.add(faTwitter, faInstagram, faBehance, faDribbble,
  faFlickr, faGit, faLinkedin, faPinterest, faChevronDown,
  faBars, faSearch, faBullhorn, faBriefcase, faUser, faBookmark,
  faGlobeEurope, faDesktop, faCalendarCheck, faClock, faStar, faChevronLeft,
  faChevronRight, faFacebook);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
