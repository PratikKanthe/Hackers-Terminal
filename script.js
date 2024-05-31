let container = document.getElementById("container");

async function start() {
  let sc = await document.createElement("p");
  sc.innerHTML = "Start";
  container.appendChild(sc);
}
start();
