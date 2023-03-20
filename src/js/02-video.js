import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time';
let currentTime = localStorage.getItem(localStorageKey);

player.on('timeupdate', throttle(playTime, 1000));

function playTime(event) {
  localStorage.setItem(localStorageKey, event.seconds);
}

player.setCurrentTime(currentTime || 0);
