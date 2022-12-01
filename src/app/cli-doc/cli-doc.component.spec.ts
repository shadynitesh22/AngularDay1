import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliDocComponent } from './cli-doc.component';

describe('CliDocComponent', () => {
  let component: CliDocComponent;
  let fixture: ComponentFixture<CliDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CliDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
