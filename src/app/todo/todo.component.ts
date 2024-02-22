import { Component } from '@angular/core';

import { DbArr } from '../DB/Task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  data = DbArr;


  completeHandler(event: Event) {
    const liElement = <HTMLDivElement>((<HTMLButtonElement>event.target).parentElement?.parentElement)
    liElement.classList.add('completed')
    console.log(liElement);
  }
}
