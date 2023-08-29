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