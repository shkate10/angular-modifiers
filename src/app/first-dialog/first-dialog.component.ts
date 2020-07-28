import { Component } from '@angular/core';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-first-dialog',
  templateUrl: './first-dialog.component.html',
  styleUrls: ['./first-dialog.component.scss'],
  providers: [ConfirmationService]
})
export class FirstDialogComponent {

  constructor(private confirmationService: ConfirmationService) {
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
      }
    });
  }
}
