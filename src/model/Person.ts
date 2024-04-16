
export class Person{
    id:number;
    firstName:string;
    lastName:string;
    phonenumber:string;
    password: string;
    address:string;
    rePassword:string;
     
    constructor(id:number,
        firstName:string,
        lastName:string,
        phonenumber:string,
        password: string,
        address:string,
        rePassword:string
        ){
            this.id=id;
            this.firstName=firstName;
            this.lastName=lastName;
            this.phonenumber=phonenumber;
            this.password=password;
            this.address=address;
            this.rePassword=rePassword;
            
        }
}