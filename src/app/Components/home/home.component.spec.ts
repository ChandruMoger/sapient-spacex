import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DataService } from "../../Services/data.service";
import { of } from 'rxjs';

let mockObject = [
  {
    "flight_number":1,
    "mission_name":"FalconSat",
    "mission_id":[],
    "upcoming":false,
    "launch_year":"2006",
    "launch_date_unix":1143239400,
    "launch_date_utc":"2006-03-24T22:30:00.000Z",
    "launch_date_local":"2006-03-25T10:30:00+12:00",
    "is_tentative":false
  }
]
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let dataServiceSpy: DataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ HomeComponent ],
      providers: [DataService]
    })
    .compileComponents();
  }));

  
    beforeEach(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;      
      dataServiceSpy = TestBed.inject(DataService);
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should get missions data on initialize', async(() => {
      spyOn(dataServiceSpy, 'httpCall').and.returnValue(of(mockObject));
      fixture.detectChanges();      
      expect(component.productLists).toEqual(mockObject);
    }));

    it('should get missions data on filter', async(() => {
      spyOn(dataServiceSpy, 'httpCall').and.returnValue(of(mockObject));
      component.getFilteredData('ee');      
      fixture.detectChanges();      
      expect(component.productLists).toEqual(mockObject);
    }));

});
