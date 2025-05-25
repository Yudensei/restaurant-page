import * as temp from "./template.js";
import seam from "./seam.png";
import seamBg from "./seam-bg.png";
import susie from "./susie_sweatdrop.png";
import "./style.css";

const content = document.querySelector("#content");

temp.char.src = seam;
temp.shopBg.src = seamBg;

temp.bg.appendChild(temp.char);
temp.bg.appendChild(temp.shopBg);

content.appendChild(temp.bg);


temp.greet.innerHTML = `<p>* Hee hee... Welcome, travellers.</p>
                        <p>* Take your time... Ain't like it's better spent.</p>`

content.appendChild(temp.greet);


const diagBox = temp.dialogue.cloneNode();
diagBox.innerHTML = `<p>* Greetings, the name's Seam, pronounced "Shawn", and this is the most famous restaurant in all of Dark Worlds.</p>
                     <p>* We have a lot of stuff here... not that any of it matters.</p>
                     <p>* Look around, and you may find something of your interest... or even more...</p>
                     <p>* We also give 50% discounts in case of any purple monster attack.</p>
                     <p class="comment"><img src="${susie}" class="comment-portrait">* Are they talking about me?</p>`

temp.main.appendChild(diagBox)
content.appendChild(temp.main)