let taskinput = document.querySelector("input");
let addtaskbtn = document.querySelector("button");
let tasklist =  document.querySelector("ul");
// LocalStorage Array
let tasks = JSON.parse(localStorage.getItem("to-dos")) || [];

addtaskbtn.addEventListener("click", function() {
    tasks = localStorage.clear();
    let maintask = taskinput.value.trim()
    if (maintask !== "") {
        // Created a list to Display Tasks.
        let list = document.createElement("li");
        // Creating a Delete Button. 
        let deletebtn = document.createElement("button");
        deletebtn.textContent= "Delete Task";
        // Delete Button Event Listener
        deletebtn.addEventListener("click", function () {
            // jahaa delete dabaayenge vo task delete ho jaayega
            list.remove();
            // Filter se ek new array bnaake jo task delete huaa usko localStorage se bhi nikal dengee. 
            tasks = tasks.filter(task => task !== maintask);
                localStorage.setItem("to-dos", JSON.stringify(tasks));
            });
        // Setting the input values to list
        list.textContent = maintask;
        // Tasks array me daal rhee Data
        tasks.push(maintask);
        //LocalStorage me data daal rhee
        localStorage.setItem("to-dos", JSON.stringify(tasks));
        // UL k andar LI daal rhee
        tasklist.appendChild(list);
        // LI k andarr Delete Button daal rhee
        list.appendChild(deletebtn);
        // Add hone ke baad input clear ho jaaye
        taskinput.value = "";
    }
})
