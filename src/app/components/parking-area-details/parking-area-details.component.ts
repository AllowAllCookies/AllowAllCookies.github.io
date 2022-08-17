import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-parking-area-details',
  templateUrl: './parking-area-details.component.html',
  styleUrls: ['./parking-area-details.component.scss'],
})
export class ParkingAreaDetailsComponent implements OnInit {
  @Input() msgParkingListToParkingAreaDetails: any;
  @Output() msgToPageBody = new EventEmitter<any>();
  favoriteList: Array<any> = [];
  parkingDetails: any;
  selectedParkingAreaId: any;
  srcUrl: any;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  ngOnChanges() {
    try {
      this.srcUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://maps.google.com/maps?q=${
          this.msgParkingListToParkingAreaDetails[0].Geometry.WGS84.split(
            ' '
          )[2].split(')')[0]
        }+${
          this.msgParkingListToParkingAreaDetails[0].Geometry.WGS84.split(
            '('
          )[1].split(' ')[0]
        }&output=embed`
      );
    } catch {
      (error) => console.log(error);
    }
  }

  onClick(getValue: string) {
    this.favoriteList.push(getValue);
    this.msgToPageBody.emit(this.favoriteList);
  }
}
