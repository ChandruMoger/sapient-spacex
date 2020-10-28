import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() launchYears;
  @Output() action = new EventEmitter();
  yearSelected = '';
  launchSelected = '';
  landSelected = '';
  urlString = 'launches?limit=100'
  filtersSection = [{
    buttons: ['True', 'False'],
    title: "Launch"
  },
  {
    buttons: ['True', 'False'],
    title: "Landing"
  }];
  constructor() { }

  ngOnInit() {
  }

  getProductsByFilter(actionItem, actionType) {
    // I applied the filer only exact 3 matched scenario mentioned in document
    // I am capable to make changes
    if (actionType === 'year') {
      this.yearSelected = actionItem;
      // This is for All filter
      this.checkFilter(actionItem, 'launch_year');
    } else if (actionType === 'launch') {
      this.launchSelected = actionItem;
      this.checkFilter(actionItem, 'launch_success');
    } else if (actionType === 'land') {
      this.landSelected = actionItem;
      this.checkFilter(actionItem, 'land_success');
    }

    this.action.emit(this.urlString);
  }

  checkFilter(actionItem, filterValue){
    if(this.urlString.includes(filterValue)) {
      this.formatTheURL(actionItem, filterValue);
    } else {
      this.urlString =  `${this.urlString}&${filterValue}=${actionItem}`
    }
  }

  formatTheURL(value, type) {
    const splitUrl = this.urlString.split('&');
    const sLength = splitUrl.length;
    for(let i = 0; i < sLength; i ++){
      if(splitUrl[i].includes(type)) {
        splitUrl[i] = `${type}=${value}`;
        this.urlString = splitUrl.join('&');
      }
    }
  }

}
