import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() icon: string;
  @Input() label: string;
  @Input() styleClass: string;

  @HostBinding('class') get hostClass(): string {
    return 'button';
  }
}
