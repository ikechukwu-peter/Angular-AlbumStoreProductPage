import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTracklistingComponent } from './product-tracklisting.component';
import { Album } from '../album';


describe('ProductTracklistingComponent', () => {
  let component: ProductTracklistingComponent;
  let fixture: ComponentFixture<ProductTracklistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTracklistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTracklistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response =>
      this.albumInfo = response);
  }
});
