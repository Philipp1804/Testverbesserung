import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

interface IResult{
  receiptTimestamp: string;
  receiptNumber: string;
}

@Component({
  selector: 'app-place-trip',
  templateUrl: './place-trip.component.html',
  styleUrls: ['./place-trip.component.css']
})
export class PlaceTripComponent implements OnInit {
  public field: number[] = new Array(45);
  public joker: boolean;
  public tip: number[] = new Array(6);
  private result: IResult;
  
  constructor(private httpClient: HttpClient) { 
    for(var i = 0; i<this.field.length; i++){
      this.field[i] = i+1;
    }
  }

  setTip(num){
    
    for(var i = 0; i<this.tip.length; i++){
      if(this.tip[i] == null){
        this.tip[i] = num;
        break;
      }
    }
    
  }

  full(){
    if(this.tip[5] != null){
      return true;
    }
    return false;
  }

  ngOnInit() {
  }

  sentResult(){
    const body = { numbers: this.tip, joker: this.joker };
    this.httpClient.post<IResult>("http://lotto.westeurope.azurecontainer.io/api/tip", body)
      .subscribe(result => this.result = result);

  }

}