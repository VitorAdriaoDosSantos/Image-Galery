const btn = document.querySelector("button");
const container = document.querySelector(".mainContainer");

btn.addEventListener("click",()=>
{
container.removeChild(btn)
const btnRemove = document.createElement("button");
btnRemove.textContent = "x";
btnRemove.setAttribute("class","btn-remove");
container.appendChild(btnRemove);

    btnRemove.addEventListener("click",()=>
    {  
        container.removeChild(btnRemove);
        container.removeChild(thumbbar)
        container.appendChild(btn);
    })

const thumbbar = document.createElement("div");
thumbbar.setAttribute("class","thumb-bar");
container.appendChild(thumbbar);

const thumbbarFullImg = document.createElement("div");
thumbbarFullImg.setAttribute("class","thumb-bar-full-img");
thumbbar.appendChild(thumbbarFullImg);

const fullimg = document.createElement("img");
fullimg.setAttribute("class","img-Full");
fullimg.setAttribute("src","img/pic1.jpg");
thumbbarFullImg.appendChild(fullimg);

const thumbbarMiniImg = document.createElement("div");
thumbbarMiniImg.setAttribute("class","thumb-bar-mini-img ");
thumbbar.appendChild(thumbbarMiniImg);


images = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.png','pic6.jpg'];
alts = {
    'pic1.jpg' : 'images from the anime series kimetsu no yaiba(demons slayer)',
    'pic2.jpg' : 'images from the anime series kimetsu no yaiba(demons slayer)',
    'pic3.jpg' : 'images from the anime series kimetsu no yaiba(demons slayer)',
    'pic4.jpg' : 'images from the anime series kimetsu no yaiba(demons slayer)',
    'pic5.png' : 'images from the anime series kimetsu no yaiba(demons slayer)',
    'pic6.jpg' : 'images from the anime series kimetsu no yaiba(demons slayer)'
}
for(image of images)
{
    const imgmini = document.createElement("img");
    imgmini.setAttribute("class","img-mini");
    imgmini.setAttribute("src",`img/${image}`);
    imgmini.setAttribute("alt",alts[image]);

    thumbbarMiniImg.appendChild(imgmini);

    imgmini.addEventListener("click",(e)=>
    {
        fullimg.src = e.target.src;
        fullimg.alt = e.target.alt;
    })
}

})
