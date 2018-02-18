import { Component, Input } from '@angular/core';
import { Product } from 'shared/models/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart;

  constructor(private cartservice: ShoppingCartService) { }

  addToCart() {
    this.cartservice.addToCart(this.product);
  }

  removeFromCart() {
    this.cartservice.removeFromCart(this.product);
  }

}
