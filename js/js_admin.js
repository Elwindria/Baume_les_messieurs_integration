window.addEventListener("DOMContentLoaded", () => {
    ListMail();
})

// Demande des mails
function ListMail(){
    fetch ('php/listMail.php')
    .then(response => response.json())
    .then((result) => {
        createTable(result);
    })
}

// Création de la table des mails
function createTable(result){

    const tbodyTable = document.querySelector('tbody');
    let i = 0;
        
    result.forEach( mail => { 
        
        (i++)

        // création des tr et td avec une class qui s'ingrémente, grâce à (i++)

        let newRowElement = document.createElement('tr');
        newRowElement.classList.add("tr_"+i);
        tbodyTable.appendChild(newRowElement);
        
        let newColumn = document.createElement('td'); 
        newRowElement.appendChild(newColumn);
        let newValueColumn = document.createTextNode(mail['date_mail']);
        newColumn.appendChild(newValueColumn);
        
        let newColumn2 = document.createElement('td');
        newColumn2.classList.add("mail_"+i);
        newRowElement.appendChild(newColumn2);
        let newValueColumn2 = document.createTextNode(mail['mail']);
        newColumn2.appendChild(newValueColumn2);
        
        let newColumn3 = document.createElement('td'); 
        newRowElement.appendChild(newColumn3);
        let newValueColumn3 = document.createElement("img");
        newValueColumn3.src = "images/trash.png";
        newValueColumn3.classList.add("trash");
        newColumn3.appendChild(newValueColumn3);
    })

    initialisationDeleteMail();
}

function initialisationDeleteMail(){

    const allTrash = document.querySelectorAll(".trash");

    allTrash.forEach((trash, index) => {
        trash.addEventListener("click", function(){confirmDeleteMail(index)}) 
    });
}

//Message Confirmation du mail
function confirmDeleteMail(index){
    console.log("confirmDelete")
    const divDeleteValidate = document.querySelector("#div_delete_validate");
    const buttonYes = document.querySelector("#yes");
    const buttonNo = document.querySelector("#no");
    const spanDeleteMail = document.querySelector("#span_delete_mail_validate");

    //index+1 car mon premier td est la case 'supprimer'
    let newIndex = index+1;
    let mail = document.querySelector(".mail_"+newIndex).textContent;

    let textMail = document.createTextNode(mail);
    spanDeleteMail.appendChild(textMail);

    // divDeleteValidate.style.display = "unset";
    buttonYes.addEventListener("click", function(){
        console.log(newIndex);
        divDeleteValidate.style.display = "none";
        deleteMail(newIndex, mail)
    })
}

//Suppression des mails
function deleteMail(newIndex, mail){
    
    // console.log(newIndex);
    let mailValue = new FormData();
    mailValue.append("value", mail);

    fetch ('php/deleteMail.php',{
        method: "POST",
        body: mailValue
    })
    .then(() => {
        // selection de la ligne du mail + suppresion de celle-ci
        let trDelete = document.querySelector(".tr_"+newIndex);
        console.log(trDelete);
        trDelete.remove();
    })
}

