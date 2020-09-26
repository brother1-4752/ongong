const menus = document.querySelectorAll(".container");
const SHOWING_CN = "showing";
menu_typeList = [
  "/puzzle.html",
  "/home.html",
  "/grouplist.html",
  "/settings.html",
];

const selected_borderTop = () => {
  for (let index = 0; index < menus.length; index++) {
    const menu_type = menu_typeList[index];
    if (menus[index].baseURI.includes(menu_type)) {
      menus[index].classList.add(SHOWING_CN);
    }
  }
};

function init() {
  selected_borderTop();
}

init();
