const submitBtn = document.querySelector('.submit-btn')
const card = document.querySelector('.card')
const thankYouStateCard = document.querySelector('.thank-you-state-card')
const rate = document.querySelector('.rate') 
const ratings = document.querySelectorAll('.rating')
const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')
const five = document.getElementById('5')

// one.addEventListener('click', changeColor)
// two.addEventListener('click', changeColor)
// three.addEventListener('click', changeColor)
// four.addEventListener('click', changeColor)
// five.addEventListener('click', changeColor)
submitBtn.addEventListener('click', display)

// function changeColor(e) {
//     e.target.backgroundColor = 'hsl(217, 12%, 63%)'
// }

function display() {
    card.style.display = 'none'
    thankYouStateCard.style.display = 'block'
    if (presentRate === undefined) return
    updateRating(presentRate)
}

function updateRating(presentRate) {
        rate.innerHTML = `
          <span class="rate">${presentRate}</span>
       `
}

let presentRate
ratings.forEach(rating => addEventListener('click', e => {
    presentRate = e.target.id
}))