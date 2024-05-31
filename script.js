const container = document.getElementById("container");

async function createElem(val) {
  let sc = document.createElement("p");
  sc.innerHTML = val;
  container.appendChild(sc);
}

async function setData() {
  setTimeout(() => {
    createElem("Initializing Hacking<span class='dots'></span>");
  }, 0);
  setTimeout(() => {
    createElem("Reading your Files<span class='dots'></span>");
  }, 3000);
  setTimeout(() => {
    createElem("Password files Detected<span class='dots'></span>");
  }, 6000);
  setTimeout(() => {
    createElem(
      "Sending all passwords and personal files to server<span class='dots'></span>"
    );
  }, 9000);
  setTimeout(() => {
    createElem("Cleaning up<span class='dots'></span>");
  }, 12000);
}

setData();
