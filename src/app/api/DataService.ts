import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ISchool } from '../types/ISchool';
import { IAbout } from '../types/IAbout';
import { IExperience } from '../types/IExperience';
import { ISkillSet } from '../types/ISkillset';
import { IInterest } from '../types/IInterest';

@Injectable({
  providedIn: 'root',
})

export class DataService {
    constructor(private http: HttpClient) {

    }

    public getExperience(): Observable<IExperience[]> {
        return this.http.get('assets/experience.json') as Observable<IExperience[]>;
    }

    public getAbout(): Observable<IAbout> {
        return this.http.get('assets/about.json') as Observable<IAbout>;
    }

    public getInterests(): Observable<IInterest[]> {
        return this.http.get('assets/interests.json') as Observable<IInterest[]>;
    }

    public getEducation(): Observable<ISchool[]> {
        return this.http.get('assets/education.json') as Observable<ISchool[]>;
    }

    public getSkillSets(): Observable<ISkillSet[]> {
        return this.http.get('assets/skill-sets.json') as Observable<ISkillSet[]>;
    }
}
