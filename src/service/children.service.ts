import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Children from 'src/model/Children';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {
 public children: Children = new Children("", "", new Date(), 0);
   public myChildren: Children[] = [];
  baseRouteUrl = `${environment.baseUrl}/children`;

  constructor(public http: HttpClient) { }
  TheChildren: Children[] = [];

  addChildren(children: Children) {
    return this.http.post<Children>(this.baseRouteUrl,children
   //  name: children.Name,
  // "childTz": children.ChildTz,
 // "birthDate": children.BirthDate,  
 //   "parentId": children.ParentId
    )
  }

  getAllChildren() {
    return this.http.get<Children[]>(`${this.baseRouteUrl}`)
  }
}


