const h2 = document.createElement("h2");
h2.textContent = "Welcome to my portfolio";

const flow = document.getElementById("container");
flow.insertBefore(h2, flow.children[0]);

