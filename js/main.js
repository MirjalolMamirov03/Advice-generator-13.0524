// const cardBtn = document.querySelector('.card-btn')

// let card = document.querySelector('.card')
// // let cardTitle = document.createElement('p')
// let cardId = document.createElement('span')
// // cardId.classList.add('card__id')
// // // cardId.append(cardTitle)
// // let cardText = document.createElement('p')
// // cardText.classList.add("card__text")







// // const url = "https://api.adviceslip.com/advice"

// async function setProgramm() {


//     let response = await fetch("https://api.adviceslip.com/advice")
//     let data  = await response.json()
//     console.log(data.slip.advice)
    
//     // let cardText = document.createElement('p')
//     // cardText.classList.add('card__text')

//     // console.log(cardText)
//     cardText.textContent = data.slip.advice
//     console.log(cardText)

//     card.append(cardText)

   
// }


// setProgramm()

// cardBtn.addEventListener("click", function (event) {
//     location.reload()
    
// })








// Class

const elBtn = document.querySelector('.card-btn')

const url = "https://api.adviceslip.com/advice"

class AdviceGenerator {
    adviceText
    adviceId
    constructor (obj) {
        let adviceText = document.querySelector(obj.el)
        let adviceId = document.querySelector(obj.elId)
        this.adviceText = adviceText
        this.adviceId = adviceId
        console.log(adviceText);
    }

    async advice (url) {
        let response = await fetch(url)
        console.log(response);
        if (response.ok) return response.json()
            .then(data => {
                console.log(data);

                let id = data.slip.id
                let advText = data.slip.advice

                this.adviceText.innerHTML = advText
                this.adviceId.innerHTML = id 
        })
    }
}

let advice = new AdviceGenerator({
    el: ".card__text",
    elId: ".card__id"
});

advice.advice(url)

elBtn.addEventListener('click', function () {
    location.reload()
})