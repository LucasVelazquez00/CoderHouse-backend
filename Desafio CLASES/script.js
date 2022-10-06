class User {
    constructor(name, lastName, books, pets){
        this.name = name;
        this.lastName = lastName;
        this.books = [];
        this.pets = [];
    }

    getFullName(){
        return `Hola ${this.name} ${this.lastName}`;
    }
    addPets(pet){
        this.pets.push(pet);
    }
    countPets(){
        return this.pets.length;
    }
    addBook(name,author){
       const newBook = {
        book : name,
        of : author   };
        this.books.push(newBook);
    }
    getBookNames(){
        return this.books;
    }
}

const user1 = new User('Ren', 'Akagami');
const user2 = new User('Lucas', 'Vasquez');

console.log(user1);

console.log(user1.getFullName())

user1.addPets('raccoon');
user1.addPets('otter');
user1.addPets('dog');

console.log(user1);

console.log(user1.countPets());

user1.addBook('Harry Potter "La piedra Filosofal"', 'J.K.Rowling.');

console.log(user1);

user1.addBook('Harry Potter "La camara de los secretos"', 'J.K.Rowling.');

console.log(user1);

console.log(user1.getBookNames());