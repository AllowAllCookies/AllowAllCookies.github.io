import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.scss'],
})
export class PageBodyComponent implements OnInit {
  msgSelectionBarToParkingList: any;
  msgParkingListToParkingAreaDetails: any;
  msgParkingAreaDetails: any;
  panelOpenState = false;

  constructor() {}

  ngOnInit(): void {}

  msgToParkingList($event) {
    this.msgSelectionBarToParkingList = $event;
  }

  msgToParkingAreaDetails($event) {
    this.msgParkingListToParkingAreaDetails = $event;
  }
}
