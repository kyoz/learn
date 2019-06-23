import { Component } from '@angular/core';
import { QuestionService } from './services/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  questions: any[];

  constructor(private service: QuestionService) {
    this.questions = this.service.getQuestion();
  }
}
