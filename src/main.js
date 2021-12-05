import {createApp} from 'vue'
import App from './App.vue'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons';
import 'echarts-wordcloud';
import './assets/main.scss';
import 'animate.css';


library.add(faGithub, faEnvelope);
library.add(fas);

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
