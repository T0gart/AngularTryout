import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hobby',
  template: `
  <li (click)="onRemoveHobby()"> {{ hobbyName }}</li>
  `,
  styleUrls: ['../app.component.css']
})
export class HobbyComponent {

    @Input() hobbyName: string;
    @Output() hobbyRemoved = new EventEmitter<string>();

    onRemoveHobby() {
      this.hobbyRemoved.emit(this.hobbyName);
    }
  }
