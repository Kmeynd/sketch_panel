function createGrid(number) {
    number=number**2
    div=document.querySelector("div")
    for(i=1;i<=number;i+=1){
        h=450/(number/(Math.sqrt(number)))
        newdiv=document.createElement("div")
        newdiv.setAttribute('id','div1')
        newdiv.setAttribute("style",`box-sizing:border-box;border:1px solid black;height:${h}px;width:${h}px;margin:0;`)
        div.append(newdiv)
    }
    div=document.querySelector("div")
div.setAttribute("style","margin:0; background:gray; width:450px; height:450px;display:flex;flex-wrap:wrap")
return number
} 


function changeGrid(number){
x=0
let elementsArray = document.querySelectorAll("#div1");
elementsArray.forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
        if (elem.style.background!='blue'){
            elem.style.background="blue"
            x+=1  
        }
        if (x==number){
            x+=1
            let button =document.createElement('button')
            header=document.querySelector('header')
            button.setAttribute("style",'width:100px; height:50px')
            button.textContent="Reset"
            header.appendChild(button)
            
            startagain()
           
        }    
    });
});



}

function suppress(){
    div=document.querySelector("div")
    let elementsArray = document.querySelectorAll("#div1");
    elementsArray.forEach(function(elem) {
        div.removeChild(elem) 
})
}

function startagain(count){
    if (count==0){
        x=16
        number=createGrid(x)
        changeGrid(number)
        count+=1
    }else{
        let button=document.querySelector('button')
        button.addEventListener('click',function(){

        choice=prompt("What size should be the next one?:")
        if (choice>100){
            choice=100
        }else if (choice==undefined){
            choice=16
        }
        suppress()
        choice=createGrid(choice)
        changeGrid(choice)
        let header=document.querySelector('header')
        header.removeChild(button)
        })
    

    
    }
}

count=0
startagain(count)
    








    

