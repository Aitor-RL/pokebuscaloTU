//Ejercicio 1
let a = 5
//a=7
/*a++*/
'a+=5'
console.log(a)

//Ejercicio 2
let num = 1
let name = 'Hola'
let boolean = true
let myPc = {
  tipo: 'Portatil',
  procesador : 'Rysen 7',
  ram : 8
  
}

//Ejercicio 3
function powerhigher(y,x) {
    let high = Math.max(x, y)  //Potencia = b**3
  
    let resul = Math.pow(high , 3)
   console.log(resul)
  
  }
  powerhigher(2,2)

  /*
  return a>=b ? a**3 : b**3
  
  */

//Ejercicio 4
  function Product(name, price) {
    this.price = 0
    this.name = 
    this.colors = []

    this.totalColors = function (){
        return this.colors.length

    }
  } 

  let p1 = new Product ('Fulano',22) // Crear un objeto 


  //Ejercicio 5

  function Teacher(name){
    this.name = name
    this.salary
    this.surname

  }

  let t2 = new Teacher('Bea')
  let t3 = new Teacher('Pepe')
  let t4 = new Teacher('Isabel')

  console.log(t2.name , t3.name , t4.name)

  //Ejercicio 6

  let favourTeachers = [ 'Isabel', 'Bea' , 'Pepe']

  let c1 = {
    name1 : 'lapiz'
  }

  let c2 = {
    name2 : 'goma'
  }
  

  let c3 = {
    name1 : 'boli'
  }
  
  let productlist = [ c1 , c2 ,c3 ] 




  //Ejercicio 7 

  function incrementAYear(value){
    return value=value+1
}
 
let age=22
age= incrementAYear(age)
console.log(age)
  

//Ejercicio 8

let iphone14 = {
    price: 1.009,
    manufacturer: 'Apple',
    available: false
}

function changeState(obj){

    obj.available = true
}

changeState(iphone14)