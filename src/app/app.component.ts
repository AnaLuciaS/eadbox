import { Component } from '@angular/core';
import { Http, Response } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  apiUrl : string = "http://analuciasilva.eadbox.com/api/courses"; 
  //Informações dos Cursos
  id : number;
  title : string;
  img: string;
  description: string;
  x: number;

  constructor(private http : Http) { }

  listaCurso() {

    this.http.get(this.apiUrl)
    .subscribe(
      (res: Response) => {
        var listaCursos = []
        listaCursos = res.json();
        for (var i=0;i<=listaCursos.length;i=i+1){
          this.id = listaCursos[i].course_id;
          this.title = listaCursos[i].title;
          this.img = listaCursos[i].logo_url;
          this.description = listaCursos[i].description;
          this.x = i;
        }
      }
    )
  }

}
