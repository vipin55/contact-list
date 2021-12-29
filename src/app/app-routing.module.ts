import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneBookComponent } from './phone-book/phone-book.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'phone', component: PhoneBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
