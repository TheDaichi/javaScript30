const keys_ = Array.from(document.querySelectorAll('.key[data-key]'));
const sounds = Array.from(document.querySelectorAll('audio'));

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
  await audio.play();
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
