import state from "./state.js";
import { Sounds } from "./sounds.js";
import { weather } from "./elements.js";
import * as timer from "./timer.js";


function removeSound(target) {
  for (var i of weather.children) {
    if (i === target) {
      continue
    } else {
      i.classList.remove('on')
    }
  }
}

export function toggleSound(target) {
  var sound = Sounds[target.id]
  removeSound(target);

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

export function play() {
  document.getElementById('play').classList.toggle('hidden');
  document.getElementById('pause').classList.toggle('hidden');
  state.isRunning = true;
  state.countdownId = setInterval(() => {
    state.seconds = state.seconds - 1;
    if (state.seconds < 0) {
      state.seconds = 59;
      state.minutes = state.minutes - 1;
    }
    if (state.minutes < 0) {
      reset()
    }
    timer.updateDisplay();
  }, 1000);
}

export function reset() {
  document.getElementById('pause').classList.add('hidden');
  document.getElementById('play').classList.remove('hidden');
  state.isRunning = false;
  state.minutes = 0;
  state.seconds = 0;
  timer.updateDisplay(0, 0);
  clearInterval(state.countdownId);
}

export function pause() {
  document.getElementById('pause').classList.add('hidden');
  document.getElementById('play').classList.remove('hidden');
  state.isRunning = false;
  clearInterval(state.countdownId);
}