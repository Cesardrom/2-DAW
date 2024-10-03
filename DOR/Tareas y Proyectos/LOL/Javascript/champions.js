// Exportamos por defecto la clase Pokemon
export default class Champion {
    // Constructor que recibe como parámetro data que contiene los datos de los Pokemon que obtenemos desde la API
    constructor(data) {                       
        this.name = data.name;                            
        this.title = data.title;   
        this.sprite = data.image.sprite
        this.tags = data.tags
        this.partype = data.partype
    }
}