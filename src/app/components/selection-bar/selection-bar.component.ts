import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { COUNTIES } from 'src/app/counties';
import { County } from 'src/app/countyModel';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-selection-bar',
  templateUrl: './selection-bar.component.html',
  styleUrls: ['./selection-bar.component.scss'],
})
export class SelectionBarComponent implements OnInit {
  selectedValue: string;
  counties: County[] = COUNTIES; //skapa en länlista till select/option
  list: Array<any> = [];
  @Output() msgToParkingList = new EventEmitter<any>();

  constructor(private dataService: DataService) {}
  ngOnInit(): void {}

  /*hämta data när man använda select/option. getParkingList finns i dataservices*/
  onChange(getValue: string) {
    this.dataService.selectedCountyNo = getValue;
    this.dataService.getParkingList().subscribe((response) => {
      (this.list = response.RESPONSE.RESULT[0].Parking),
        this.msgToParkingList.emit(this.list);
    });
  }
}
