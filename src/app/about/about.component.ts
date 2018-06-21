import { IAbout } from '../types/IAbout';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../api/DataService';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
    data: IAbout;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getAbout().subscribe(
            data => {
                this.data = data as IAbout;
            },
            error => alert('Error: ' + error.message)
        );
    }
}
