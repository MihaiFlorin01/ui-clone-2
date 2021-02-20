import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WebsiteListComponent} from "./components/employees/list/website-list.component";
import {CreateWebsiteComponent} from "./components/employees/create/create-website.component";
import {UpdateWebsiteComponent} from "./components/employees/update/update-website.component";
import {WebsiteDetailsComponent} from "./components/employees/details/website-details.component";


const routes: Routes = [
  {path: 'websites', component: WebsiteListComponent},
  {path: 'create-website', component: CreateWebsiteComponent},
  {path: '', redirectTo: 'websites', pathMatch: 'full' },
  {path: 'update/:id', component: UpdateWebsiteComponent},
  {path: 'details/:id', component: WebsiteDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
