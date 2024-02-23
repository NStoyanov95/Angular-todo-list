import { Component, EventEmitter, Output } from '@angular/core';

import { DbArr } from '../DB/Task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Output() onEdit = new EventEmitter<{id:number, task:string|undefined}>()
  data = DbArr;
  

  completeHandler(event: Event) {
    const liElement = <HTMLDivElement>((<HTMLButtonElement>event.target).parentElement?.parentElement);
    console.log(liElement);

    liElement.classList.add('completed');
  }

  deleteHandler(event: Event) {
    console.log(event.target);
    
    const liElement = <HTMLDivElement>((<HTMLButtonElement>event.target).parentElement?.parentElement);
    const id: number =  Number(liElement.id);
    const i = this.data.findIndex(x => x._id == id);
    this.data.splice(i, 1);
  }

  editHandler(event: Event){
    const liElement = <HTMLDivElement>((<HTMLButtonElement>event.target).parentElement?.parentElement);
    const id: number =  Number(liElement.id);
    const task = this.data.find(x => x._id == id)?.task
    
    this.onEdit.emit({id, task});
  }



}
