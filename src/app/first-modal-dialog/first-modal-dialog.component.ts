import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-modal-dialog',
  templateUrl: './first-modal-dialog.component.html',
  styleUrls: ['./first-modal-dialog.component.css']
})
export class FirstModalDialogComponent {

  @Input() showDialog = true;
  display = false;
}
