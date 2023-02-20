import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {UtilsService} from "./components/utils.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular app assignment';
  constructor(private titleService: Title, private utilsService: UtilsService) {
    utilsService.titleSubject.subscribe((res)=>{
      res && this.setDocTitleOnRouteChange(res);
    });
  }

  ngOnInit() {
    this.setDocTitleOnRouteChange(this.title);
  }
  displayTitle(name: any)
  {
    this.setDocTitleOnRouteChange(name);
  }
  setDocTitleOnRouteChange(title: string) {
    this.titleService.setTitle(title);
  }
}
