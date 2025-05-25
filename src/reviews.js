import * as temp from "./template.js";
import rouxls from "./images/rouxls.png";

function loadReviews() {
  temp.shopBg.src = rouxls;
  temp.char.src = "";

  temp.bg.appendChild(temp.char);
  temp.bg.appendChild(temp.shopBg);

  temp.greet.innerHTML = `<p>* Welcome to my shop, you ungrateful worms.</p>
                          <p>* What is thine Intereste</p>`;

  const diagBox = temp.dialogue.cloneNode();
  diagBox.innerHTML = `<p>* I amst the Duke of Puzzles, Rouxls Kaard.</p>
                       <p>* (Pronounced "Rules")</p>
                       <p>* As such, i hath The highest rank in this hierarchy... The delivery Man.</p>
                       <p>* These here art The gracious-est souls who took their time-th to grant this establishment a Good rating.</p>
                       <p class="comment"><img class="comment-portrait">* That may or may not have been coerced.</p>`;

  temp.main.appendChild(diagBox);

  const item1 = temp.dialogue.cloneNode();
  item1.innerHTML =
    "<p>...</p> <p class='by'>- The Hero of the prophecy</p>";

  const item2 = temp.dialogue.cloneNode();
  item2.innerHTML =
    "<p>This place is horrible and I would never come back</p> <p class='comment'>* Can I get my free cashews now?</p> <p class='by'>- A talking, giant hamster</p>";

  const item3 = temp.dialogue.cloneNode();
  item3.innerHTML =
    "<p>I-I don't know how I got this dream twice, but it's nice...</p> <p class='comment'>* For some reason I got a discount by coming with Susie</p> <p class='by'>- Girl who can't spell December</p>";

  const item4 = temp.dialogue.cloneNode();
  item4.innerHTML =
    "<p>GOD DAMNIT IT KRIS, I'M NOT A PURPLE MONSTER</p> <p class='by'>- A Purple Monster</p>";

  const item5 = temp.dialogue.cloneNode();
  item5.innerHTML =
    "<p>This place-th is the worst-est Job I'th ever gotten-</p> <p class='comment'>* Don't you work here?</p> <p class='by'>- THE DUKE-TH OF PUZZLES</p>";

  const item6 = temp.dialogue.cloneNode();
  item6.innerHTML =
    "<p>Very enjoyable experience over all, would come back.</p> <p class='by'>- Wait, there's a sixth one?</p>";

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

export { loadReviews };
