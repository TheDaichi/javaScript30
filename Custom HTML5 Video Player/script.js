const video = document.querySelector('video');
const play = document.querySelector('.player__button');
const progress = document.querySelector('.progress__filled');
const volume = document.querySelector('input[name="volume"]');
const playBack = document.querySelector('input[name="playbackRate"]');
const skipButtons = document.querySelectorAll('[data-skip]');

// playing and pausing video
function playVideo() {
  video.paused ? video.play() : video.pause();
}
function changePlayButton() {
  play.textContent = video.paused ? '►' : '❚❚';
}
video.addEventListener('click', playVideo);
play.addEventListener('click', playVideo);
video.addEventListener('play', changePlayButton);
video.addEventListener('pause', changePlayButton);

// skip buttons listners
skipButtons.forEach((b) => {
  b.addEventListener('click', (e) => {
    parseInt(e.target.dataset.skip) === -10
      ? (video.currentTime -= 10)
      : (video.currentTime += 25);
  });
});

// range listners
volume.addEventListener('input', (e) => {
  video.volume = e.target.value;
});
playBack.addEventListener('input', (e) => {
  video.playbackRate = e.target.value;
});

// Handle progress
function takeProgressBar() {
  const videoTime = video.currentTime / video.duration;
  progress.style.flexBasis = `${videoTime * 100}%`;
}
video.addEventListener('timeupdate', takeProgressBar);

// click on progress bar
document.querySelector('.progress').addEventListener('click', (e) => {
  progress.style.flexBasis = `${e.offsetX}px`;
  const a = e.offsetX / video.getBoundingClientRect().width;
  video.currentTime  = a * video.duration;
});

// window keyboard listner
window.addEventListener('keyup', (e) => {
  if (e.code === 'Space') playVideo();
});
