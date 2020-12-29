const sounds = ['applause', 'boo', 'gasp', 'tada'];

sounds.forEach((sound) => {
  const btn = document.createElement('button');

  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSongs();
    document.getElementById(sound).play();
  });

  document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
  sounds.forEach((songName) => {
    const song = document.getElementById(songName);

    song.pause();
    song.currentTime = 0;
  });
}
