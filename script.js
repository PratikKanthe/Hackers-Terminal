const container = document.getElementById("container");

const createElem = async (val) => {
  await randomDelay();
  let div = document.createElement("div");
  div.innerHTML = val;
  document.body.append(container);
};

const randomDelay = () => {
  return new Promise((resolve, reject) => {
    timeout = 1 + 6 * Math.random();
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};

async function main() {
  let time = setInterval(() => {
    let last = document.body.getElementsByTagName("div");
    last = last[last.length - 1];
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML = last.innerHTML + ".";
    }
  }, 100);

  let text = [
    "Initialized Hacking now reading your data",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up",
  ];

  for (const val of text) {
    await createElem(val);
  }

  await randomDelay();
  clearInterval(time);
}
main();

setData();
