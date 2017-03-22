import { Component, OnInit } from '@angular/core';

import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  details: any[] = [];
  detailsService: DetailsService;
  i: number = 0;
  amount: number = 0;

  constructor(private _detailsService: DetailsService) {}

  ngOnInit() {
    this.details = this._detailsService.getDetails();
  }

  removeRow(row: any) {
    this._detailsService.removeDetail(row);
  }

  getAmount() {

    // for( this.i; this.i <= this.details.length; this.i++ ) {
    //   console.log( this.details[this.i].value );
    // }

  }

}
