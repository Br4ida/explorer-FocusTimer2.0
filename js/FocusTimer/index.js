import * as events from "./events.js";
import * as timer from "./timer.js";

export function start() {
  console.log('teste');
  timer.updateDisplay();
  events.registerControls();
}