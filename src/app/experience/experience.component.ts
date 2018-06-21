import { Component, OnInit } from '@angular/core';
import { IExperience } from '../types/IExperience';
import { DataService } from '../api/DataService';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
    data: IExperience[];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getExperience().subscribe(
            data => {
                this.data = data;
            },
            error => alert('Error: ' + error.message)
        );
    }
}
