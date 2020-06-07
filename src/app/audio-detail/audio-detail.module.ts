import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudioDetailPageRoutingModule } from './audio-detail-routing.module';

import { AudioDetailPage } from './audio-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudioDetailPageRoutingModule
  ],
  declarations: [AudioDetailPage]
})
export class AudioDetailPageModule {}
