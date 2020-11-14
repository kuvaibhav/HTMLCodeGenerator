import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'html-generator';
  sampleForm: FormGroup;
  MOCK_DATA = [
    {
      id: '5efceffdsf',
      objectName: 'obj1',
      projectId: '3e848bheg728',
      sourceType: 'DDL',
      fields: [
        {
          keyName: 'dob',
          dropdownValue: 'date'
        },
        {
          keyName: 'name',
          dropdownValue: 'varchar'
        },
        {
          keyName: 'age',
          dropdownValue: 'int'
        }
      ]
    },
    {
      id: '5efceffdsf',
      objectName: 'obj1',
      projectId: '3e848bheg728',
      sourceType: 'DDL',
      fields: [
        {
          keyName: 'dob',
          dropdownValue: 'date'
        },
        {
          keyName: 'name',
          dropdownValue: 'varchar'
        },
        {
          keyName: 'age',
          dropdownValue: 'int'
        },
        {
          keyName: 'address',
          dropdownValue: 'varchar'
        },
      ]
    }
  ]

  ngOnInit() {
    this.sampleForm = new FormGroup({});
    this.initializeDDLForm();
  }

  initializeDDLForm() {
    this.MOCK_DATA.forEach((domainObject, index) => {
      let objectForm = new FormGroup({
        objectId: new FormControl(domainObject.id),
        projectId: new FormControl(domainObject.projectId),
        objectName: new FormControl(domainObject.objectName),
        sourceType: new FormControl(domainObject.sourceType),
        fields: new FormArray([])
      });
      let fields = objectForm.get('fields') as FormArray;
      domainObject.fields.forEach((field, index) => {
        let fieldForm = new FormGroup({
          keyName: new FormControl(field.keyName),
          dropdownValue: new FormControl(field.dropdownValue)
        });
        fields.push(fieldForm);
      })
      this.sampleForm.addControl(String(index), objectForm);
    });
    console.log(this.sampleForm);
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

}
