import { AddProduct } from './../../../shared/state/app.actions';
import { ProductService } from 'src/app/shared/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  imgSrc: string | ArrayBuffer = '../../../../assets/images/image.png';

  constructor(private productService: ProductService, private store: Store) { }

  form = new FormGroup({
    title: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    price: new FormControl(null, [Validators.required, Validators.min(100), Validators.pattern(new RegExp('^[0-9]+$'))]),
    imageUrl: new FormControl(null),
    category: new FormControl(null, [Validators.required])
  });

  ngOnInit() {
  }

  readUrl(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imgSrc = reader.result;
      reader.readAsDataURL(file);
    }
  }

  addProduct() {
    this.productService.addProduct(this.form.value).subscribe(product => {
      this.store.dispatch(new AddProduct(product));
      this.form.reset();
    });
  }

  get price() {
    return this.form.controls.price;
  }

  get title() {
    return this.form.controls.title;
  }

  get category() {
    return this.form.controls.category;
  }

}
