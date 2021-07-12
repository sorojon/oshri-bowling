import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName: string = '';
  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if (this.userName != '') {
      
      setTimeout(() => {
        this.router.navigate(['Game',  this.userName]);
      }, 600);
      
    } else {
      alert('The field Name cannot be empty');
    }

    
  }
}
