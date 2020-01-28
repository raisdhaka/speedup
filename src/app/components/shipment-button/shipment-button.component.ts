import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment-button',
  templateUrl: './shipment-button.component.html',
  styleUrls: ['./shipment-button.component.scss']
})
export class ShipmentButtonComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToShipment() {
    this.router.navigate(['/shipment']);
  }
}
