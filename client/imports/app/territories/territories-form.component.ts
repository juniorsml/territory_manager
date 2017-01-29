import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import template from './territories-form.component.html';

@Component({
    selector: "ter-form",
    template
}) export class TerritoriesFormComponent implements OnInit {

    constructor(
        private formBuilder: FormBuilder
    ) { }

    //Variables;
    addForm: FormGroup;

    ngOnInit() {
        this.addForm = this.formBuilder.group({

            publisher: this.formBuilder.group({
              pubName: ['', Validators.required],
            }),
            houseHolder: this.formBuilder.group({
              hhName: ['', Validators.required],
              hhGender:['male',Validators.required],
              hhNationality : ['nigerien',Validators.required],
              hhPhone : [''],
              address :  this.formBuilder.group({
                  hhZipCode :[''],
                  hhAddress : []
              })
            }),
            hhObs:['']
          });
    }

    addAdress(): void {
        console.log(this.addForm.value);
    }

}
