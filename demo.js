const arr=[document.querySelector(".rock"),document.querySelector(".paper"),document.querySelector(".scissors")];
let uc,cc,cp=0,up=0;
let mes=document.querySelector("#mess");
let compp=document.querySelector("#compp");
let mep=document.querySelector("#mep");
let arr1=document.querySelectorAll("div");
arr1.forEach((div)=>
{
    div.addEventListener("click",()=>{
        uc=div;
        const ind=Math.floor(Math.random()*arr.length);
        cc=arr[ind];
        if(uc===cc)
        {
            mes.innerText="drow";
        }
        else if((uc==arr[0]&&cc==arr[2])||(uc==arr[2]&&cc==arr[1])||(uc==arr[1]&&cc==arr[0]))
        {
            up++;
            mep.innerText=up;
            mes.innerText="user win";
        }
        else{
            cp++;
            compp.innerText=cp;
            mes.innerText="computer win";
        }
    })
});
