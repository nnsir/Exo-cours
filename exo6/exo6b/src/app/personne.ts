export class Personne {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  company: string;

  constructor(id: number, name: string, username: string, email: string, phone: string, website: string, address: string, company: string) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.website = website;
    this.address = address;
    this.company = company;
  }
}
