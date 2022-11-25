import { Component } from '@angular/core';
import {Item} from './item';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  filter: 'all'| 'active'| 'done' = 'all';
  allItems = [
    {description: 'eat', done: false},
    {description: 'study', done: false},
    {description: 'sleep', done: false},
    {description: 'develop a todo-app', done: true}
  ];
  addItem(description: string){
    this.allItems.unshift({
      description,
      done:false
    })
  }

   remove(item:Item){
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }


  get items() {
    if(this.filter === 'all'){
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter ==='done' ? item.done : !item.done);
  }

 
 
 
 
 
 

 
}
