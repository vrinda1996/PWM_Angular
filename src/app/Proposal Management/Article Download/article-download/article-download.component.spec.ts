import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDownloadComponent } from './article-download.component';

describe('ArticleDownloadComponent', () => {
  let component: ArticleDownloadComponent;
  let fixture: ComponentFixture<ArticleDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
