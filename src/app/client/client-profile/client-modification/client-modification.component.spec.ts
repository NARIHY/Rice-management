import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientModificationComponent } from './client-modification.component';

describe('ClientModificationComponent', () => {
  let component: ClientModificationComponent;
  let fixture: ComponentFixture<ClientModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientModificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
