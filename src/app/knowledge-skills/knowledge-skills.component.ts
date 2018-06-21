import { ISkillSet } from '../types/ISkillset';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../api/DataService';

@Component({
  selector: 'app-knowledge-skills',
  templateUrl: './knowledge-skills.component.html',
  styleUrls: ['./knowledge-skills.component.css']
})
export class KnowledgeSkillsComponent implements OnInit {
    data: ISkillSet[];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getSkillSets().subscribe(
            data => {
                this.data = data;
            },
            error => alert('Error: ' + error.message)
        );
    }
}
