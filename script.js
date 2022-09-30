const input=document.querySelector('.input');
const btn=document.querySelector('.addButton');
const container=document.querySelector('.container');

function showList(){
    // create todo list elements
    const form=document.createElement('form');
    form.className='item';
    const itemInp=document.createElement('input');
    itemInp.className='item_input';
    itemInp.readOnly=true;
    const editBtn=document.createElement('button');
    editBtn.className='editButton';
    editBtn.textContent='EDIT';
    const delBtn=document.createElement('button');
    delBtn.className='deleteButton';
    delBtn.textContent='DELETE';
    form.append(itemInp, editBtn, delBtn);
    
    // Get todo lists
    if(!input.value){
        input.placeholder='Enter todo list here !!'
    }else{
    itemInp.value=input.value;
    container.appendChild(form);
    input.value='';
    };

    editBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        if(editBtn.textContent=='EDIT'){
            itemInp.readOnly=false;
            itemInp.focus();
            editBtn.textContent="DONE";
            editBtn.style.color='#168323';
        }else {
            itemInp.readOnly=true;
            itemInp.blur();
            editBtn.textContent="EDIT";
            editBtn.style.color='#383cc1';
        }
    });

    delBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        container.removeChild(form);
    })
}

btn.addEventListener('click', showList);