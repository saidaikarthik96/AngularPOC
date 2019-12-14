import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { Routes,RouterModule} from '@angular/router';
import { MaterialModule } from'../material.module';
import { EntryComponent } from './entry/entry.component';


const routes: Routes = [
  {path:'table',component:TableComponent},
  {path:'form',component:EntryComponent}
 ];

@NgModule({
  declarations: [TableComponent, EntryComponent],
  imports: [RouterModule.forChild(routes),MaterialModule,
    CommonModule
  ]
})
export class CrudModule { }
