import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    const id =Number( activatedRoute.snapshot.params.id);

    this.product = this.productService.findProductById(id);

  }

  ngOnInit(): void {
  }

}
