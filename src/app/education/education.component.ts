import { Component, OnInit } from '@angular/core';
import { ISchool } from '../../types/ISchool';
import { education } from '../../api/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
    education: ISchool[];

    constructor() {
        this.education = education;
    }

    ngOnInit() {
    }

}
