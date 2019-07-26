import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newProduct: any;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.newProduct = {name: '', quantity: '', price: ''};
  }

  addProd(){
    const obs = this._httpService.addProduct(this.newProduct);
    obs.subscribe(data =>{
      if(data['errors']){
        console.log("dsfdsfsdfsdfsdfsdfds")
        console.log(data['errors'])
        this.goCreate();
      }
      else{
        console.log("lkjlkjlkjlkjlkjlkjlkjlkjlkjlkj")
        console.log(data);
        this.goHome();
      }
    })
  }

  goHome(){
    this._router.navigate(['/products']);

  }

  goCreate(){
    this._router.navigate(['/products/new'])
  }

}
