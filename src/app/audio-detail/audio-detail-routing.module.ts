import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudioDetailPage } from './audio-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AudioDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudioDetailPageRoutingModule {}
