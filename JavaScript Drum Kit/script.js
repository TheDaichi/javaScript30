const keys_ = Array.from(document.querySelectorAll('.key[data-key]'));
const sounds = Array.from(document.querySelectorAll('audio'));
let playing = false;
let timeInterval = [];

keys_.forEach((key) =>
  key.addEventListener('transitionend', function (e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('playing');
  })
);

async function handleKey(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  var playPromise = audio.play();
  playPromise.catch((e) => console.log('Checking'));
  key.classList.add('playing');
  // const keyPressed = keys_.find((k) => parseInt(k.dataset.key) === e.keyCode);
  // const soundUsed = sounds.find(
  //   (sound) => sound.dataset.key === keyPressed?.dataset.key
  // );
  // if (soundUsed) {
  //   soundUsed.currentTime = 0;
  //   soundUsed.play();
  //   keyPressed.classList.add('playing');
  //   setTimeout(() => key.classList.remove('playing'), 100);
  // }
}
window.addEventListener('keydown', handleKey);

window.onload = function () {
  const button = document.createElement('button');
  button.innerText = 'Play Auto Music';
  button.classList.add('playButton');
  document.body.append(button);
  const b = document.querySelector('.playButton');
  b.addEventListener('click', (e) => {
    playing = true;
    timeInterval.push(
      setInterval(() => {
        if (playing) {
          console.log(playing);
          const a = [65, 83, 68, 70, 71, 72, 74, 75, 76];
          const keyCode = a[Math.floor(Math.random() * a.length)];
          handleKey({ keyCode });
        }
      }, 550)
    );
  });
};
