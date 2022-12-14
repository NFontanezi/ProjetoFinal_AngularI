import { ContactFormData } from './../../models/contact-form-data.models';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  @Output() public sendForm: EventEmitter<ContactFormData> = new EventEmitter<ContactFormData>();

  public form!: FormGroup;

  public formData: ContactFormData = {
    name: "",
    email: "",
    reason: "",
    message: ""
  };

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      name: new FormControl(this.formData.name,[Validators.required]),
      email: new FormControl(this.formData.email,[Validators.required]),
      motive: new FormControl(null,[Validators.required]),
      message: new FormControl(this.formData.message,[Validators.required])
    })
  }

  public submitForm(): void {
    this.formData = this.form.getRawValue();
    console.log(this.formData)
    alert("Formulário enviado com sucesso!")
  }

}
