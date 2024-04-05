export default class Pizza {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    
  
    constructor(
      id: number,
      name: string,
      description: string,
      price: number,
      image: string,
          ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.image = image;
      
    }
  }