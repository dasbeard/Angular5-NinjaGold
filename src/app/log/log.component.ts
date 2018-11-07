import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  dataLog: string[];

  constructor(private _dataservice: DataService) { }

  ngOnInit() {
    this.dataLog = this._dataservice.retriveDataLog();
  }

}
