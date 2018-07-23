import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tool-box',
  templateUrl: './tool-box.component.html',
  styleUrls: ['./tool-box.component.css']
})
export class ToolBoxComponent implements OnInit {

  @Output() sortSearchClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  SearchClick(Value) {
   
    this.sortSearchClick.emit(Value);


  }

}
