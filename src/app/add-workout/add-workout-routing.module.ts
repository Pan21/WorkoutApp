import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddWorkoutPage } from './add-workout.page';

const routes: Routes = [
  {
    path: '',
    component: AddWorkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddWorkoutPageRoutingModule {}
