import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './../../components/components.module';

import { IonicModule } from '@ionic/angular';

import { ShipmentPage } from './shipment.page';

const routes: Routes = [
  {
    path: '',
    component: ShipmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShipmentPage]
})
export class ShipmentPageModule {}
