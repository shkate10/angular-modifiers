import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']

})
export class DialogComponent {
  @Input() icon = 'pi pi-exclamation-triangle';
  @Input() header = 'Dialog header';
  @Input() class = '';

  get dialogStyleClass(): string {
    return `app-modal-dialog ${this.class}`.trim();
  }
}
