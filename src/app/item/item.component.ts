import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Item } from '../item';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  editable = false;
  closeResult: any;

  @Input() item!: Item;
  @Input() newItem!: string;
  @Output() putTodosEvent = new EventEmitter<{
    description: string;
    id: number;
  }>();
  @Output() remove = new EventEmitter<Item>();
  @Output() updateStatus = new EventEmitter<Item>();
  @Output() itemClick = new EventEmitter<Item>();

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  done(item: Item) {
    item.completed = !item.completed;
    console.log(item);

    // item.done = false;
  }

  updatePost(item: Item) {
    this.updateStatus.emit(item);
  }
  ItemClick(item: Item) {
    this.itemClick.emit(item);
  }

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
  }
  handleSaveItem(description: string, id: number) {
    this.saveItem(description);
    this.putTodosEvent.emit({ description, id });
  }
  // handleEditItem(description:string, id:number){
  // this.editable = true;
  // this.putTodos.emit({ description, id })
  // }
  //
}
