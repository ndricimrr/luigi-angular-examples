import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as  LuigiClient  from '@luigi-project/client';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  private router: Router;
 nodeParams: any;
 nodeParamsEncoded: any;

  constructor(router: Router) {
    this.router = router;
    LuigiClient.addInitListener((context) => {
      console.log('Luigi Client initialised in Order Page');
      this.nodeParams =  LuigiClient.getNodeParams();
      this.nodeParamsEncoded = encodeURIComponent(this.nodeParams['url']);
    });
   }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigateByUrl('details');
  }

}
