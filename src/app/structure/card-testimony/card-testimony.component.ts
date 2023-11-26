import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-testimony',
  templateUrl: './card-testimony.component.html',
  styleUrl: './card-testimony.component.css'
})
export class CardTestimonyComponent {
  @Input()
  title: string="";
  @Input()
  text: string="";

}
