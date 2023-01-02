const images = ['./images/image2.jpeg', './images/image3.jpeg', './images/image4.jpeg', './images/image5.png','./images/image6.jpeg', './images/image7.jpeg']
const reviews = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, cum. Animi voluptasnam impedit magnam, dignissimos maxime amet officia quiavoluptate fugit, sed rem aspernatur consequatur esse repudiandae corrupti minus?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, cum. Animi voluptasnam impedit magnam, dignissimos maxime amet officia quiavoluptate fugit, sed rem aspernatur consequatur esse repudiandae corrupti minus?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, cum. Animi voluptasnam impedit magnam, dignissimos maxime amet officia quiavoluptate fugit, sed rem aspernatur consequatur esse repudiandae corrupti minus?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, cum. Animi voluptasnam impedit magnam, dignissimos maxime amet officia quiavoluptate fugit, sed rem aspernatur consequatur esse repudiandae corrupti minus?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, cum. Animi voluptasnam impedit magnam, dignissimos maxime amet officia quiavoluptate fugit, sed rem aspernatur consequatur esse repudiandae corrupti minus?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, cum. Animi voluptasnam impedit magnam, dignissimos maxime amet officia quiavoluptate fugit, sed rem aspernatur consequatur esse repudiandae corrupti minus?",
    
]
const name = ["Dave Curtis", " Lucas Dominguez", "Marie Dupont", "Maxine Ortega", "Nate Williams", "Emily Russell"]
const cusOccupation = ["CEO, Mango Tech", "Security Officer, SpaceY", "TechLead, Essential Enterprise", "Accountant, Fire Microfinance Bank", "Marketing Exexutive, Horizon Enterprise", "Cyber Security Specialist"]
let currentItem = 0

const previous = document.getElementById("previous-button")
const next = document.getElementById("next-button")
console.log(next)

const customerName = document.getElementById("customer-name")
const customerReview = document.getElementById("customer-review")
const customerImage = document.getElementById("customer-image")
const customerOccupation = document.getElementById("customer-occupation")

next.addEventListener('click', function increaseCurrentItem(){
    console.log(currentItem)
    showCustomerImage(currentItem)
    showCustomerReview(currentItem)
    showCustomerName(currentItem)
    showCustomerOccupation(currentItem)
    if(currentItem < name.length-1){
        currentItem++
    }
    else{
        currentItem = 0
    }
})

previous.addEventListener('click', function decreaseCurrentItem(){
    showCustomerImage(currentItem)
    showCustomerReview(currentItem)
    showCustomerName(currentItem)
    showCustomerOccupation(currentItem)
    if(currentItem > 0){
        currentItem--
    }
    else{
        currentItem = 2
    }
})

function showCustomerImage(currentItem) {
    const image = images[currentItem]
    customerImage.setAttribute("src",image)
}

function showCustomerName(currentItem) {
    const names = name[currentItem]
    customerName.textContent = names   
}

function showCustomerReview(CurrentItem){
    const review = reviews[currentItem]
    reviews.textContent = review
}

function showCustomerOccupation(currentItem) {
    const occupationn = cusOccupation[currentItem]
    customerOccupation.textContent = occupationn
}

