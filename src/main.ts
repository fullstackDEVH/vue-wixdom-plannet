import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ElementPlus from "element-plus";

import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/main.css";
library.add(fas);
const app = createApp(App);

app.use(router);
app.use(ElementPlus);
// eslint-disable-next-line vue/multi-word-component-names
app.component("fa", FontAwesomeIcon);
app.mount("#app");
