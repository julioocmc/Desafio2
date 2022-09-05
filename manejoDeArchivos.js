const fs = require("fs");
/*const productos = [                                                                                                                                                  
{                                                                                                                                                    
  title: 'Escuadra',                                                                                                                                 
  price: 123.45,                                                                                                                                     
  thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                     
  id: 1                                                                                                                                              
},                                                                                                                                                   
{                                                                                                                                                    
  title: 'Calculadora',                                                                                                                              
  price: 234.56,                                                                                                                                     
  thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                          
  id: 2                                                                                                                                              
},                                                                                                                                                   
{                                                                                                                                                    
  title: 'Globo Terráqueo',                                                                                                                          
  price: 345.67,                                                                                                                                     
  thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                   
  id: 3                                                                                                                                              
},                                                                                                                                                
]   ;      
*/
class Contenedor {
    async save(producto){
        try { 
            await fs.promises.writeFile(
                "./productos.txt", 
                JSON.stringify(producto, null, 2),
                 'utf-8'
                 );
        } catch (e) {
            console.log(e);
        }
    }
    async getAll(){
        try {
            const contenido = await fs.promises.readFile("./productos.txt", "utf-8");
            console.log(contenido);
            return JSON.parse(contenido);
        } catch (error) {}
    }
    async saveNew (productoNuevo){
        const contenido = await this.getAll();
        const indice = contenido.sort((a, b) => b.id - a.id) [0].id;
        productoNuevo.id = indice + 1;
        contenido.push(productoNuevo);
        this.save(contenido);
    }
    async getById (id) {
        const contenido = await this.getAll();
        const productoBuscado = contenido.filter((producto) => producto.id == id);
        console.log(productoBuscado);
    }
    async deleteById (id) {
        const contenido = await this.getAll();
        const idEliminado = contenido.filter((producto) => producto.id !== id);
        console.log(idEliminado);
    }
    async deleteAll () {
        try {
            const contenido = await fs.promises.writeFile();
        } catch (error) {} 
    }
}

const contenedor = new Contenedor();
//contenedor.save(productos);
//contenedor.getAll();
//const productoN = {
//    title: 'Zapatos',                                                                                                                                 
 //   price: 170.99,                                                                                                                                     
   // thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                     
//};

//contenedor.saveNew(productoN);
//contenedor.getById(4);
//contenedor.deleteById(5);
//contenedor.deleteAll();