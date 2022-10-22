const fs = require('fs');

class Contenedor {
    constructor(file){
        this.file = file
        this.new_array = [];
    }

    

    async save (object){
        
        try{

            const data = fs.readFileSync(this.file, 'utf-8')
            //console.log(data);
            let obj_test = object;
            //console.log(obj_test);
            if(obj_test.id == undefined){
                obj_test.id = 1;}; 
            if(obj_test.id <= this.new_array.length){
                obj_test.id = this.new_array.length + 1}
             this.new_array.push(obj_test);
            //console.log(obj_test);

            
            await fs.writeFileSync(this.file, JSON.stringify(this.new_array));
            const resultado = this.new_array.find(item => item.id)
            return resultado.id
        }
        catch (error){
            console.log(error);
        } 
    }

    async getById (number){
        try{
            const data = await fs.promises.readFile(this.file, "utf-8")
            let variable = JSON.parse(data)
            //console.log('soy yo, dio'+variable);
            const object = variable.find(obj => obj.id === number)
            return console.log(object); 
        }
        catch {
            return console.log(null); 
        }
    }

    async getAll (){
        const data = await fs.promises.readFile(this.file, "utf-8")
        const aux_array = JSON.parse(data)
        return console.log(aux_array); 
        //return console.log(this.new_array); 
    }

    async deleteById(number){
        try{
            const data = await fs.promises.readFile(this.file, "utf-8")
        const full_array = JSON.parse(data)
        const new_array = full_array.filter(obj => obj.id !== number)
        fs.writeFileSync(this.file, JSON.stringify(new_array))
        }
        catch{
            return console.log('No está ese archivo');
        }
    }
    deleteAll() {
        fs.writeFileSync(this.file, "")
    }



}

const new_file = new Contenedor('file.txt');
new_file.save({ title: " ola", price: 10000, thumbnail: "hola.png"})
new_file.save({ title: " adios", price: 30000, thumbnail: "adios.png"})


//new_file.getById(2)

//new_file.getAll()

//new_file.deleteById(2)

//new_file.deleteAll()

