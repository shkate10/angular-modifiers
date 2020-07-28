import {Component, Input, Output} from '@angular/core';
import {DialogState} from './modal-dialog.model';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent {
  // @Input() visible = false;
  @Input() showFooter = true;
  @Input() closable = false;
  @Input() styleClass = '';
  @Input() state = DialogState.DEFAULT;

  display = false;

  private cssClasses = {
    [DialogState.DEFAULT]: 'app-modal-dialog'
  };

  get dialogStyleClass(): string {
    return `${this.cssClasses[this.state]} ${this.styleClass}`.trim();
  }

  showDialog() {
    this.display = true;
  }
}
