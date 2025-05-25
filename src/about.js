import * as temp from "./template.js";
import spamton from "./images/spamton.png";
import spamtonBg from "./images/spamton-bg.png";
import spamtonGlitch from "./images/spamton-glitch.png";

const content = document.querySelector("#content");

function loadAbout() {
    temp.char.src = spamton;
    temp.shopBg.src = spamtonBg;
  
    temp.bg.appendChild(temp.char);
    temp.bg.appendChild(temp.shopBg);
  
  
    temp.greet.innerHTML = `<p>* HEY EVERY       ! IT'S ME, SPAMTON G.   SPAMTON! </p>
                            <p>* DEALS SO GOOD I'LL [$!$$] MYSELF!</p>`;
  
  
    const diagBox = temp.dialogue.cloneNode();
    diagBox.innerHTML = `<p>* WELCOME TO OUR [Gameshow Host]'S PAGE, WHERE YOU CAN GET [tactical advantage] ON THESE [Little Sponges] FOR [no extra cost]</p>
                       <p>* THESE MAY NOT BE [100% guarantee] FUNCTIONAL, AS I'M JUST A [alone on a late night], BUT THEY MAY BE [entertaining] with [-100% guarantee].</p>
                       <p>* WHEN YOU'RE [finished], REMEMBER TO GIVE ME THAT SWEET [KROMER] BEFORE I GET [forgotten...].</p>`;
  
    temp.main.appendChild(diagBox);

    const item1 =  temp.dialogue.cloneNode();
    item1.innerHTML = "<h1>A... dog?</h1> <p>Well, this dog apparently is apparently the creator of everything used here, so thanks.</p>";

    const item2 = temp.dialogue.cloneNode();
    item2.innerHTML = "<h1>Q5U4EX7YY2E9N, Funder</h1> <p>(63) 87092317-7426532</p> <p>0plCJVv3YZBSpecCWLW7@1nCTGkT</p>";

    const item3 = temp.dialogue.cloneNode();
    item3.innerHTML = "<h1>Tenna, Advertiser</h1> <p>What do you mean I'm not out yet?</p>";

    const item4 = temp.dialogue.cloneNode();
    item4.innerHTML = "<h1>☝︎♋︎⬧︎⧫︎♏︎❒︎📪︎ ♎︎♋︎❒︎🙵</h1> <p>🕿︎⌛︎⌛︎✆︎ ⌛︎ ⌛︎⌛︎⌛︎⌛︎📫︎⌛︎⌛︎⌛︎</p> <p>❍︎♓︎⬧︎⧫︎♏︎❒︎📬︎♏︎📬︎⌛︎⌛︎⌛︎@❒︎♏︎♎︎♋︎♍︎⧫︎♏︎♎︎</p>";

    const item5 = temp.dialogue.cloneNode();
    item5.innerHTML = "<h1>mike...</h1>";
    item5.addEventListener("mouseover", () => {
        temp.char.src = spamtonGlitch;
        temp.greet.textContent = "mike..."
    })

    
    temp.main.appendChild(item1);
    temp.main.appendChild(item2);
    temp.main.appendChild(item3);
    temp.main.appendChild(item4);
    temp.main.appendChild(item5);

    content.appendChild(temp.bg);
    content.appendChild(temp.greet);
    content.appendChild(temp.main);
}

export { loadAbout }