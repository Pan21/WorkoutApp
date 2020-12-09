import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddWorkoutPage } from './add-workout.page';

describe('AddWorkoutPage', () => {
  let component: AddWorkoutPage;
  let fixture: ComponentFixture<AddWorkoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWorkoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddWorkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
