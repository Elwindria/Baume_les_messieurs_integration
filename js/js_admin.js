window.addEventListener("DOMContentLoaded", () => {
    ListMail();
})

function ListMail(){
    fetch ('php/listMail.php')
    .then(response => response.json())
    .then((result) => {
        console.log(result.lol);
    })
}