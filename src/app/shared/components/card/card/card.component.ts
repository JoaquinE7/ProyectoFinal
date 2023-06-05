import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() nom:string = ''
  @Input() resume: string = ''
  @Input() img1: string = ''
  @Input() img2: string = ''
  @Input() link1: string = ''
  @Input() link2: string = ''
}
