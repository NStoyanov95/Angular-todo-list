import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';

  isShow = false
  display = 'none'
  id = ''
  task:string|undefined

  onEdit(event: {id: number, task: string | undefined}) {
    this.isShow = !this.isShow
    this.display = this.isShow ? 'flex' : 'none'
    this.id = event.id.toString();
    this.task = event.task
  }

}
