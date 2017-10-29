import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeSkillsComponent } from './knowledge-skills.component';

describe('KnowledgeSkillsComponent', () => {
  let component: KnowledgeSkillsComponent;
  let fixture: ComponentFixture<KnowledgeSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
