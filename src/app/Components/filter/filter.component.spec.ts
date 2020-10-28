import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Filter for launch', () => {
   component.getProductsByFilter('true', 'launch');
   expect(component.launchSelected).toEqual('true');
  });

  it('should Filter for year', () => {
    component.getProductsByFilter('2006', 'year');
    expect(component.yearSelected).toEqual('2006');
   });

   it('should Filter for land', () => {
    component.getProductsByFilter('false', 'land');
    expect(component.landSelected).toEqual('false');
   });

  it('Should format the url', () => {
    component.urlString = 'launches?limit=100&launch_year=2019&launch_success=false'
    component.formatTheURL('2019', 'launch_year');
    expect(component.urlString).toEqual('launches?limit=100&launch_year=2019&launch_success=false');
  })

});
