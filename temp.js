

class Entry {
  constructor(name, comment, cite){
    this.name = name;
    this.comment = comment;
    this.cite = cite;
  }

  display(){
    console.log(`${this.name}`);
    console.log(`${this.comment}`);
    console.log(`${this.cite}`);
  }
}

let ent1 = new Entry("Roe V. Wade", "Got a hot take on this one.", "xr.14.circuit42")
ent1.display()
