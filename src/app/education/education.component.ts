import { Component, OnInit } from '@angular/core';
import { ISchool } from '../types/ISchool';
import { DataService } from '../api/DataService';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
    data: ISchool[];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getEducation().subscribe(
            data => {
                this.data = data;
            },
            error => alert('Error: ' + error.message)
        );
    }
}
