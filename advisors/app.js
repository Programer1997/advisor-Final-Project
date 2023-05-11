const button = document.querySelector('#btn-customers');
const selection = document.querySelector('#numberSelector');

let numberOfResults = 3;

button.addEventListener("click",(event) =>{
    event.preventDefault();

    //console.log(selection.value);

    numberOfResults = selection.value;
    getHistory();

});








function getHistory() { 

    fetch ('https://randomuser.me/api/' + 
    `?results=${numberOfResults}`
    )
    .then(response => response.json())
    .then(data =>  {
        console.log(data);

        const patientData = data.results;
        console.log(patientData);
        

        cardsHistory(patientData);

    })

    .catch(err => console.log(err));

    

}

getHistory();

function cardsHistory(patients) { 

    const container = document.querySelector('.patientsContainer');

    let card = "";

    patients.forEach(element => {
        //console.log(element.name.first); works

        

        card += `
        <div class="card">
            <div class="card-header">${element.name.first + " " + element.name.last}</div>
            <div class="card-body">
                <div class="info">
                    <p>Age : ${element.dob.age}</p>
                    <p>Phone : ${element.phone} </p>
                    <p>Gender : ${element.gender}</p>
                </div>
                <div class="image">
                
                    <img src = "${element.picture.medium}" />

                </div>
            </div>
            
            

            

        </div>
        
        
        `;


        
    });

    container.innerHTML = card;



}