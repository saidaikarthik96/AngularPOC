import{Component1Component} from './component1/component1.component';
import{Component2Component} from './component2/component2.component';
import{NgModule} from'@angular/core';
import{Routes,RouterModule} from'@angular/router';

const routes: Routes = [
    {path:'component1',component:Component1Component},
    // {path:'component2',component:Component2Component}
   ];
   @NgModule({
    declarations: [Component1Component,Component2Component],
    imports: [RouterModule.forChild(routes)]
  })
  export class deepDiveModule { }