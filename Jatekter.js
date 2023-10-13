import Elem from "./Elem.js";

class Jatekter {
  #lepes;
#lista = [];
  constructor() {
    this.#lepes = 0;
    this.#lista = ["","","","","","","","",""]
    const szuloElem = $("article");
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

    $(window).on("elemKattintas", (event) => {
      console.log(event.detail);
      let aktElem = event.detail;
      if (this.#lepes % 2 == 0) {
        aktElem.setElem("X");
        this.#lista[aktElem.getIndex()]= "X"
      } else {
        aktElem.setElem("O");
        this.#lista[aktElem.getIndex()]= "O"
      }
      this.#lepes++;
      this.ellenorzes()
    });
    
  }
  ellenorzes(){

  }
}
export default Jatekter;
