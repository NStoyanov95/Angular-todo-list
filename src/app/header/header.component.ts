import { Component } from '@angular/core';

import { DbArr } from '../DB/Task';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  getTask(event:Event,task: string){
    DbArr.push({
      _id: DbArr.length+1,
      task
    });

    const  inputField = <HTMLInputElement>(<HTMLDivElement>(<HTMLButtonElement>event.target).parentElement).querySelector('.todo-input')
    inputField.value = "";    
  }

}
