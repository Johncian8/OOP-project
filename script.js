let logInBtn = document.querySelector("#lbtn")
//Log in Area

//Encapsulation
class Credentials{
    
    #email
    #password
    
    constructor(email, password){
        
            this.#email = email
            this.#password = password
        }
        
        get email(){
            
            return this.#email
        }
        get password(){
            
            return this.#password
        }
    }

    
    logInBtn.addEventListener('click', ()=>{
        
        let email = document.querySelector("#email").value
        let password = document.querySelector("#password").value
        
        
        const userLogin = new Credentials(email, password)
        
        if(userLogin.email == "John Cian Lioc" && userLogin.password == "password"){
            
            window.location.href = "choose/choose.html"
            alert("login successfully")
            
        }else{
            
            alert("Log in failed")
        }
        

});
