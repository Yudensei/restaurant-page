import * as temp from "./template.js";
import swatch from "./swatch.png";
import swatchBg from "./swatch-bg.png";



const content = document.querySelector("#content");

function loadMenu() {
    temp.char.src = swatch;
    temp.shopBg.src = swatchBg;
  
    temp.bg.appendChild(temp.char);
    temp.bg.appendChild(temp.shopBg);
  
  
    temp.greet.innerHTML = `<p>* Welcome to the Color Cafe. Let us warm your day.</p>
                          <p>* Don't be blue. We're here for you.</p>`;
  
  
    const diagBox = temp.dialogue.cloneNode();
    diagBox.innerHTML = `<p>* I am Swatch, Our Lady Grace's head butler.</p>
                       <p>* This restaurant is funded by our dear Queen, so me and my staff are still attending to her needs.</p>
                       <p>* Feel free to look around and pick what you like, it'll be our delight to serve you.</p>`;
  
    temp.main.appendChild(diagBox);

    const item1 =  temp.dialogue.cloneNode();
    item1.innerHTML = "<h1>Dark Candy</h1> <p>A red-and-black star that tastes like marshmallows.</p>";

    const item2 = temp.dialogue.cloneNode();
    item2.innerHTML = "<h1>Darkbuger</h1> <p>A mysterious black burger made of... Hey, this is just burnt!</p>";

    const item3 = temp.dialogue.cloneNode();
    item3.innerHTML = "<h1>CD Bagel</h1> <p>A bagel with a reflective inside. Makes music with each bite.</p>";

    const item4 = temp.dialogue.cloneNode();
    item4.innerHTML = "<h1>DD Burger</h1> <p>It's the Double-Dark-Burger. It'll take two bites to finish!</p>";

    const item5 = temp.dialogue.cloneNode();
    item5.innerHTML = "<h1>Spaghetti Code</h1> <p>Spaghetti woven by master coders, made of macarons and ribbons.</p>";

    const item6 = temp.dialogue.cloneNode();
    item6.innerHTML = "<h1>Java Cookie</h1> <p>A coffee-and-chocolate flavored cookie. Words spark out when you bite it.</p>";

    
    temp.main.appendChild(item1);
    temp.main.appendChild(item2);
    temp.main.appendChild(item3);
    temp.main.appendChild(item4);
    temp.main.appendChild(item5);
    temp.main.appendChild(item6);

    content.appendChild(temp.bg);
    content.appendChild(temp.greet);
    content.appendChild(temp.main);
}

export { loadMenu }