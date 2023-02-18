import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import Children from 'src/model/Children';
import User from 'src/model/User';
import UserD from 'src/model/User';
import { ChildrenService } from 'src/service/children.service';
import { UserService } from 'src/service/user.service';
import { NgForm } from '@angular/forms';
import * as XLSX from 'xlsx';
import { Workbook } from 'exceljs';
import { saveAs} from 'file-saver'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
constructor(public useService:UserService,public childrenService:ChildrenService){}

  ngOnInit(): void {
    this.childrenService.getAllChildren().subscribe(succ=>{console.log(succ)});
    this.useService.getAllUser().subscribe(succ=>{console.log(succ)});
  }
myForm:Form;
user:User=new User(0,"","",new Date(),"","","");
children:Children=new Children("","",new Date(),0);
favoriteSeason: string;
flag=false;
myChildren:Children[]=[];
MyUser:User[]=[]
title = 'angular-app';
  fileName= 'ExcelSheet.xlsx';
  parentId: number = 0;
 
// save(){
//   // this.useService.addUser(this.useService.user).subscribe((x:any)=>{console.log(this.useService)})
//   this.useService.addUser(this.useService.user).subscribe(succ => {
//     this.parentId = succ.Id;

//     for (let i = 0; i < this.childrenService.TheChildren.length; i++) {
     
//       this.childrenService.TheChildren[i].ParentId = this.parentId;
//       this.childrenService.addChildren(this.childrenService.TheChildren[i]).subscribe(succ => { console.log(succ) })
//     }

//   });



  save() {
    if(this.flag==true)
   {
     this.children.ParentId=Number(this.user.Tz);
   
  }
  this.childrenService.addChildren(this.children).subscribe((succ) => {
alert("good")
  }
    , (err) => {
      console.log("err");
    });
  this.useService.addUser(this.user).subscribe((succ) => {
    localStorage.setItem('user', JSON.stringify(this.user));
  
    localStorage.setItem('user', JSON.stringify(succ));
  alert(JSON.parse(localStorage.getItem('user')).Id)

  }
    , (err) => {
      console.log("err");
      localStorage.setItem('user', JSON.stringify(this.user));
    });
    this.childrenService.children;
};


addChild(){
  this.flag=true;
}
saveChildren() {
  this.children.ParentId=Number(this.user.Tz);
  this.childrenService.addChildren(this.children).subscribe((succ) => {

alert("good")
  }
    , (err) => {
      console.log("err");
    });
     this.children = new Children('', "", new Date(),0)

}
 
downLoadToExel() {
  this.childrenService.getAllChildren().subscribe(
    succ => {
      this.myChildren = succ
      console.log(this.myChildren)
      let usvString = "";
      this.myChildren.map(i => {
        usvString += JSON.stringify(i) + ",";
        usvString += "\n"
      }
      )
      usvString = "data:application/csv," + encodeURIComponent(usvString);
      let anchor = document.createElement("A");
      anchor.setAttribute("href", usvString);
      anchor.setAttribute("download", "somedata.csv");
      document.body.append(anchor)
      anchor.click()
    },
    
    err => {
      alert("Error receiving data")
      console.log(err)
    })
    this.useService.getAllUser().subscribe(
      succ => {
        this.MyUser = succ
        console.log(this.MyUser)
        let usvString = "";
        this.myChildren.map(i => {
          usvString += JSON.stringify(i) + ",";
          usvString += "\n"
        }
        )
        usvString = "data:application/csv," + encodeURIComponent(usvString);
        let anchor = document.createElement("A");
        anchor.setAttribute("href", usvString);
        anchor.setAttribute("download", "somedata.csv");
        document.body.append(anchor)
        anchor.click()
      },
      err => {
        alert("Error receiving data")
        console.log(err)})
}
// exportexcel(): void

// {
//   let element = document.getElementById('excel-table');
//   const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

//   const wb: XLSX.WorkBook = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

//   XLSX.writeFile(wb, this.fileName);

// }
}