import { Injectable } from '@angular/core';

@Injectable()
export class DetailsService {
  
  private _details: any[] = [
    { type: 'Deposito', value: 'R$ 100,00' },
    { type: 'Deposito', value: 'R$ 150,00' },
    { type: 'Saque', value: 'R$ 75,00' },
    { type: 'Deposito', value: 'R$ 200,00' }
  ];

  getDetails() {
    return this._details;
  }

  setDetail(value: string, typeOperation: string) {
    this._details.push({type: typeOperation, value});
  }

  removeDetail(row: any) {
    this._details.splice(row, 1);
  }

}