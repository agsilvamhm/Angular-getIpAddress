import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibiIpComponent } from './exibi-ip.component';

describe('ExibiIpComponent', () => {
  let component: ExibiIpComponent;
  let fixture: ComponentFixture<ExibiIpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibiIpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibiIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
