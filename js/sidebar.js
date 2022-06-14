function collapseSideBar() {
  var sideBar = document.getElementById("sideBar");
  var icon = document.getElementById("doubleArrowIcon");
  if (sideBar.classList.contains("collapseSideBar") === false) {
      sideBar.classList.add("collapseSideBar");
      icon.classList.remove("fa-angle-double-right");
      icon.classList.add("fa-angle-double-left");
  } else {
      sideBar.classList.remove("collapseSideBar");
      icon.classList.remove("fa-angle-double-left");
      icon.classList.add("fa-angle-double-right");
  }

//   if (sideBar.style.right == 0) {
//     sideBar.style.right = "-90px";
//     icon.classList.remove("fa-angle-double-right");
//     icon.classList.add("fa-angle-double-left");
//     console.log(sideBar.style.right);
//   } else {
//     sideBar.style.right = "0";
//     icon.classList.remove("fa-angle-double-left");
//     icon.classList.add("fa-angle-double-right");
//     console.log(sideBar.style.right);
//   }
}
