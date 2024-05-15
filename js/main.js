const cardBtn = document.querySelector('.card-btn')


let card = document.querySelector('.card')
// let cardTitle = document.createElement('p')
let cardId = document.createElement('span')
cardId.classList.add('card__id')
// cardId.append(cardTitle)
let cardText = document.createElement('p')
cardText.classList.add("card__text")



// console.log(cardTitle);
// console.log(cardId);
// console.log(cardText);




const url = "https://api.adviceslip.com/advice"

async function setProgramm() {

    fetch(url)
        .then(response => {
            // console.log(response);
            if (response.ok == true) return response.json()
        })
        .then(data => {
            // console.log(data.slip.advice);
           

            card.innerHTML = `
                    <p class="card-title">ADVICE #<span class="card__id">${data.slip.id}</span></p>

                    <p class="card__text">${data.slip.advice}
                    </p>
                    <div class="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                            <rect width="6" height="16" rx="3" fill="#CEE3E9" />
                            <rect x="14" width="6" height="16" rx="3" fill="#CEE3E9" />
                        </svg>
                    </div>

                <a href="#!" class="card-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <circle cx="32" cy="32" r="32" fill="#53FFAA" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M24 20H40C42.2081 20.0025 43.9975 21.7919 44 24V40C43.9975 42.2081 42.2081 43.9975 40 44H24C21.7919 43.9975 20.0025 42.2081 20 40V24C20.0025 21.7919 21.7919 20.0025 24 20ZM26 36.5C26 37.3284 26.6716 38 27.5 38C28.3284 38 29 37.3284 29 36.5C29 35.6716 28.3284 35 27.5 35C26.6716 35 26 35.6716 26 36.5ZM27.5 29C26.6716 29 26 28.3284 26 27.5C26 26.6716 26.6716 26 27.5 26C28.3284 26 29 26.6716 29 27.5C29 28.3284 28.3284 29 27.5 29ZM30.5 32C30.5 32.8284 31.1716 33.5 32 33.5C32.8284 33.5 33.5 32.8284 33.5 32C33.5 31.1716 32.8284 30.5 32 30.5C31.1716 30.5 30.5 31.1716 30.5 32ZM36.5 38C35.6716 38 35 37.3284 35 36.5C35 35.6716 35.6716 35 36.5 35C37.3284 35 38 35.6716 38 36.5C38 37.3284 37.3284 38 36.5 38ZM35 27.5C35 28.3284 35.6716 29 36.5 29C37.3284 29 38 28.3284 38 27.5C38 26.6716 37.3284 26 36.5 26C35.6716 26 35 26.6716 35 27.5Z"
                            fill="#202733" />
                    </svg>
                </a>
                
                `

             

            cardId.innerHTML = data.slip.id
            cardText.innerHTML = data.slip.advice
            console.log(cardId, cardText)
            

        })
}

function reload() {
    
    if (cardId.innerHTML != "" && cardText.innerHTML != "") {
        cardId.innerHTML = "";
        cardText.innerHTML = "";
    }

}

cardBtn.addEventListener("click", function () {
    // document.location.reload()
    reload()

    setProgramm();

})






