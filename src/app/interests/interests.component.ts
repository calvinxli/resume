import { IInterest } from '../types/IInterest';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../api/DataService';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
    data: IInterest[];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getInterests().subscribe(
            data => {
                this.data = data;
            },
            error => alert('Error: ' + error.message)
        );
    }
}
