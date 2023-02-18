import { Component } from '@angular/core';
import { UserService } from 'src/service/user.service';
import User from 'src/model/User';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent {
constructor(public useService:UserService){}

user:User=new User(0,"","",new Date(),"","","");



}
