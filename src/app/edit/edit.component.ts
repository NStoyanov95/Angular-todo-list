import { Component, Input } from '@angular/core';

import { DbArr } from '../DB/Task'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @Input() display = '';
  @Input() id = '';
  @Input() task: string | undefined
  data = DbArr;



  updateHandler(event: Event, inputValue: string) {

    const id = Number(this.id);
    const matchIndex = this.data.findIndex(x => x._id == id);

    this.data[matchIndex].task = inputValue;
        
    this.display = 'none';

  }

  cancelHandler() {
    this.display = 'none';
  }

}
