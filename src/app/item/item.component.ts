import { Component, Input, Output,EventEmitter } from '@angular/core';
import {Item} from '../item';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  editable = false;

  @Input() item!: Item;
  @Input() newItem!: string;
  @Output() putTodosEvent = new EventEmitter<{description:string, id:number}>();
  @Output() remove = new EventEmitter<Item>();
  @Output() putTodos = new EventEmitter<{description:string, id:number}>();

  


  saveItem(description: string){
    if(!description) return;
    this.editable = false;
    this.item.description = description;
  }
  handleSaveItem(description:string, id:number){
    this.saveItem(description)
    this.putTodosEvent.emit({description,id})
    
    

  }
  // handleEditItem(description:string, id:number){
    // this.editable = true;
    // this.putTodos.emit({ description, id })
  // }
  // 


}
