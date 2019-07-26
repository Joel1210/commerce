import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  oneProduct: any;
  productId: any;
  show: boolean;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.productId = params['id']
      this.showOneProduct();
    });
    this.oneProduct = { name: '', quantity: '', price: '' };
  }

  showOneProduct(){
    const obs = this._httpService.getOneProduct(this.productId);
    obs.subscribe(data => {
      console.log("this product", data);
      this.oneProduct = data;

      if(this.oneProduct.quantity == 0){
        this.show = true;

      }
    })
  }

  deleteProduct(){
    const obs = this._httpService.deleteProduct(this.productId);
    obs.subscribe(data => {
      console.log('deleted from db', data);
    })
  }

  goHome() {
    this._router.navigate(['/products']);
  }

}
