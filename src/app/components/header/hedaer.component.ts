import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UtilsService} from "../utils.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public loggedInUserName: any;
  constructor(private utilsService: UtilsService) {

  }
  setDocTitleOnRouteChange(title: string)
  {
    this.utilsService.titleSubject.next(title);
  }

  ngOnInit(): void {
    this.setDocTitleOnRouteChange("Home");
    this.loggedInUserName =  this.utilsService.userName?.name
  }


  ngAfterViewInit(): void {

  }
}
