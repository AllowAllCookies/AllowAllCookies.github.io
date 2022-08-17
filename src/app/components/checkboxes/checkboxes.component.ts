import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { CheckList } from 'src/app/checklistModel';
import { CHECKLIST } from 'src/app/checklist';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
})
export class CheckboxesComponent implements OnInit {
  checklist: CheckList[] = CHECKLIST; //listan av options som finns i checkboxes
  list: Array<any> = [];
  @Output() msgToParkingList = new EventEmitter<any>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  checkboxesUpdate() {
    const iterator = this.checklist.values();
    for (const value of iterator) {
      if (value.name === 'Toalett') {
        this.dataService.toilet = value.checked;
      } else if (value.name === 'Lastbilsplats') {
        this.dataService.truckParking = value.checked;
      } else {
        this.dataService.restaurant = value.checked;
      }
    }
    this.dataService.getParkingList().subscribe((response) => {
      (this.list = response.RESPONSE.RESULT[0].Parking),
        this.msgToParkingList.emit(this.list);
    });
  }
}
