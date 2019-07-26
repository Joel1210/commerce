import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  updatedProduct: any;
  productId: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.updatedProduct = {
      __id: '',
      name: '',
      quantity: '',
      price: '',
      __v: ''
    };
  

    this._route.params.subscribe((params: Params) => {
      this.productId = params[`id`];
      console.log('productId', this.productId);
      
      
    });

    this.showOneProduct();
  }
  
  showOneProduct(){
    const obs = this._httpService.getOneProduct(this.productId)
    obs.subscribe(data => {
      this.updatedProduct = data;
    })
  }


  updateProduct(){
    const obs = this._httpService.editProduct(this.productId, this.updatedProduct);
    obs.subscribe(data =>{
      if (data['errors']){
        console.log(data)
      }
      else{
        this.goHome();
      }
    })
  }

  goHome() {
    this._router.navigate(['/products']);
  }



}
