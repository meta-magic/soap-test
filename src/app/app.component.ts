import { Component, OnInit } from '@angular/core';

import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  client: Client;
  response: any;
  constructor(private http: HttpClient, private soap: NgxSoapService) {
    this.soap.createClient('http://uat-esb.fadv.net/ess/internal/global/SiebelFlashBoardPS?wsdl')
      .then(client => {
        console.log('Client', client);
        this.client = client;
      })
      .catch(err => console.log('Error', err));

  }

  ngOnInit(){
    const body ={
      SRnumberSearch:{
        SRnumberSearch:{
          SRNumber: '1-7631330921'
        }
      }
    };

    this.client.call('FlashBoardSRNumberSearch_Input', body).subscribe(res => {
      console.log(res);
      this.response = res;
    }, err => console.log(err));
  }

  

}
