const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let choice1 = document.getElementById("choice1-id")
let choice2 = document.getElementById("choice2-id")

// choice1.textContent = "lol"

function generatePassword() {
    let temp1 = ""
    let temp2 = ""
    let random1 = 0
    let random2 = 0
    
    for(let i = 0; i < 15; i++) {
        random1 = Math.floor(Math.random() * characters.length)
        temp1 += characters[random1]
        
        random2 = Math.floor(Math.random() * characters.length)
        temp2 += characters[random2]
    }
    choice1.textContent = temp1
    choice2.textContent = temp2
    
}

// console.log(random1 = Math.floor(Math.random() * characters.length))
// console.log(characters.length)




