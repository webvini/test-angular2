import { Component } from '@angular/core';

import { DetailsService } from './details/details.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  details: any[] = [];
  detailsService: DetailsService;
  typeOperation: string = '';
  value: number;

  constructor(private _detailsService: DetailsService) {}

  onSetDetail(value: any) {
    this._detailsService.setDetail(value, this.typeOperation);
  }

}
