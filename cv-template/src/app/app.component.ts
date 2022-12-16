import { Component } from '@angular/core';
import { AppData } from './models/app-data.models';
import { ContactFormData } from './models/contact-form-data.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv-template';
  public data: AppData = {
    skills: {
      skill: [{
        skillValue: "10+",
        skillName: "Experiência"
      },
      {
        skillValue: "96",
        skillName: "Projetos Entregues"
      },
      {
        skillValue: "10",
        skillName: "Tecnologias"
      },
      {
        skillValue: "5,6",
        skillName: "R$ Mi de Resultado"
      }]
    },
    experiences: {
      title: "Experiência Profissional",
      experiences: [{
        job: "Analista",
        company: "Empresa Exemplo",
        timePeriod: "jun/2020 - atual",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nemo, quibusdam optio a, blanditiis ex amet libero fugiat, consequuntur dolores ut veritatis accusantium necessitatibus cupiditate."
      },
      {
        job: "Estagiário",
        company: "Empresa Exemplo",
        timePeriod: "mar/2022 - jun2020",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt nemo, quibusdam optio a, blanditiis ex amet libero fugiat, consequuntur dolores ut veritatis accusantium necessitatibus cupiditate."
      }]
    },
    educations: {
      title: "Educação & Certificados",
      education: [{
        course: "Full Stack Web Developer",
        school: "AdATech",
        status: "Em andamento",
        conclusion: "12/2023"
      },
      {
        course: "Angular Advanced",
        school: "Loaine training",
        status: "Concluído",
        conclusion: "06/2022"
      }]
    },
    aside: {
      profile: {
        image: '../assets/images/img.jpg',
        name: 'Estevão Universo',
        function: 'Web Developer'
      },
      dados:{
        info1:{
          field1:"Cidade",
          field2: "País",
          field3: "Idade"
        },
        info2:{
          field1:"São Paulo",
          field2: "Brasil",
          field3: "25"
        }
      },
      knowledge:{
        title: "Habilidades",
        knowledge1: "Bootstrap",
        knowledge2: "Materialize",
        knowledge3: "Stylus",
        knowledge4: "Sass",
        knowledge5: "Less",
        knowledge6: "Gulp",
        knowledge7: "Webpack",
        knowledge8: "Grunt"
      },
      languages: {
        title: "Idiomas",
        languages: [{
          languageName: "Port.",
          languageLevel: 100
        },
        {
          languageName: "Francês",
          languageLevel: 50
        },
        {
          languageName: "Inglês",
          languageLevel: 85
        }]
      },
      contactInfo: {
        title:"Contato",
        telephone:"tel:+5511999999999",
        email: "mailto:testando@teste.com",
        website: "http://github.com",
        linkedin: "http://linkedin.com",
        pinterest: "http://pinterest.com"
      },
      coding: {
        title: "Coding",
        lang1: {
          langName: "HTML + CSS",
          langLevel: "95%"
        },
        lang2: {
          langName: "C#",
          langLevel: "65%"
        },
        lang3: {
          langName: "JS",
          langLevel: "35%"
        }
      }
    },
    header:{
      lang: [
        "../assets/images/csharp.png",
        "../assets/images/sql.png",
        "../assets/images/html5.png",
        "../assets/images/css3.png",
        "../assets/images/js-fill.png",
        "../assets/images/angular.png",
        "../assets/images/ts.png"
    ]
    }
  }

  onContactFormSubmitted(formData: ContactFormData): void {
    console.log("Formulário enviado com sucesso!", formData);
  }

}


