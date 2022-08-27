const addForm= document.querySelector(".add");
const list= document.querySelector(".todos");
const search=document.getElementsByClassName("x")[0];
// sablon
const generateTemplate=(to_do)=>{
 const todo=`
 <ul class="list-group text-light todos">
            <li class=" border list-group-tem d-flex justify-content-between align-items-center">
                <span class="ml-2">${to_do}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
        </ul>
 `;
 list.innerHTML+=todo;
}
// elave etmek ucun
addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const todo=addForm.add.value.trim();
    if(todo.length>0){
        generateTemplate(todo);
        addForm.reset();
    }
    
});
// silmek ucun
list.addEventListener("click",e=>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
});
//axtariscun amma islemir
const filterTodos=(term)=>{
    list.children.filter(todo=>!todo.textContent.includes(term)).forEach(todo=>todo.classList.add('filtered'));
    list.children.filter(todo=>todo.textContent.includes(term)).forEach(todo=>todo.classList.remove('filtered'));
};
search.addEventListener('keyup',()=>{
    const term=search.value.trim().toLowerCase();
    console.log(term);
    filterTodos(term);
})