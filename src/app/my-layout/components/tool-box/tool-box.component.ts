import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-box',
  templateUrl: './tool-box.component.html',
  styleUrls: ['./tool-box.component.css']
})
export class ToolBoxComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }

  ValueToConcole(Value) {
    console.log(Value);
  }

}
