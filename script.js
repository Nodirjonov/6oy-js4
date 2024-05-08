let card = document.getElementById('card')
fetch('https://jsonplaceholder.typicode.com/users')
.then((data)=>{
    return data.json()
})
.then((datajson)=>{
    console.log(datajson);
   
    for(item of datajson){
        card.innerHTML+=`
        <div>
        <h1>${item.name}</h1>
        <p>${item.id}</p>
        <p>${item.username}</p>
        <p>${item.email}</p>
        <p>${item.phone}</p>
       
        </div>
        `
           }
        })
