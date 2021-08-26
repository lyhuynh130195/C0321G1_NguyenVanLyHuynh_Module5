import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService,
             private activatedRoute: ActivatedRoute,
            private router: Router) {
    const id = Number(activatedRoute.snapshot.params.id);
    this.product = productService.findProductById(id);
  }

  ngOnInit(): void {
  }

  onDelete() {
    this.productService.removeProduct(this.product);
    this.router.navigateByUrl("");
  }

}
