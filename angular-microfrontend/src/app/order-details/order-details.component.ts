import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as  LuigiClient  from '@luigi-project/client';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
   }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigateByUrl('orders');
  }
}
