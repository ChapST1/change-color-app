let btn = document.querySelector("#btn");
let body = document.querySelector("body");
let colorText = document.querySelector("#colorText");
let coloresRandoom = ["blue","red","green","red","orange","purple","gray","white","pink","yellow","black"];

btn.addEventListener('click',()=>{
    let proceso = coloresRandoom[Math.floor(Math.random() * coloresRandoom.length)];
    let procesoDos = coloresRandoom[Math.floor(Math.random() * coloresRandoom.length)];
    body.style.background = proceso;

    colorText.textContent = proceso.toUpperCase();
    colorText.style.color = proceso;
    btn.style.background = procesoDos;
})