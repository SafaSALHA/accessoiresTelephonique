export class Products {
  id: number;
  name: string;
  src: string;
  prix: number;


  constructor(id: number, name: string, src: string, prix: number) {
    this.id = id;
    this.name = name;
    this.src = src;
    this.prix = prix;
  }
}
