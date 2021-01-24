import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  public address: string = "";
  public url: string = "http://localhost:3001/api/AppUsers/fetchCoordinates?address=";
  public res: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  submit() {
    if (!this.address) {
      return;
    }
    this.http.get(this.url + this.address).toPromise()
      .then((data: any) => {
        this.res = data;
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })

    console.log(this.address);
  }

}
