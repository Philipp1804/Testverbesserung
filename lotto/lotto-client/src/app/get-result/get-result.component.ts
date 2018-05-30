import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-get-result',
  templateUrl: './get-result.component.html',
  styleUrls: ['./get-result.component.css']
})
export class GetResultComponent implements OnInit {
  public result:Observable<number[]>;
  public input: number;
  public output: number;

  constructor(httpClient: HttpClient) { 
    
  }

  checkNumber(){
    
  }

  ngOnInit() {
  }



}
