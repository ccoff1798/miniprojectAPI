// capture form input elements on submit

const submit = document.getElementById("submit")
const modal = document.getElementById("modal")

//reference the dom variables we will need
const sectionEl = document.createElement('section')

const form = document.querySelector('form')


//attach event listner to submit button
submit.addEventListener('click' , onClick)
//save input value to local storage
function onClick(){
    setLocalItems()
    closeModal()
}
function setLocalItems(){
    localStorage.setItem("Project" , form)
}

//create element to put project data on the main page
function getLocalItems(){
    localStorage.getItem("Project",form)
}
//close modal on submit

function closeModal()
{
    modal.remove()
}

function readStorage();
{
    var storedVars = getLocalItems()
    JSON.stringify(storedVars)
}