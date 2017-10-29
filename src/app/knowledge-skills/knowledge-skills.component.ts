import { ISkillSet } from '../../types/ISkillset';
import { skillSets } from '../../api/skill-sets';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge-skills',
  templateUrl: './knowledge-skills.component.html',
  styleUrls: ['./knowledge-skills.component.css']
})
export class KnowledgeSkillsComponent implements OnInit {
    skillSets: ISkillSet[];

    constructor() {
        this.skillSets = skillSets;
    }

    ngOnInit() {
    }

}
