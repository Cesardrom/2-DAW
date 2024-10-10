export default class Song {
    constructor(songPath) {
        this.songPath = songPath;
    }

    play() {
        let audio = new Audio(this.songPath);
        audio.play();
    }
}