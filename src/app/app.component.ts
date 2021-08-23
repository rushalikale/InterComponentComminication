import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public str : string = "Hello Child";
  public arrData : number[] = [1,2,3,4];
  public arrStrData : string[] = ["PPA","Logic Building","Angular with Mean Stack","Python"];
  public Message : string = "";
  public IsSet : boolean = true;
}
