export class Email {
  public email : string;
  constructor(email : string){
      if(this.validateEmail(email)) {
        this.email = email;
      }
      else {
          throw new Error("Invalid email!");
      }        
  }
  validateEmail(email : string) {
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(email);
  }
}


export class Person {
  name : string;
  surname : string;
  email : Email;
  friends: any[];
 
  constructor(name: string, surname: string, email : Email){
      this.email = email;
      this.name = name;
      this.surname = surname;
  }
  greet() {
      alert(`Hi! I am ${this.name}`);
  }
}
