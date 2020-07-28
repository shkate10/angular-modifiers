import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DialogModule } from "primeng/dialog";
import { AppComponent } from "./app.component";
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";
import { SuccessAlertComponent } from "./success-alert/success-alert.component";
import { DialogComponent } from "./confirmation-dialog/dialog.component";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SecondDialogComponent } from "./second-dialog/second-dialog.component";
import { ButtonComponent } from "./button/button.component";
import { FirstDialogComponent } from "./first-dialog/first-dialog.component";
import { FirstButtonComponent } from "./first-button/first-button.component";
import { LayoutWrapperComponent } from "./layout-wrapper/layout-wrapper.component";
import { ModalDialogComponent } from "./modal-dialog/modal-dialog.component";
import { FirstModalDialogComponent } from "./first-modal-dialog/first-modal-dialog.component";
import { SecondModalDialogComponent } from "./second-modal-dialog/second-modal-dialog.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    DialogModule
  ],
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DialogComponent,
    SecondDialogComponent,
    ButtonComponent,
    FirstDialogComponent,
    FirstButtonComponent,
    LayoutWrapperComponent,
    ModalDialogComponent,
    FirstModalDialogComponent,
    SecondModalDialogComponent
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
