import { IInterest } from '../types/IInterest';
import { Component, OnInit } from '@angular/core';
import { interests } from '../api/interests';
@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
    interests: IInterest[];

    constructor() {
        this.interests = interests;
     }

    ngOnInit() {
    }

}
