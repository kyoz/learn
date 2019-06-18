import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Toggle pipe param</h2>
    <hr>
    <div>Today: {{ today | date:dateFormat }}</div>
    <button (click)="toggleDateFormat()">Toggle Date Format ({{dateFormat}})</button>

    <h2>Chaining pipes</h2>
    <hr>
    <div>Today: {{ today | date | uppercase }}</div>

    <h2>Simple custom pipe</h2>
    <hr>
    <div> Pure: <input #input/> {{ input.value | simplePipe:'-Kakaka' }} </div>
    <div> Impure: <input #impureInput/> {{ impureInput.value | simpleImpurePipe:'-Kakaka' }} </div>
    <div>
      <b>Note:</b> This is pure pipe so it doesn't change instantly (by design). <br>
      There must be new reference update in variable or an event raised... <br>Click any button with click event binded to see
    </div>
    <b>Note 2:</b> To test impure pipe, type anything in both pure & impure input then click "Test impure" button and see console logs.
    <button (click)="testList[0]='123'">Test impure</button><br>
    You see that impure pipe run more times than pure pipe. And when the value isn't change, the impure pipe still re-run a lots of times

    <h2>Custom pipe for list</h2>
    <hr>
    Hero name: <input #heroInput><button (click)="heroes.push(heroInput.value); heroInput.value = ''">Add hero</button>
    <ol>
      <li *ngFor="let hero of heroes | simpleListPipe:'Gosu'">
        {{ hero }}
      </li>
    </ol>
    <b>Note:</b> This is a pure pipe too, but for list, to update it, we must remove reference for the data list. Click below button.<br>
    <button (click)="updateListReference()">Update list reference</button>
  `
})
export class AppComponent {
  heroes: string[] = ['Kyoz', 'Saitama'];
  testList: string[] = ['1', '2', '3'];
  dateFormat: 'shortDate' | 'fullDate' = 'shortDate';

  today: Date = new Date();

  toggleDateFormat() {
    this.dateFormat = this.dateFormat === 'fullDate' ? 'shortDate' : 'fullDate';
  }

  updateListReference() {
    this.heroes = [...this.heroes];
  }
}
