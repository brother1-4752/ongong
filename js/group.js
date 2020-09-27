const zoom_btn = document.querySelector(".zoom");
const label_ID = document.querySelector(".label_ID");
const label_PW = document.querySelector(".label_PW");
const ID_CN = "ID";
const PW_CN = "PW";

function handleZoomDetail(e) {
  console.dir(e.target);
  const container = e.target.parentNode;
  const ID = document.createElement("div");
  const PW = document.createElement("div");
  const enter_zoom = document.querySelector(".enter_zoom");
  ID.classList.add(ID_CN);
  PW.classList.add(PW_CN);
  label_ID.appendChild(ID);
  label_PW.appendChild(PW);
  ID.textContent = "915 7580 2862";
  PW.textContent = "1234";
  label_ID.style.display = "flex";
  label_PW.style.display = "flex";
  enter_zoom.style.display = "flex";
}

zoom_btn.addEventListener("click", handleZoomDetail);
