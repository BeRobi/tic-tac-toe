import Elem from "./Elem.js";

$(function () {
  const szuloElem = $("article");
  let lepes = 0;

  for (let index = 0; index < 9; index++) {
    const elem = new Elem(szuloElem, index);
  }

  // ő vezérli a játékot
  // ő látja a 9 elemet
  // ő látja hányadik lépésnél tartunk
  // ő tudja megmondani ki következik
  // mikor kell növelni a számlálót?
  // amikor rákattintottunk egy elemre
  // feliratkozunk egy saját eseményre

  $(window).on("elemKattintas", function (event) {
    console.log(event.detail);
    const aktElem = event.detail;
    if (lepes % 2 == 0){
    aktElem.setElem("X");
}else {
    aktElem.setElem("O");
}
lepes ++;
    ;
  });
});
