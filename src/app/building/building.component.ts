import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  @Input() building;
  @Output() updateGold = new EventEmitter();

  constructor(private _dataservice: DataService) { }

  ngOnInit() {
  }

  gamble(building) {

    this._dataservice.gamble(building);
    this.updateGold.emit();
  }

}
