import { Injectable } from '@angular/core';
import User from 'src/model/User';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser=new BehaviorSubject<{name:string}>(null);
  
  user: User = new User(0,"", "", new Date(), "", "", "");
  baseRouteUrl = `${environment.baseUrl}/user`;
  constructor(public http: HttpClient) { }

  setInStorage(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }
  getFromStorage() {
    let u = localStorage.getItem("currentUser");
    if (!u)
      return null;
    return JSON.parse(u);
  }
  removeFromStorage() {
    localStorage.removeItem("currentUser");
  }
  addUser(user: User) {
    return this.http.post<User>(this.baseRouteUrl, user)
  }


  getAllUser() {
    return this.http.get<User[]>(`${this.baseRouteUrl}`)
  }
}
