import { IAbout } from '../../types/IAbout';
import { Component, OnInit } from '@angular/core';
import { about } from '../../api/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    about: IAbout;

    constructor() {
        this.about = about;
    }

    ngOnInit() {
    }

}
