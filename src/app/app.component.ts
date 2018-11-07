import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myGold: number = 0;
  // myLog: string[] = [];
  Farm: object = { type: 'Farm', content: 'Earns 2 - 5 Gold' };
  Cave: object = { type: 'Cave', content: 'Earns 5 - 10 Gold' };
  Casino: object = { type: 'Casino', content: 'Earns or Lose up to 100 Gold' };
  House: object = { type: 'House', content: 'Earns 7 - 15 Gold' };

  constructor(private _dataservice: DataService) { }

  updateData() {
    this.myGold = this._dataservice.retriveContent().totalGold;
    // this.myLog = this._dataservice.retriveContent().dataLog;
  }

}
