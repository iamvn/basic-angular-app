import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UtilsService} from "../../components/utils.service";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit{
  public loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private route: Router, private dataService: UtilsService) {
    this.loginForm = this.formBuilder.group(
      {
        "loginName": ["", Validators.required]
      }
    )
  }

  login(loginForm: FormGroup)
  {
    if(loginForm.valid)
    {
      this.dataService.userName  = {
        name: loginForm.controls['loginName'].value
      };
     this.route.navigateByUrl('main-component/home');
    }
  }

  ngOnInit(): void {
    this.dataService.titleSubject.next("Login");
  }

}
