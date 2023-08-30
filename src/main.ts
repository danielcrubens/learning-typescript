let message: string = "Hello World"
console.log(message)

let total: number
total = 10.5

let isOpen: boolean 
isOpen = false

 //any
 let stock: any = 89
 stock = true 

 // void
function showInformation(name: string = "Daniel"):void{
  console.log(name)
}

//never
function error():never {
  throw new Error("error"); 
}

//array
let items: number[]
items = [1,2,3]

//tuple
 let cards: [number, string, boolean]
 cards = [1,"Daniel",true]

 //enum
 enum Colors{
  white= "#fff",
  black="#000",
 }
let white: Colors= Colors.black
console.log(white)

//type union
let age: number | string
age =20
age= "vinte"

function showPet(pet:'dog'| 'cat'| 'zebra') {
  console.log(pet)
}
showPet('zebra')

//type aliases

type Pet ='cat'| 'dog'

function displayPet(pet: Pet) {
  console.log(pet)
}
displayPet('cat')

/* Tipando objetos */

//interfaces
 type UF = 'MG' | 'SP'| 'RJ'
interface User{
  name: string,
  address:{
    city:string
    UF:UF
  }
}

function showCity(user:User) {
  user.address.UF="MG"
  return user.address.city
  
}