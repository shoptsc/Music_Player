const songs = [
  "Rabbi_Yebarek_Melody4Arab.Com.mp3",
  "Radhitu_Billahi_Rabba_-_Arabic_Version_melody4arab.com.mp3",
  "Radhitu_Billahi_Rabba_melody4arab.com.mp3",
  "Ridh Ya At Tarish- Al Mishary Al -Afasy.mp3",
  "saad-al-ghamdi-surah-001.mp3",
  "Sameh_melody4arab.com.mp3",
  "Sheikh_subhanallah_Fajr_azaan.mp3",
  "So_Soon_melody4arab.com.mp3",
  "Subhana_Allah_melody4arab.com.mp3"
];

const player = document.getElementById('player')

function createSongList(){
    const list = document.createElement('ol');
    for (let i = 0; i < songs.length; i++){
      const item = document.createElement('li');
      item.appendChild(document.createTextNode(songs[i]));
      list.appendChild(item);
    }
    return list;
}

const songList = document.getElementById("songList");
songList.appendChild(createSongList());

const links = document.querySelectorAll('li');
for(const link of links){
  link.addEventListener('click', setSong)
}

function setSong(e){
  document.getElementById('headphone').classList.remove('pulse');
  const source = document.getElementById("source");
  source.src = "songs/" + e.target.innerText;

  document.querySelector('#currentSong').innerText =  `Now Playing : ${e.target.innerText}`;
  player.load();
  player.play();
  document.getElementById('headphone').classList.add('pulse');
}

function playAudio(){
    if(player.readyState){
      player.play();
    }
}

function pauseAudio(){
  player.pause();
}

const slider = document.getElementById('volumeSlider');
slider.addEventListener('input', (e)=>{
  const volume = e.target.value
  player.volume = volume ;
});

function updateProgress(){
    if (player.currentTime > 0){
      const progressBar = document.getElementById('progress');
      progressBar.value = (player.currentTime/player.duration) * 100;
    }
}
