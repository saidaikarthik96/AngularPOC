import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { state } from '@angular/animations';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  profileForm: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      address: [''],
      select: [''],
      city: [''],
      state: [''],
      zip: ['']
    });
    this.profileForm.patchValue({ state: 'TN', zip: 620023 });
  
  }
  onClick(){
    
   if (this.profileForm.value.state='TN') {
      this.profileForm.value.state='TamilNadu';
      this.profileForm.patchValue({ state: 'TamilNadu'});
     console.log(this.profileForm.value);
   }

  }
}
