import {getHandler} from './getHandler.js'

const entry = document.querySelector('#results');

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('sentences').value 

    const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),      
  }).then(res => {
    return data;
  });

}
    if (!formText || /^\s*$/.test(formText)){
        entry.innerHTML = `<div>Please Enter a Sentence</div>`;
        console.log('please enter a sentence');
    } else {
        
        postData('/test', {formText});
    }

    setTimeout(function(){
            Client.getHandler('/getresult');
    },1500);

    console.log('connected');
}


export { handleSubmit}
