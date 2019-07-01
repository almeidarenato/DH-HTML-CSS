window.onload = () => {
  var header = document.querySelector("header");
  var divUm = document.querySelector("#content-um");
  var divDois = document.querySelector("#content-dois");
  var divTres = document.querySelector("#content-tres");
  var footer = document.querySelector("footer");

  header.addEventListener("mouseover", () => {
    header.style.backgroundColor = "blue";
    header.style.transition = "all 0.2s ease-in-out";
    header.style.color = "white";
  });
  header.addEventListener("mouseout", () => {
    header.style.backgroundColor = "red";
    header.style.transition = "all 0.2s ease-in-out";
    header.style.color = "black";
  });

  divUm.addEventListener("mouseover", () => {
    divUm.classList.remove("col-6");
    divUm.classList.add("col-12");
    divUm.style.transition = "all 1s";
    divDois.style.opacity = "0";
  });

  divUm.addEventListener("mouseout", () => {
    divUm.classList.remove("col-12");
    divUm.classList.add("col-6");
    divUm.style.transition = "all 1s";
    setTimeout(() => {
      divDois.style.opacity = "1";
    }, 1500);
  });
};
