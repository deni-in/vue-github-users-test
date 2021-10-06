import { createApp } from "vue";
import App from "./App";
import components from "./components/UI";
import store from './store'

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component);
});

app.use(store)
app.mount("#app");
