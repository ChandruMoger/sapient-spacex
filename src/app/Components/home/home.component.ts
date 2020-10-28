import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../Services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productLists: Array<object> = [];
  filetredData = [];
  launchYears = [];
  loading: boolean = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getTheData();
  }

  manageActions(url) {
    if(url) {
      this.getFilteredData(url);
    }
  }

  getTheData() {
    this.loading = true;
    this.dataService.httpCall('GET', 'launches?limit=100').subscribe((data: object[]) => {
      this.productLists = data;
      this.productLists.forEach(item => {
        if (!this.launchYears.includes(item['launch_year'])) {
          this.launchYears.push(item['launch_year']);
        }
      });
      this.loading = false;
    }, (error: any) => {
      console.log(error);
    });
  }

  getFilteredData(url) {
    this.loading = true;
    this.dataService.httpCall('GET', url).subscribe((data: any) => {
      this.productLists = data;
      this.loading = false;
    }, (error: any) => {
      console.log(error);
    });
  }
}
