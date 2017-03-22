import { Component, OnInit } from '@angular/core';

import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public details: any[] = [];
  public detailsService: DetailsService;
  public amount: any;

  constructor(private _detailsService: DetailsService) {}

  ngOnInit() {
    this.details = this._detailsService.getDetails();
  }

  removeRow(row: any) {
    this._detailsService.removeDetail(row);
  }

}
