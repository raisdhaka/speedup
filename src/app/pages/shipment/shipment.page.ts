import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.page.html',
  styleUrls: ['./shipment.page.scss'],
})
export class ShipmentPage implements OnInit {

  readonly rootUrl =environment.apiUrlWP + 'shipment';
  shipments: any;

  constructor(private http: HttpClient) { 
  this.shipments= this.http.get(this.rootUrl);

  


  }

  ngOnInit() {
  }


}
