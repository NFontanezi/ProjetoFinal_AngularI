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
  public msgMaxLength = 400;

  public formData: ContactFormData = {
    name: "",
    email: "",
    motive: "",
    message: ""
  };
  public motivesContact: string[]= [
    "Dúvida",
    "Reclamação",
    "Sugestão",
    "Elogio"
  ]

  ngOnInit() {
    this.buildForm();
    this.setFormSubscription();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null,[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)]),
      email: new FormControl(null,[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]),
      motive: new FormControl(null,[
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)]),
      message: new FormControl(null,[
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(this.msgMaxLength)]),
    })
  }

  public submitForm(): void {
    this.formData = this.form.getRawValue();
    console.log(this.formData)
    alert("Formulário enviado com sucesso!")
    this.form.reset()
  }

  private setFormSubscription(): void {
    this.form.valueChanges
    .subscribe(
      () => {
        console.log(this.form)
      }
    )
  }


  public isInvalid (item: string) {
   return this.form.controls[item].errors && this.form.controls[item].touched
  }


}
