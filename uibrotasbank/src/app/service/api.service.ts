import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api: string = 'http://brotasbank.com/';

  constructor(
    private http: HttpClient
  ) { }

  createData(){

  }
  readData(){
    return this.http.get(`${this.api}api/v2/infoUser/361d81b89c8528fd372ed4dccaff33d5834de4dcc917d36912d3d4bc34ddf922`);
  }
  updateData(){

  }
  deleteData(){

  }
}
