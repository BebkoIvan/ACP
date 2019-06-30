import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.pug',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() categories: Array<any>;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  selectCategory(category: any) {
    this.categories.forEach(el => el.isActive = false);
    category.isActive = true;
    if (category.name === 'All') {
      this.router.navigate([''], {
        queryParams: {category: null}
    });
    return;
    }
    this.router.navigate([''], {
      queryParams: {category: category.name}
  });

  }
}
