import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-exibi-ip',
  templateUrl: './exibi-ip.component.html',
  styleUrls: ['./exibi-ip.component.css']
})
export class ExibiIpComponent implements OnInit {
  ipAddress:string = ''

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.obterIpAddress()
  }

  obterIpAddress(){
     this.http.get("http://api.ipify.org/?format=json").subscribe((resposta:any) => {
       this.ipAddress = resposta.ip
       //return resposta
     });
  }

}
