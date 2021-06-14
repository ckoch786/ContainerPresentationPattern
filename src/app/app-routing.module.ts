import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';


const routes: Routes = 
[
  { path: 'presentation', component: PresentationComponent },
  { path: 'container', component: ContainerComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
