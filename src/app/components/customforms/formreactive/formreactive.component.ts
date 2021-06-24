import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { data } from 'jquery';

import { User } from 'src/app/interfaces/user';
import { Validations } from 'src/app/util/validations';

@Component({
  selector: 'app-formreactive',
  templateUrl: './formreactive.component.html',
  styleUrls: ['./formreactive.component.css']
})
export class FormreactiveComponent implements OnInit {

  public form: FormGroup;
  public userData: User;

  constructor(private fbuilder: FormBuilder) {
    this.userData = {id: 0, code: '', name: '', surname: ''};
    this.form = fbuilder.group({
      code: [
              this.userData.code, 
              Validators.compose([
                                  Validators.required,
                                  Validators.maxLength(5),
                                ])
            ],
      name: [
              this.userData.name, 
              Validators.compose([
                                  Validators.required,
                                  Validators.minLength(5),
                                  Validators.maxLength(25),
                                  Validations.filtrarCaracteres // Custom validation
                                ])
      ]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userData.code = this.form.controls['code'].value;
    this.userData.name = this.form.controls.name.value;
    console.info(this.userData);
    localStorage.setItem('user', JSON.stringify(this.userData));
    this.form.reset();
  }

  loadData(): void {
    let dataUserLS = localStorage.getItem('user');
    console.log(dataUserLS);
    if (dataUserLS) {
      let dataUser = JSON.parse(dataUserLS);
      this.form.patchValue({code: dataUser.code});
      this.form.patchValue({name: dataUser.name});
    }
    localStorage.clear();
  }

  get existUser() {
    let dataLS = localStorage.getItem('user'); // NULL or {}
    if (dataLS) dataLS = JSON.parse(dataLS);
    return dataLS;
  }
}