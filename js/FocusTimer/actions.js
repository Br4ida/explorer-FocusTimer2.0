import state from "./state.js";
import { Sounds } from "./sounds.js";
import { weather } from "./elements.js";
import * as timer from "./timer.js";


export function toggleSound(target) {
  var sound = Sounds[target.id]
  for (var i of weather.children) {
    if (i === target) {
      continue
    } else {
      i.classList.remove('on')
    }
  }

  state.isMute = target.classList.toggle('on')
  if (state.isMute) {
    for (var soundsOff in Sounds) {
      Sounds[soundsOff].pause()
    }
    sound.play();
    return
  }
  sound.pause();
}

export function addTime() {
  state.minutes = state.minutes + 5;
  if (state.minutes > 60) {
    state.minutes = 60;
  }
  timer.updateDisplay();
}

export function minusTime() {
  state.minutes = state.minutes - 5;
  if (state.minutes < 0) {
    state.minutes = 0;
  }
  timer.updateDisplay();
}