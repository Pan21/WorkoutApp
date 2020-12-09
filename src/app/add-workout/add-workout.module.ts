import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddWorkoutPageRoutingModule } from './add-workout-routing.module';

import { AddWorkoutPage } from './add-workout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddWorkoutPageRoutingModule
  ],
  declarations: [AddWorkoutPage]
})
export class AddWorkoutPageModule {}
