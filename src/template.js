const bg = document.createElement("div");
bg.setAttribute("id", "background");

const char = document.createElement("img");
char.setAttribute("id", "character");

const shopBg = document.createElement("img");
shopBg.setAttribute("id", "bg");


const greet = document.createElement("div");
greet.setAttribute("id", "greeting");


const main = document.createElement("div");
main.setAttribute("id", "main");


const dialogue = document.createElement("div");
dialogue.setAttribute("class", "dialogue-box");

const portrait = document.createElement("img");
portrait.setAttribute("class", "portrait");

const comment = document.createElement("p");
comment.setAttribute("class", "comment");

const commentPortrait = document.createElement("img");
commentPortrait.setAttribute("class", "comment-portrait");

export { bg, char, shopBg, greet, main, dialogue, portrait, comment, commentPortrait }