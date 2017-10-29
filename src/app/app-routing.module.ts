// Currently not used
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { InterestsComponent } from './interests/interests.component';
import { ProjectsComponent } from './projects/projects.component';
import { KnowledgeSkillsComponent } from './knowledge-skills/knowledge-skills.component';
import { AboutComponent } from './about/about.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'experience',
        component: ExperienceComponent
    },
    {
        path: 'knowledge-skills',
        component: KnowledgeSkillsComponent
    },
    {
        path: '**',
        redirectTo: '/about',
        pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
