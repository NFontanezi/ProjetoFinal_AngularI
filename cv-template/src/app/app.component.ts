import { Component } from '@angular/core';
import { AppData } from './models/app-data.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv-template';
  public data: AppData = {
    experiences: {
      title: "Job Experiences",
      experience1: {
        job: "Trainee Top Coder",
        company: "Banco Safra",
        timePeriod: "jun/2022 - atual",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nemo, quibusdam optio a, blanditiis ex amet libero fugiat, consequuntur dolores ut veritatis accusantium necessitatibus cupiditate."
      },
      experience2: {
        job: "Estudante",
        company: "Ada - Let's Code",
        timePeriod: "mai/2022 - atual",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nemo, quibusdam optio a, blanditiis ex amet libero fugiat, consequuntur dolores ut veritatis accusantium necessitatibus cupiditate."
      }
    }


    }
  }

