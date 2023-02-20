import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public titleSubject = new Subject<string>();
  public userName = {
    name: ""
  };
  constructor() { }
}
