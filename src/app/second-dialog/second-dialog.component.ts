import {Component, ViewEncapsulation} from '@angular/core';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-second-dialog',
  templateUrl: './second-dialog.component.html',
  styleUrls: ['./second-dialog.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  providers: [ConfirmationService]
})
export class SecondDialogComponent {

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
