let studentArray = ["Ali" , "Patrick" , "Michael" , "Christian"];

studentArray.forEach(item => {
    studentUl.innerHTML += '<li>'+item+'</li>';
});

function addName() {
    if (document.getElementById('studentName').value == '') {

        window.alert("Bitte einen Namen ins Textfeld schreiben");
        
    }
    else{
    studentArray.push(document.getElementById('studentName').value);

    /*studentUl.innerHTML += '<li>'+studentArray[studentArray.length-1]+'</li>';*/

    document.getElementById("studentUl").innerHTML = "";

    studentArray.sort(Intl.Collator().compare);
    studentArray.forEach(item => {
        studentUl.innerHTML += '<li>'+item+'</li>';
    });

    document.getElementById('studentName').value = '';
    }
}