window.addEventListener("DOMContentLoaded", () => {
    ListMail();
})

// Demande des mails dans la base SQL
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
        newColumn.classList.add("date_mail", "date_mail"+i);
        newRowElement.appendChild(newColumn);
        let newValueColumn = document.createTextNode(mail['date_mail']);
        newColumn.appendChild(newValueColumn);
        
        let newColumn2 = document.createElement('td');
        newColumn2.classList.add("mail_"+i, "mail");
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

    const templateDeleteValidate = document.querySelector("#template_delete_validate");
    const clone = document.importNode(templateDeleteValidate.content, true);
    const body = document.querySelector('body');
    const buttonYes = clone.querySelector("#yes");
    const buttonNo = clone.querySelector("#no");
    const spanDeleteMail = clone.querySelector("#span_delete_mail_validate");

    //index+1 car mon premier td est la case 'supprimer'
    let newIndex = index+1;

    let mail = document.querySelector(".mail_"+newIndex).textContent;

    let textMail = document.createTextNode(mail);
    spanDeleteMail.appendChild(textMail);

    //apparition de la fenêtre
    body.appendChild(clone);

    // Confirmation oui ou non
    buttonYes.addEventListener("click", function(){
        deleteMail(newIndex, mail);
        document.querySelector("#background_delete").remove();
    })
    buttonNo.addEventListener("click", function(){
        document.querySelector("#background_delete").remove();
    })
}

//fermeture du message de confirmation au click en dehors
document.addEventListener("click", function(e){
    var eTarget = e.target;
    
    //si background(le fond sombre de la pop up) existe + on clique dessus, alors on delete
    if (document.querySelector("#background_delete") && eTarget === document.querySelector("#background_delete")){
        document.querySelector("#background_delete").remove();
    }
});

//Suppression des mails
function deleteMail(newIndex, mail){
    
    let mailValue = new FormData();
    mailValue.append("value", mail);

    fetch ('php/deleteMail.php',{
        method: "POST",
        body: mailValue
    })
    .then(() => {
        // selection de la ligne du mail + suppresion de celle-ci
        let trDelete = document.querySelector(".tr_"+newIndex);
        trDelete.remove();
    })
}

/* Trier les mails par date/mail */

const allImgSort = document.querySelectorAll(".img_sort")
const thDate = document.querySelector("#date");
const thMail = document.querySelector("#mail");

thDate.addEventListener("click", ()=>{rotate(0)});
thMail.addEventListener("click", ()=>{rotate(1)});

function rotate(index){
    if(allImgSort[index].classList[1] != "transform_img_sort"){
        allImgSort[index].classList.add("transform_img_sort");
    } else {
        allImgSort[index].classList.remove("transform_img_sort");
    }
    sort(index);
}

function sort(index){

    const allDateMail = document.querySelectorAll(".date_mail");
    const allMail = document.querySelectorAll(".mail");

}