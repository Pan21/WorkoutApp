import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.page.html',
  styleUrls: ['./add-workout.page.scss'],
})
export class AddWorkoutPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home() {  
    this.router.navigate(['home']);  
  }

}
