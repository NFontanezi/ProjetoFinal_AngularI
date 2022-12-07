import { ContactFormData } from './../../models/contact-form-data.models';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  @Output() public sendForm: EventEmitter<ContactFormData> = new EventEmitter<ContactFormData>();

  public formData: ContactFormData = {
    name: "",
    email: "",
    reason: "",
    message: ""
  };

  ngOnInit() {

  }

  public submitForm(): void {
    this.sendForm.emit(this.formData);
  }

}
