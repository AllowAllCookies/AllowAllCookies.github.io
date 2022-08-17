import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.scss'],
})
export class ParkingListComponent implements OnInit {
  data: any;
  @Input() msgSelectionBarToParkingList: any[];
  @Output() msgToParkingAreaDetails = new EventEmitter<any>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
  onClick(getValue: string) {
    this.dataService.selectedParkingAreaId = getValue;
    this.dataService.getParkingAreaDetails().subscribe((response) => {
      (this.data = []),
        (this.data = response.RESPONSE.RESULT[0].Parking),
        this.msgToParkingAreaDetails.emit(this.data);
    });
  }
}
