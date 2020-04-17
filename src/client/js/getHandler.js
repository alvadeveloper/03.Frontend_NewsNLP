const entry = document.querySelector('#results');

export async function getHandler(url = '/getresult'){
    try{    

        const response = await fetch(url);
        const allarraydata = response.json();
        const arraydata = Promise.resolve(allarraydata);
        
        let displayArray = [];

        arraydata.then(function(result){
            for (let arr of result){
                displayArray.push(`<div class="polarity">${arr.polarity}</div>`);
                displayArray.push(`<div class="subjectivity">${arr.subjectivity}</div>`);
                displayArray.push(`<div class="text">${arr.text}</div>`);
                displayArray.push(`<br />`);
                entry.innerHTML = displayArray.join(" ")
            }
        })

    } catch(error) {
        console.log(error);
    }
}
