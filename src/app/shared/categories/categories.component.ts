import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.pug',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() categories:string[];

  constructor() { }

  ngOnInit() {
  }

}
