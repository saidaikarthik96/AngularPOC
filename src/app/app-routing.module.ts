import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from'./material.module';
import { AppComponent } from './app.component';
const routes: Routes = [
 {path:'home',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),MaterialModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
