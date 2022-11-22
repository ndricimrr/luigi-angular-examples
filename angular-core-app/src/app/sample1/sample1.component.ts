import { Component } from '@angular/core';
import {
  addInitListener,
  addContextUpdateListener,
  getNodeParams
} from '@luigi-project/client';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html'
})
export class Sample1Component {
  constructor() {
  }

  ngOnInit() {
    addInitListener(initialContext => {
      console.log('params', getNodeParams());
    });
  }

}
