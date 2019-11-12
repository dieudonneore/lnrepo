import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskdetailsComponent} from './taskdetails/taskdetails.component';
import {NotfoundpageComponent} from './notfoundpage/notfoundpage.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'details',  component: TaskdetailsComponent},
  { path: 'notfound', component: NotfoundpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TaskdetailsComponent, NotfoundpageComponent, HomeComponent ];
