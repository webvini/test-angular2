import { Component } from '@angular/core';

import { DetailsService } from './details/details.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  public details: any[] = [];
  public detailsService: DetailsService;
  public typeOperation: string = '';
  public value: number;
  public mask: Array<string | RegExp>;

  constructor(private _detailsService: DetailsService) {}

  onSetDetail(value: any) {
    this._detailsService.setDetail(value, this.typeOperation);
    this.typeOperation = null;
    this.value = null;
  }

}
