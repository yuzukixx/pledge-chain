import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-update-payment',
  templateUrl: './UpdatePayment.component.html',
  styleUrls: ['./UpdatePayment.component.css']
})
export class UpdatePaymentComponent{
  title = 'app works!';
  private apiUrl = 'http://localhost:3000/api/org.acme.model.ProjectListing';
  data: any = {};

  constructor(private http: Http) {
  	console.log('Hello fellow user');
  	this.getContacts();
  	this.getData();
  }

  getData() {
  	return this.http.get(this.apiUrl)
  		.map((res: Response) => res.json())
  }

  getContacts() {
  	this.getData().subscribe(data => {
  		console.log(data);
  		this.data = data
  	})
  }
}
