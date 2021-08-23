import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit 
{
  //access string from Parent
  @Input() public parentData : string = "";

  //Access Array of number from Parent
  @Input() public parentArrData : number[] = [];

  //Access Array of string from Parent
  @Input() public parentArrStrData : string[] = [];

  //Access flag from Parent
  @Input() public parentDataFlag : boolean = false;

  //Paasing Data to Parent
  @Output() public myEvent = new EventEmitter();  

  public myClass1 : string = "Success";

  
  //Passing data to Parent
  public sendData(value : string)
  {
    this.myEvent.emit(value);
  }

  constructor(){ }

  ngOnInit(): void {
  }

}
