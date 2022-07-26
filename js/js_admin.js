window.addEventListener("DOMContentLoaded", () => {
    ListMail();
})

function ListMail(){
    fetch ('php/listMail.php')
    .then(response => response.json())
    .then((result) => {
        const tbodyTable = document.querySelector('tbody');
        
        result.forEach( mail => { 
            
            let newRowElement = document.createElement('tr');
            tbodyTable.appendChild(newRowElement);
            
            let newColumn = document.createElement('td'); 
            newRowElement.appendChild(newColumn);
            let newValueColumn = document.createTextNode(mail['date_mail']);
            newColumn.appendChild(newValueColumn);
            
            let newColumn2 = document.createElement('td'); 
            newRowElement.appendChild(newColumn2);
            let newValueColumn2 = document.createTextNode(mail['mail']);
            newColumn2.appendChild(newValueColumn2);
            
            let newColumn3 = document.createElement('td'); 
            newRowElement.appendChild(newColumn3);
            let newValueColumn3 = document.createTextNode('poubelle');
            newColumn3.appendChild(newValueColumn3);
        })
    })
}