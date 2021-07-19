let form = document.querySelector("#form");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = document.querySelector("input").value;
  let list = document.createElement("li");
  input.value = " ";
  ul.append(list);
  list.innerHTML = `${value} <img src="delete.svg">`
  list.classList.add("remove");
  let removeBtn = list.querySelector("img");
  removeBtn.onclick = function(){
  list.remove();
  }
  list.onclick = function(){
  this.classList.toggle('completed');
  }
});
