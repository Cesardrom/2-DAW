// Exportamos por defecto la clase Pokemon
export default class Champion {
    // Constructor que recibe como parámetro data que contiene los datos de los Pokemon que obtenemos desde la API
    constructor(data) {                       
        this.name = data.name;                            
        this.title = data.title;   
        this.sprite = `https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${data.image.full}` 
        this.tags = data.tags
        this.partype = data.partype
        this.attack = data.info.attack
        this.magic = data.info.magic
        this.defense = data.info.defense
        this.difficulty = data.info.difficulty
        this.title = data.title
    }
}