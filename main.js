/* store the image in variable */
let allImage = document.querySelectorAll('img')

/* access the next and prev btn */
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

/* store the indicators in variable */
let allDots = document.querySelectorAll('.dot')

var counter = 0

/* work for the next button */
next.addEventListener('click', callNext)

function callNext(){
	allImage[counter].style.animation = "next1 0.5s ease-in forwards"
	if(counter >= allImage.length - 1){
		counter = 0
	}else{
		counter++
	}
	allImage[counter].style.animation = "next2 0.5s ease-in forwards"
	indicator()
}

/* work for the prev button */
prev.addEventListener('click', function(){
	allImage[counter].style.animation = "prev1 0.5s ease-in forwards"
	if(counter == 0){
		counter = allImage.length-1
	}else{
		counter--
	}
	allImage[counter].style.animation = "prev2 0.5s ease-in forwards"
	indicator()
})

/* autoslide */
let deleteInter
function sliding(){
	deleteInter = setInterval(callNext, 2000)

}
sliding()

/* stop autosliding when mouse is over */
let container = document.querySelector('.slide-container')

container.addEventListener('mouseover', ()=>{
	clearInterval(deleteInter)
})

/* start autoloading after mouse leave */
container.addEventListener('mouseout', ()=>{
	sliding()
})

/* change the active class to active slider */
function indicator(){
	let totalDots = allDots.length
	for(let i = 0; i< totalDots; i++){
		allDots[i].className = allDots[i].className.replace('active', '')
	} 
	allDots[counter].classList.add('active')
}

/* add click event with indicator */

allDots.forEach(item=>{
	item.addEventListener('click', switchImage)
})
function switchImage(event){
	this.classList.add('active')
	let imgID = this.getAttribute('attr')
	if(imgID > counter){
		allImage[counter].style.animation = "next1 0.5s ease-in forwards"
		counter = imgID
		allImage[counter].style.animation = "next2 0.5s ease-in forwards"
	}else if(imgID == counter){
		return
	}else{
		allImage[counter].style.animation = "prev1 0.5s ease-in forwards"
		counter = imgID
		allImage[counter].style.animation = "prev2 0.5s ease-in forwards"

	}
	indicator()
}