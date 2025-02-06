function fncarregardados(){



const url = "https://api.github.com/users/DaniloBandeira0"
fetch(url)
.then( resposta =>{
return resposta.json();
})
   .then(data =>{
    console.dir(data);
   })

}
