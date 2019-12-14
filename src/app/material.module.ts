import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
imports:[MatCardModule,MatTableModule,MatButtonModule,ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatSelectModule],
exports:[MatCardModule,MatTableModule,MatButtonModule,ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatSelectModule]
})
export class MaterialModule {}