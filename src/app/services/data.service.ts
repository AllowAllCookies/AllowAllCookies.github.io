import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { County } from '../countyModel';

let headers = new HttpHeaders();
headers = headers.append('Content-Type', 'text/xml');
headers = headers.append('Accept', 'text/xml');
headers = headers.append('Type', 'text');
let apiUrl = environment.BASE_URL;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  /*hämta vald countyNO från selection-bar */
  selectedCountyNo: string = '1';
  /*uppdatera om checkboxes är checked*/
  toilet: boolean = false;
  toiletChecked = '';
  truckParking: boolean = false;
  truckParkingCheck = '';
  restaurant: boolean = false;
  restaurantChecked = '';
  /*hämta name from valda parkeringsplats*/
  selectedParkingAreaId: string = '';

  /*Hämta lista med "name" med vald län, checkboxes */
  getParkingList(): Observable<any> {
    if (this.toilet) {
      this.toiletChecked = '<EQ name="Equipment.Type" value="toilet" />';
    } else {
      this.toiletChecked = '';
    }
    if (this.truckParking) {
      this.truckParkingCheck =
        '<EQ name="VehicleCharacteristics.VehicleType" value="lorry" />';
    } else {
      this.truckParkingCheck = '';
    }
    if (this.restaurant) {
      this.restaurantChecked = '<EQ name="Facility.Type" value="restaurant" />';
    } else {
      this.restaurantChecked = '';
    }
    const body = `<REQUEST> 
      <LOGIN authenticationkey="102742701c3247ff9b707b9f988b16b4" /> 
        <QUERY objecttype="Parking" schemaversion="1.4"><FILTER>${this.restaurantChecked}
          <EQ name="CountyNo" value="${this.selectedCountyNo}"/>
          ${this.toiletChecked}
          ${this.truckParkingCheck}
          </FILTER><INCLUDE>Name</INCLUDE><INCLUDE>Id</INCLUDE><INCLUDE>DistanceToNearestCity</INCLUDE></QUERY> </REQUEST>`;
    return this.http.post<County[]>(apiUrl, body, { headers: headers });
  }

  /*hämta detaljer från parkeringsplats man har vald*/
  getParkingAreaDetails(): Observable<any> {
    const body = `<REQUEST> <LOGIN authenticationkey="102742701c3247ff9b707b9f988b16b4" />
      <QUERY objecttype="Parking" schemaversion="1.4">
        <FILTER><EQ name="Id" value="${this.selectedParkingAreaId}"/>
        </FILTER>
        <INCLUDE>Id</INCLUDE>
        <INCLUDE>Name</INCLUDE>
        <INCLUDE>Description</INCLUDE>
        <INCLUDE>Geometry.WGS84</INCLUDE>
        <INCLUDE>IconId</INCLUDE>
        <INCLUDE>VehicleCharacteristics</INCLUDE>
        <INCLUDE>DistanceToNearestCity</INCLUDE>
      </QUERY>
      </REQUEST>`;
    return this.http.post<County[]>(apiUrl, body, { headers: headers });
  }
}
