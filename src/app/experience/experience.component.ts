import { Component, OnInit } from '@angular/core';
import { IExperience } from '../types/IExperience';
import { experiences } from '../api/experiences';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
    experiences: IExperience[];

    constructor() {
        this.experiences = experiences;
     }

    ngOnInit() {
    }

}
