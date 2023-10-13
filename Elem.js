class Elem {
  constructor(szuloElem) {
    szuloElem.append("<div class='elem'><p></p></div>");

    this.divElem = $("article div");

    this.pElem = $("article div p");

    this.divElem.on("click", () => {
      this.setElem("X");
      console.log(this);
    });
  }

  setElem(adat) {
    this.pElem.html(adat);
  }
}

export default Elem;
