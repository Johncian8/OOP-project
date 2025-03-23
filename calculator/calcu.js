let h1 = document.querySelector("h1")
let plus = document.querySelector("#plus")
let minus = document.querySelector("#minus")
let times = document.querySelector("#times")
let divide = document.querySelector("#divide")

//inheritance
//Nums the super class
class Nums{

    constructor(fnum, snum){

        this.fnum = fnum
        this.snum = snum
    }

    add(){

        return `The sum is ${this.fnum + this.snum}`
    }

    subtract(){

        return `The difference is ${this.fnum - this.snum}`
    }

    multiply(){

        return `The product is ${this.fnum * this.snum}`
    }
    
    divide(){
        
        return `The qoutient is ${(this.fnum / this.snum).toFixed(2)}`
    }
}

//sub class
class Calculate extends Nums{
    
    constructor(fnum, snum){
        
        super(fnum, snum)
    }
}

plus.addEventListener('click', ()=>{
    
    let firstNum = parseFloat(document.querySelector("#firstNum").value)
    let secondNum = parseFloat(document.querySelector("#secondNum").value)
    
    const adds = new Calculate(firstNum, secondNum)

    h1.innerHTML = adds.add()

})

minus.addEventListener('click', ()=>{
    
    let firstNum = parseInt(document.querySelector("#firstNum").value)
    let secondNum = parseInt(document.querySelector("#secondNum").value)
    
    const minuses = new Calculate(firstNum, secondNum)

    h1.innerHTML = minuses.subtract()

})

times.addEventListener('click', ()=>{
    
    let firstNum = parseInt(document.querySelector("#firstNum").value)
    let secondNum = parseInt(document.querySelector("#secondNum").value)
    
    const timeses = new Calculate(firstNum, secondNum)

    h1.innerHTML = timeses.multiply()

})

divide.addEventListener('click', ()=>{
    
    let firstNum = parseInt(document.querySelector("#firstNum").value)
    let secondNum = parseInt(document.querySelector("#secondNum").value)
    
    const divides = new Calculate(firstNum, secondNum)

    h1.innerHTML = divides.divide()

})

window.ondblclick = ()=>{

    window.location.href = "../choose/choose.html"
}