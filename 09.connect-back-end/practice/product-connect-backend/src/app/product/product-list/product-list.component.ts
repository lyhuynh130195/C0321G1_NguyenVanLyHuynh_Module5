import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: Map<number, Category>;

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAllCategory()
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(value => {
      this.categories = new Map(value.map(category => [category.id, category]));
      this.productService.getAll().subscribe(value => {
        this.products = value;
      })
    })
  }

}
