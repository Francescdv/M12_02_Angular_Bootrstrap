import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  contactMe = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })

  });





  onSubmit(){
    // TODO: Use EventEmitter with form value
    console.warn(this.contactMe.value);
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {



  }

}
