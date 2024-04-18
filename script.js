const form=document.getElementById("form")
const nameInp=document.getElementById("name")
const surnameInp=document.getElementById("surname")
const ageInp=document.getElementById("age")
const nationality=document.getElementById("nationality")
const position=document.getElementById("position")
const experience=document.getElementById("experience")
const tbody=document.getElementById("tbody")
const users=[]
let id=0

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let newUser={
        id:id,
        name:nameInp.value,
        surname:surnameInp.value,
        age:ageInp.value,
        nationality:nationality.value,
        position:position.value,
        experience:experience.value
    }
    users.push(newUser)
    nameInp.value="";
    surnameInp.value="";
    ageInp.value="";
    nationality.value="Azerbaijan";
    position.value="Fronted";
    
    renderUI(users)
    id++;
    
})

const renderUI=(items)=>{
    let innerHTML=""
    for (let i = 0; i < items.length; i++) {
        innerHTML+=` <tr>
        <td>${items[i].name}</td>
        <td>${items[i].surname}</td>
        <td>${items[i].age}</td>
        <td>${items[i].nationality}</td>
        <td>${items[i].position}</td>
        <td>${items[i].experience}</td>
        <td><button class="btn btn-danger" onclick="deleteHandler(${users[i].id})" >delete</button></td>
        <td><button class="btn btn-secondary" onclick="editHandler(${users[i].id})">edit</button></td>
      </tr> `
        
    }
    tbody.innerHTML=innerHTML
}

function deleteHandler(id){
let target=users.find((x)=>x.id==id)
let indexTarget =users.indexOf(target)
users.splice(indexTarget,1) 
renderUI(users)
}

const editHandler=(id) =>{
    let target=users.find((x)=>x.id==id)
    let newUserName=prompt("new name")
    let newSurname=prompt("new surname")
    let newAge=prompt("new age")
    let newNationality=prompt("new nationality")
    let newPosition=prompt("new position")
    let newExperience=prompt("new experience")
    target.name=newUserName
    target.surname=newSurname
    target.age=newAge
    target.nationality=newNationality
    target.position=newPosition
    target.experience=newExperience
    renderUI(users)
}