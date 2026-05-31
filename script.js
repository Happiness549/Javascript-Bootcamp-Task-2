const nameInput = document.getElementById('student-name');
const markInput = document.getElementById('student-mark');
const buttonElement = document.getElementById('submit-button');
const resultElement = document.getElementById('results');
const studentsList = document.getElementById('student-list');


buttonElement.addEventListener("click", function(event){

    event.preventDefault();

    
    const name = nameInput.value.trim();
    const mark = markInput.value.trim();

    

    if (name===""||
        mark=== "" ||
        Number(mark) <0 ||
        Number(mark) >100 

    ) {
        resultElement.textContent = "Put correct name and mark";
        return;
    }

    
    
    let result;
    const markValue = Number(mark);
    

    if(markValue >= 80 && markValue <= 100){
        result = "Passed with distinction"
    } else if(markValue >= 65 && markValue <= 79){
        result = "Passed with merit"
    } else if(markValue >= 50 && markValue <= 64){
        result = "Passed"
    } else{
        result = "Failed"
    }

    resultElement.innerHTML = result;


    const listItem = document.createElement("li");
    listItem.textContent = name + " (" + markValue + "%) : " + result;
    studentsList.appendChild(listItem);
    

});

