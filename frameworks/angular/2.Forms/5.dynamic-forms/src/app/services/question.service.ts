import { Injectable } from '@angular/core';
import { DropdownQuestion } from '../classes/question-dropdown';
import { TextboxQuestion } from '../classes/question-textbox';
import { QuestionBase } from '../classes/question-base';

@Injectable({ providedIn: 'root' })
export class QuestionService {

  getQuestion() {
    const questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'unproven' }
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Kyoz',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
