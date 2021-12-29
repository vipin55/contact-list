import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ContactListService } from '../service/contact-list.service';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {
  contactList: User[] = [];
  userForm: any;
  isNewUser: any;
  newUser: any = {};
  editUserForm: any;
  editedUser: any = {};

  constructor(private contactListService: ContactListService) { }

  ngOnInit(): void {
    this.contactList = this.getUsers();
  }
  // API call made
  // getBooks(): void {
  //   this.contactList = this.contactListService.getContactList().subscribe((data: any) => {
  //     this.contactList = data;
  //   })

  getUsers(): User[] {
    return this.contactListService.getUsersFromData();
  }

  showEditUserForm(user: User) {
    if (!user) {
      this.userForm = false;
      return;
    }
    this.editUserForm = true;
    this.editedUser = user;
  }

  showAddUserForm() {
    // resets form if edited user
    if (this.contactList.length) {
      this.newUser = {};
    }
    this.userForm = true;
    this.isNewUser = true;

  }

  saveUser(user: User) {
    if (this.isNewUser) {
      // add a new user
      this.contactListService.addUser(user);
    }
    this.userForm = false;
  }

  updateUser() {
    this.contactListService.updateUser(this.editedUser);
    this.editUserForm = false;
    this.editedUser = {};
  }

  removeUser(user: User) {
    this.contactListService.deleteUser(user);
  }

  cancelEdits() {
    this.editedUser = {};
    this.editUserForm = false;
  }

  cancelNewUser() {
    this.newUser = {};
    this.userForm = false;
  }

}
