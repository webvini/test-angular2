import { Injectable } from '@angular/core';

@Injectable()
export class DetailsService {
  
  private _details: any[] = [
    { type: 'Deposito', value: 100 },
    { type: 'Deposito', value: 150 },
    { type: 'Saque', value: 75 },
    { type: 'Deposito', value: 200 }
  ];

  getDetails() {
    console.log(this._details.length);
    return this._details;
  }

  setDetail(value: string, typeOperation: string) {
    this._details.push({type: typeOperation, value});
  }

  removeDetail(row: any) {
    this._details.splice(this._details.indexOf(row));
  }

}