import * as temp from "./template.js";
import { loadMenu } from "./menu.js";


import seam from "./seam.png";
import seamBg from "./seam-bg.png";
import susie from "./susie_sweatdrop.png";
import "./style.css";

const content = document.querySelector("#content");

const navigation = document.querySelector("nav");

loadHome();

navigation.addEventListener("click", (e) => {
    if (!e.target.id) return;
    unload();
    
    if (e.target.id === "home") loadHome();
    else if (e.target.id === "menu") loadMenu();
})

function loadHome() {
  temp.char.src = seam;
  temp.shopBg.src = seamBg;

  temp.bg.appendChild(temp.char);
  temp.bg.appendChild(temp.shopBg);


  temp.greet.innerHTML = `<p>* Hee hee... Welcome, travellers.</p>
                        <p>* Take your time... Ain't like it's better spent.</p>`;


  const diagBox = temp.dialogue.cloneNode();
  diagBox.innerHTML = `<p>* Greetings, the name's Seam, pronounced "Shawn", and this is the most famous restaurant in all of Dark Worlds.</p>
                     <p>* We have a lot of stuff here... not that any of it matters.</p>
                     <p>* Look around, and you may find something of your interest... or even more...</p>
                     <p>* We also give 50% discounts in case of any purple monster attack.</p>
                     <p class="comment"><img src="${susie}" class="comment-portrait">* Are they talking about me?</p>`;

  temp.main.appendChild(diagBox);
  
  
  content.appendChild(temp.bg);
  content.appendChild(temp.greet);
  content.appendChild(temp.main);
}

function unload() {
    content.textContent = "";
    for (let elem of Object.values(temp)) {
        elem.textContent = "";
    }
}