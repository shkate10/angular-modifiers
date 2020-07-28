import { Component } from "@angular/core";
import { LayoutWrapper } from "./layout-wrapper/layout-wrapper.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  LayoutWrapper = LayoutWrapper;
}
