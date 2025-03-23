let calculator = document.querySelector("#calcu")
let galery = document.querySelector("#galery")
let logout = document.querySelector("#logout")

//para sa log out
logout.addEventListener('click', ()=>{

    window.location.href = "../index.html"
})

//papunta sa galery
galery.addEventListener('click', ()=>{

    window.location.href = "../galery/galery.html"
})

//papunta sa calcu
calculator.addEventListener('click', ()=>{

    window.location.href = "../calculator/calcu.html"
})