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
    },
    educations: {
      title: "Education & Certifications",
      education1: {
        course: "Full Stack Web Developer",
        school: "AdATech",
        status: "Em andamento",
        conclusion: "12/2023"
      },
      education2: {
        course: "Angular Advanced",
        school: "Loaine training",
        status: "Concluído",
        conclusion: "06/2022"
      }
    },
    aside:{
      dados:{
        info1:{
          field1:"Residence",
          field2: "City",
          field3: "Age"
        },
        info2:{
          field1:"Residence",
          field2: "City",
          field3: "Age"
        }
      }    
      
    }

  }

}


