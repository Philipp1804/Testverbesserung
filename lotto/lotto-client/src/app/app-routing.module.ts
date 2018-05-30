import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceTripComponent } from './place-trip/place-trip.component';
import { GetResultComponent } from './get-result/get-result.component';

const routes: Routes = [
  { path: 'place-tip', component: PlaceTripComponent },
  { path: 'get-result', component: GetResultComponent},
  { path: '', redirectTo: 'place-tip', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
