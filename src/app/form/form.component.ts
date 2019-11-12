import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  registrationforms = this.fb.group(
    {
      name: ['', Validators.required],
      email: ['', Validators.required],
      Guestemail: ['', Validators.required],
      Phonenumber: ['', Validators.required],
      skill: ['', Validators.required]
    }
  );

  show = false;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
  }

  showhide() {
    this.show = true;
  }

}
