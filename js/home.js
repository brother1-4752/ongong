// const get_title = () => {
//   const description = document.querySelectorAll(".description");
//   for (let index = 0; index < description.length; index++) {
//     const title =
//       description[index].parentNode.childNodes[1].childNodes[1].textContent;
//     const time =
//       description[index].parentNode.childNodes[1].childNodes[3].textContent;
//     description[index].addEventListener("click", (e) => {
//       time_splice = time.substr(0, time.length - 2).substring(1);
//       console.log(title, time_splice);
//       function setChildValue(title, time_splice) {
//         window.location.href = `detail.html?title=${title}&time=${time_splice}`;
//       }
//     });
//   }
// };

const current_join_number = document.querySelectorAll(".title div");
const enter_btn = document.querySelectorAll(".enter");

function handleEnter(e) {
  alert("정원이 다 찼습니다");
  e.preventDefault();
}

enter_btn[0].addEventListener("click", handleEnter);

function init() {}

init();
