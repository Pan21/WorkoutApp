import { Router } from '@angular/router'; 
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}


  details() {  
    this.router.navigate(['workout-detail']);  
  }
  
  profile() {  
    this.router.navigate(['profile']);  
  }

  addWorkout() {  
    this.router.navigate(['add-workout']);  
  }
}


