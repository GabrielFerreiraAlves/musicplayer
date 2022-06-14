let artist = document.getElementById('artist')
let music = document.getElementById('music')
let album = document.getElementById('album')
let numb_index = document.getElementById('numbindex')
let max_length = document.getElementById('max-length')
let album_image = document.getElementById('album-image')
let play_icon = document.getElementById('play')
let pause_icon = document.getElementById('pause')
let audio_music = document.querySelector('audio')
let music_list = document.getElementById('music-list')
let final_time = document.getElementById('final-time')
let initial_time = document.getElementById('initial-time')
let duration = document.getElementById('duration')
let numbindex = 0
let isplaying = false
artist.innerText = allMusic[numbindex].artist
music.innerText = allMusic[numbindex].music
album.innerText = allMusic[numbindex].album
album_image.src = allMusic[numbindex].src
numb_index.innerText = numbindex + 1
max_length.innerText = allMusic.length
audio_music.src = `${allMusic[numbindex].audio}`

//load data of music
audio_music.onloadeddata = () => {
   let minutes = Math.floor(audio_music.duration/60)
   let seconds = Math.floor(audio_music.duration%60)
   if(seconds < 10){
    final_time.innerText = `${minutes}:0${seconds}`
   }else{
    final_time.innerText = `${minutes}:${seconds}`
   }
}
//update time of music
audio_music.ontimeupdate = () => {
   initial_time.innerText = Math.floor(audio_music.currentTime)
   duration.max = audio_music.duration
   duration.value = Math.floor(audio_music.currentTime)
   let curr_min = Math.floor(audio_music.currentTime/60)
   let curr_sec = Math.floor(audio_music.currentTime%60)
   if(curr_sec < 10){
    initial_time.innerText = curr_min+':0'+curr_sec
   }else{
    initial_time.innerText = curr_min+':'+curr_sec
   }
   if(audio_music.currentTime === audio_music.duration){
    numbindex++
    artist.innerText = allMusic[numbindex].artist
    music.innerText = allMusic[numbindex].music
    album.innerText = allMusic[numbindex].album
    album_image.src = allMusic[numbindex].src
    numb_index.innerText = numbindex + 1
    audio_music.src = `${allMusic[numbindex].audio}`
    play()
}else{
    numbindex
}
}
//events for change the time of music
duration.oninput = () => {
    audio_music.currentTime = duration.value
}
duration.onchange = () => {
    audio_music.currentTime = duration.value
}





//function for play
function play(){
    isplaying = true
    play_icon.style.display = 'none'
    pause_icon.style.display = 'block'
    audio_music.play()
    let minutes = Math.floor(audio_music.duration/60)
    let seconds = Math.floor(audio_music.duration%60)
    initial_time.innerText = audio_music.currentTime
    
}
//function for pause
function pause(){
    isplaying = false
    play_icon.style.display = 'block'
    pause_icon.style.display = 'none'
    audio_music.pause()
}

//function for button play/pause
function play_pause(){
    if(isplaying === false){
        play()
    }else{
        pause() 
    }
}
if(play_icon.style.display === 'none'){
    play_icon.style.display = 'none'
    pause_icon.style.display = 'block'
}
//function for next music
function next(){
    if(numbindex <= allMusic.length){
        numbindex++
        artist.innerText = allMusic[numbindex].artist
        music.innerText = allMusic[numbindex].music
        album.innerText = allMusic[numbindex].album
        album_image.src = allMusic[numbindex].src
        numb_index.innerText = numbindex + 1
        audio_music.src = `${allMusic[numbindex].audio}`
        play()
        isplaying = true
        musicPlay()
    }else{
        pause()
        pause_icon.style.display = 'none'
        play_icon.style.display = 'block'
        }
    
}
//function for back music
function prev(){
    if(numbindex > 0){
        numbindex--
        artist.innerText = allMusic[numbindex].artist
        music.innerText = allMusic[numbindex].music
        album.innerText = allMusic[numbindex].album
        album_image.src = allMusic[numbindex].src
        numb_index.innerText = numbindex + 1
        audio_music.src = `${allMusic[numbindex].audio}`
        play()
    }else{
        pause()
        pause_icon.style.display = 'none'
        play_icon.style.display = 'block'
    }
}
//function for repeat music
function repeat(){
    audio_music.src = `${allMusic[numbindex].audio}`
    play()
    
}
//random music
function random(){
    let max = allMusic.length
    let random_music = Math.floor(Math.random()*max)
    audio_music.src = `${allMusic[random_music].audio}`
        artist.innerText = allMusic[random_music].artist
        music.innerText = allMusic[random_music].music
        album.innerText = allMusic[random_music].album
        album_image.src = allMusic[random_music].src
        numb_index.innerText = random_music + 1
    play()
}
//your playlist
let musics = document.getElementById('musiclist') 
let i
let cont_music = document.getElementById('cont-music')
for(i=0;i <= allMusic.length;i++){
    var musicas = document.createElement('p')
     musicas.setAttribute('id','music-list')
     musicas.setAttribute('class','musics')
     musicas.innerHTML += allMusic[i].artist + ' - ' + allMusic[i].music
     cont_music.appendChild(musicas)
     
}



