import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { InstructionsComponent } from './components/instructions/instructions.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "form", component: FormComponent },
  { path: "instructions", component: InstructionsComponent },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

