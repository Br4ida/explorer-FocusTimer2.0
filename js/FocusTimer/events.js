import { controls, weather } from "./elements.js";
import * as actions from "./actions.js";

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action;
    console.log(action);
    if (typeof actions[action] != 'function') {
      return;
    }
    actions[action]();
  });

  weather.addEventListener('click', (event) => {
    const action = event.target.dataset.action;
    if (typeof actions[action] != 'function') {
      return;
    }
    actions[action](event.target);
  });
}