import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  standalone: true,
  imports: [],
  templateUrl: './childcomponent.component.html',
  styleUrl: './childcomponent.component.scss'
})
export class ChildcomponentComponent {
  @Input() productData!: { name: string; img:string; price: number };
  @Output() childEvent = new EventEmitter<string>();

  sendMessageToParent() {
    this.childEvent.emit('Thank you for the send message from parent!');
  }
}
