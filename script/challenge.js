import submenu from "../Component/csubmenu.js";
document.querySelector("#csubmenu").innerHTML=submenu();

let data =[
    {url:"https://shapelink-uploads.s3-eu-west-1.amazonaws.com/challenges/6d030c9d7cb7bea585c738bfe79606d68049e35936c8605023c727e025e39891.png" ,title:"Challenge friends",heading:"Running Madness 2021",para:"",participante:"22 "},
    {url:"https://shapelink-uploads.s3-eu-west-1.amazonaws.com/challenges/ddd7f55c1864b92c4ea0334a758ad788749865dcc45376621b2124a24418d1f2.png" ,title:"Challenge friends",heading:"Tour de Twiik 2021",para:"",participante:"19"},
    {url:"https://shapelink-uploads.s3-eu-west-1.amazonaws.com/challenges/klassikern.png" ,title:"Challenge yourself",heading:"Klara en svensk klassiker",para:"Utför de 4 klassiska svenska tävlingarna Vasaloppet, Vätternrundan, Vansbrosimmet och Lidingöloppet i följd under ett års tid.",participante:"164"}
];


let appends = (data)=>{
    data.map((elem)=>{
        let container = document.querySelector("#slide-container");
        let main = document.createElement("div");
        main.setAttribute("class","slide");

        let submain = document.createElement("div");
        submain.setAttribute("class","inside");

        let div1 = document.createElement("div");
        let img = document.createElement("img");
        img.src=elem.url;

        div1.append(img)
        let div2 = document.createElement("div");
        let title = document.createElement("p");
        title.innerText=elem.title;
        let head = document.createElement("h1");
        head.innerText=elem.heading;
        let  para = document.createElement("p");
        para.innerText=elem.para;
        let join = document.createElement("button");
        join.innerText="JOIN CHALLENGE";
        let participante = document.createElement('span');
        participante.setAttribute("id","font")
        let part = document.createElement('span');
        part.innerText="participants";
        participante.innerText=elem.participante;
        div2.append(title,head,para,join,participante,part);
        submain.append(div1,div2)
        main.append(submain);
        container.append(main)

    })
}
appends(data);

let counter =0;


let slideShow=(num)=>{
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("single-dot");
    for(let y of slides){
        y.style.display="none"; 
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
    if(counter>slides.length-1){
        counter=0;
        num=0;
    }
    if(counter<0){
        counter=slides.length-1;
        num=slides.length-1;
    }
    slides[num].style.display="block";
    dots[num].className += " active";
   
   
}
document.querySelector(".prev").addEventListener("click",control);
document.querySelector(".next").addEventListener("click",controls);
document.querySelector(".prevs").addEventListener("click",control);
document.querySelector(".nexts").addEventListener("click",controls);
function control(){
    let prev =-1;
    counter=counter+prev;
    slideShow(counter);
    
}
function controls(){
    let next =1;
    counter=counter+next;
    slideShow(counter);
   
}
function auto (){
    counter++;
    slideShow(counter);
    setTimeout(auto, 4000);
};
auto();


  
