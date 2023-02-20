import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showLabel:boolean = false;
  name: string = "Vinay Bharti";
  displayServerValue:string = "";
  public addServerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.addServerForm = this.formBuilder.group({
      'addServerForm': ['', Validators.required],
    });
  }
  hideAndShow()
  {
    this.showLabel = !this.showLabel;
  }

  addServer(form: FormGroup)
  {
    if(form.valid)
    {
      this.displayServerValue = form.controls['addServerForm'].value;
    }
  }
}
