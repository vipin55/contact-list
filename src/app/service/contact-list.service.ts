import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {

  private upersons: User[] = [
    {
      id: 1,
      firstName: "Amit",
      lastName: "Roy",
      phone: 9876543210,
    },
    {
      id: 2,
      firstName: "Aakash",
      lastName: "Choudhury",
      phone: 9876584431,
    },
    {
      id: 3,
      firstName: "Arun",
      lastName: "Dey",
      phone: 5748493812,
    },
    {
      id: 4,
      firstName: "Vikash",
      lastName: "Trivedi",
      phone: 9873625261,
    },
    {
      id: 5,
      firstName: "Gaurav",
      lastName: "Gupta",
      phone: 7002873284,
    }
  ]

  constructor() { } 

  // api call
  // constructor(private http: HttpClient) { }
  // public getContactList() {
  //   return this.http
  //     .get('https://fakerestapi.azurewebsites.net/api/v1/Books');
  // }


  getUsersFromData(): User[] {
    return this.upersons;
  }

  addUser(user: User) {
    user.id = this.upersons.length + 1;
    this.upersons.push(user);

  }
  updateUser(user: User) {
    const index = this.upersons.findIndex(u => user.id === u.id);
    this.upersons[index] = user;
  }
  deleteUser(user: User) {
    this.upersons.splice(this.upersons.indexOf(user), 1);
  }
}
