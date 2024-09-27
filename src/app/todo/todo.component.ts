import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newItem: string = '';
  activeTab: string = 'incomplete';
  incompleteItems: string[] = ['Get Grocery', 'Complete trainings', 'Pay Bills'];
  completedItems: string[] = [];

  addItem() {
    if (this.newItem.trim()) {
      this.incompleteItems.push(this.newItem.trim());
      this.newItem = '';
    }
  }

  deleteItem(item: string) {
    this.incompleteItems = this.incompleteItems.filter(i => i !== item);
    this.completedItems = this.completedItems.filter(i => i !== item);
  }

  markComplete(item: string) {
    this.completedItems.push(item);
    this.deleteItem(item);
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }
}