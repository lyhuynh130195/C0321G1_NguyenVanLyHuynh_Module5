import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });
  product: Product

  constructor(private productService: ProductService,
             private activatedRoute: ActivatedRoute,
              private router: Router) {
    const id = Number(activatedRoute.snapshot.params.id);
    this.product = this.productService.findProductById(id);
    this.productForm.setValue(this.product);
  }

  ngOnInit(): void {
  }

  submit() {
    const product = this.productForm.value;
    this.productService.updateProduct(this.product,product);
    this.router.navigateByUrl("");
  }

}
