import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShipList } from '../../models/shipsList.model';
declare var $: any;

@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss'],
})
export class ShipsDetailsComponent implements OnInit {
  @Input() dataList: ShipList;
  @Output() changePage: EventEmitter<string> = new EventEmitter<string>();
  config: any;
  shipId: string = '';
  url: string = '';
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';

  constructor() {}

  ngOnInit(): void {
    if (this.dataList) {
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.dataList.results.length,
      };
    }
  }

  getStarshipId(url) {
    this.shipId = url.slice(-2, -1);
    const urlImage = `https://starwars-visualguide.com/assets/img/starships/${this.shipId}.jpg`;
    return urlImage;
  }

  pageChanged(event) {
    this.config.currentPage = event;
    const url = `http://swapi.dev/api/starships/?page=${event}`;
    this.changePage.emit(url);
  }

  openDetails(details) {
    $('#exampleModal').modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class;
  }
}
