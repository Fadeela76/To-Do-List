let button = document.querySelector("button");
let input = document.querySelector("input");
let container = document.querySelector(".task");
let tasks = document.querySelector("ul");




button.addEventListener("click", () => {
   if(input.value == ""){
    alert('You must write something!');
   }else{
     let li = document.createElement("li");

     li.innerText = input.value;
     input.value = "";
     li.style.fontSize = "40px";
     tasks.append(li);


     let check = document.createElement("input");
     check.setAttribute("type", "checkbox");
     li.prepend(check);

     let span = document.createElement("span");
     span.innerHTML = "\u00d7";
     li.appendChild(span);
     
     li.style.listStyleType = "none";
     span.addEventListener("click", () =>{
        li.remove();
     });

     check.addEventListener("click", () =>{
        li.style.textDecoration = "line-through";
     });
   }
});
