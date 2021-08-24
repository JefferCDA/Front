import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOpsComponent } from './products-ops.component';

describe('ProductsOpsComponent', () => {
  let component: ProductsOpsComponent;
  let fixture: ComponentFixture<ProductsOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsOpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
