let item = document.querySelector("#get_text");    /* Declare to get input data */
let todobox = document.querySelector("#todobox");  /* Declare to create new todo */



/* The function is created to grab keyboard data using event listner */

item.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        addtodo(this.value);
        this.value = "";
       
        }
    });



/**  this function is to create new todo li when user enter something and hit enter**/

const addtodo = (item) =>{
   const listItem = document.createElement("li");
   listItem.innerHTML = `
   ${item}
   <i class="fa fa-window-close" ></i>
   `;
   
   todobox.appendChild(listItem);
        listItem.addEventListener("click", function(){
            listItem.classList.toggle("done");
   })
   

   listItem.querySelector("i").addEventListener("click", function(){
        listItem.remove()
   })


}