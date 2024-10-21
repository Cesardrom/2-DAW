let li = document.getElementsByTagName("li")

function convertNazgul(){
    for(let i=0; i<li.length; i++){
        li[i].addEventListener("mouseover",function(){
            li[i].style.backgroundColor = "black";
            li[i].innerText = "Nazgul";
            li[i].style.color = "white";
        });
    }
}

convertNazgul()