import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Default } from './default';

describe('Default', () => {
  let component: Default;
  let fixture: ComponentFixture<Default>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Default],
    }).compileComponents();

    fixture = TestBed.createComponent(Default);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', async () => {
      const fixture = TestBed.createComponent(Default);
      await fixture.whenStable();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('h1')?.textContent).toContain('Hello, task-management-ui');
    });
});
