export default class Song{
    constructor(k_song, v_song, c_song){
        this.element = document.querySelector(k_song);
        this.audio = new Audio(v_song);
        this.album = document.querySelector(c_song);
    }
};

export function play_song(song){
    var vynil = document.querySelector('.vynil');
    song.element.onclick = () => {
        if (song.audio.paused) {
            song.audio.play();
            vynil.style.rigth = `
                translate = -100 px
            `
        }
        else{
            song.audio.pause();
            vynil.style.rigth = "translate = 0 px"
        }
    }
};