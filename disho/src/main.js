import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCartShopping,
  faMagnifyingGlass,
  faAppleAlt,
  faSeedling,
  faSpoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCartShopping, faMagnifyingGlass, faAppleAlt, faSeedling, faSpoon);

createApp(App).component("fa", FontAwesomeIcon).use(store).use(router).mount("#app");
