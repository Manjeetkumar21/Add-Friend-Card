let relation = document.querySelector('.relation');
let add = document.querySelector("#add");
let flag = 0;

add.addEventListener('click', function(){
    if(flag==0){
        relation.innerHTML = "Friends";
        relation.style.color = "green";
        add.innerHTML = "Remove Friend"
        add.style.backgroundColor = "#6c757d"
        flag = 1;
    }
    else{
        relation.innerHTML = "Stranger";
        relation.style.color = "#6c757d";
        add.style.backgroundColor = "rgb(50, 103, 248)"
        add.innerHTML = "Add Friend"
        flag = 0;
    }
    
})