import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.pug',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  arra: Array<number> = [1,2,3];
  range: Array<number> = [3,7];
  
  constructor() { }

  ngOnInit() {
  }

}
