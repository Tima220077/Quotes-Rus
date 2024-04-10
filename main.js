

let btnGen = document.getElementById("btnGen")
let textEl = document.getElementById("quotes")
let authorEl = document.getElementById("quotePerson")

btnGen.addEventListener("click", getQuote)
let arr = []
async function getQuote(){
    let rand = Math.floor(Math.random()*100)
//     fetch("./quotes.json")
//     .then(res => res.json())
//     .then(function(quotes){
//     textEl.innerHTML = quotes[rand].text
//     authorEl.innerHTML = quotes[rand].author

// })


    let res = await fetch("./quotes.json")
    let quotes = await res.json()
    console.log(quotes[rand])
    textEl.innerHTML = quotes[rand].text
    authorEl.innerHTML = quotes[rand].author
}


