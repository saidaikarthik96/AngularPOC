import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from'./material.module';
import { AppComponent } from './app.component';
 
const routes: Routes = [
 {path:'home',component:AppComponent},
 {path:'crud', loadChildren:()=>import('./crud/crud.module').then(m=>m.CrudModule)},
 {path:'deepdive', loadChildren:()=>import('./componentDeepdive/deepDive.module').then(m=>m.deepDiveModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),MaterialModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
