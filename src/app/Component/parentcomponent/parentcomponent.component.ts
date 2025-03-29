import { Component } from '@angular/core';
import { ChildcomponentComponent } from '../childcomponent/childcomponent.component';

@Component({
  selector: 'app-parentcomponent',
  standalone: true,
  imports: [ChildcomponentComponent],
  templateUrl: './parentcomponent.component.html',
  styleUrl: './parentcomponent.component.scss'
})
export class ParentcomponentComponent {
  product = { name: 'Laptop',img:'https://placehold.co/600x400', price: 1200 };
  messageFromChild: string = '';
  handleChildMessage(event: string) {
    this.messageFromChild = event;
  }
}
