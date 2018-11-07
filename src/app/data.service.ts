import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  myContent = {
    totalGold: 0,
    dataLog: []
  };

  constructor() { }

  retriveContent() {
    return this.myContent;
  }

  retriveDataLog() {
    console.log('test');

    return this.myContent.dataLog;
  }



  gamble(building) {
    if (building === 'Farm') {
      let temp = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
      this.myContent.totalGold += temp;
      this.myContent.dataLog.push('You earned ' + temp + ' gold!')
    } else if (building === 'Cave') {
      let temp = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
      this.myContent.totalGold += temp;
      this.myContent.dataLog.push('You earned ' + temp + ' gold!')
    } else if (building === 'House') {
      let temp = Math.floor(Math.random() * (15 - 7 + 1)) + 7;
      this.myContent.totalGold += temp;
      this.myContent.dataLog.push('You earned ' + temp + ' gold!')
    } else {
      if (Math.round(Math.random())) {
        let temp = Math.floor(Math.random() * 101);
        this.myContent.totalGold += temp;
        this.myContent.dataLog.push('You earned ' + temp + ' gold!')
      } else {
        let temp = Math.floor(Math.random() * 101);
        this.myContent.totalGold -= temp;
        this.myContent.dataLog.push('You lost ' + temp + ' gold!')
      }
    }
  }

}
