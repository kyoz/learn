import { Component, InjectionToken, Inject } from '@angular/core';

export class Book {
  constructor(public name: string, public version: string) {}
}

interface IMessageToken {
  id: number;
  description: string;
  createAt: Date;
}

const AngularBook = new Book('Learn Angular', 'Version 8');
const DefaultMessageToken = {
  id: 1,
  description: 'Token here',
  createAt: new Date()
};
export const ANGULAR_MESSAGE = new InjectionToken<string>('Learn Angular 9');
export const MESSAGE_TOKEN = new InjectionToken<IMessageToken>('Token');

@Component({
  selector: 'use-value-2',
  template: `
    <div>Book Name: {{ book.name }}</div>
    <div>Book Version: {{ book.version }}</div>
    <div>Message: {{ message }}</div>
    <div>Token: {{ token }}</div>
  `,
  providers: [
    { provide: Book, useValue: AngularBook },
    { provide: ANGULAR_MESSAGE, useValue: 'Learn Angular 8 step by step' },
    { provide: MESSAGE_TOKEN, useValue: DefaultMessageToken }
  ]
})
export class UseValue2Component {
  constructor(
    private book: Book,
    @Inject(ANGULAR_MESSAGE) private message: string,
    @Inject(MESSAGE_TOKEN) private messageToken: IMessageToken
  ) {}

  get token() {
    return JSON.stringify(this.messageToken);
  }
}

