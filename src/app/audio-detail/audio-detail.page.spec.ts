import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AudioDetailPage } from './audio-detail.page';

describe('AudioDetailPage', () => {
  let component: AudioDetailPage;
  let fixture: ComponentFixture<AudioDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudioDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
