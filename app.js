let list = document
  .querySelector(".container")
  .addEventListener("click", message);
document.querySelector(".container").style.height = "20rem";
document.querySelector(".container").style.width = "42rem";
document.querySelector(".container").style.textAlign = "center";
document.querySelector(".container").style.textAlign = "center";
document.querySelector(".container").style.lineHeight = "20rem";
document.querySelector(".container").style.marginInline = "auto";
document.querySelector(".container").style.background = "gray";
document.querySelector(".container").style.color = "white";

function message(e) {
  val = e.clientX;
  val = e.clientY;

  this.val;
  this.style.background = `#${e.offsetX}`;
  console.log(val);
  console.log((this.style.background = `#${e.clientX}`));
  document.querySelector("#text").innerHTML = "RGB code :- " + "#" + e.offsetX;
}

document.querySelector(".hex").style.height = "8rem";
document.querySelector(".hex").style.lineHeight = "8rem";
document.querySelector(".hex").style.width = "42rem";
document.querySelector(".hex").style.background = "Blue";
document.querySelector(".hex").style.marginInline = "auto";
document.querySelector(".hex").style.marginTop = "2rem";

document.querySelector("#text").style.color = "white";
document.querySelector("#text").style.textAlign = "center";
