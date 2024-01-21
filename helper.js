import {getUsers,filteringData} from './script.js'
export {addEventBtn};
const showAllBtn = document.getElementById('showAll');
const selectInput = document.getElementById('dropdownSelect')
const search = document.getElementById('search')
const textInput = document.getElementById('textInput')

const addEventBtn = () => {
    showAllBtn.onclick = getUsers
    textInput.onchange = submitForm
    search.onclick = submitForm
}   
const submitForm = () => {
    //var formData = new FormData(document.getElementById('form'));
    const text = textInput.value.trim().toLowerCase();
    const select = selectInput.value.toLowerCase();
    text != '' ? filteringData(select,text) : null
}
