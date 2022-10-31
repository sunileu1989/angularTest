import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registartion',
  templateUrl: './registartion.component.html',
  styleUrls: ['./registartion.component.scss']
})
export class RegistartionComponent implements OnInit {
  formGroup!: FormGroup;
  fieldRequired: string = 'This field is required';
  post: any = '';
  roles: any[] = ['Admin', 'Manager', 'HR', 'Developer'];
  constructor(private formBuilder: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.createForm()
  }
 
  createForm() {
    this.formGroup = this.formBuilder.group({
      'name': [null, Validators.required],
      'address': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'dob': [null, [Validators.required]],
      'role': [null, [Validators.required]],
      'phone': new FormArray([new FormControl(null, Validators.required) ]),
      'gender': ['Male', [Validators.required]]
    });
  }

  onSubmit() {
    if (!this.formGroup.valid) {
      return
    }

    let data = [];
    let employeelist: any = localStorage.getItem('Employee_Details');  
    if(JSON.parse(employeelist) && JSON.parse(employeelist).length > 0) {
      data = JSON.parse(employeelist);
    }
    
    data.push(this.formGroup.value)
    localStorage.setItem('Employee_Details', JSON.stringify(data));
    this.router.navigateByUrl('Home');  
  }

  addContactNo(){
    (this.formGroup.get('phone') as FormArray).push(new FormControl(null, Validators.required));
  }

  getControls () {
    return (this.formGroup.get('phone') as FormArray).controls;
  }
}
