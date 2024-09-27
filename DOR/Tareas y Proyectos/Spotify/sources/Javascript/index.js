import songs from "../assests/songs/*.mp3"

Object.keys(songs);

const map = { };

let aux = 1;

for (var key of Object.keys(songs)){
    map[`.item-${aux}`] = songs[key];
    aux += 1;
}
console.log(map);