import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-first-button',
  templateUrl: './first-button.component.html',
  styleUrls: ['./first-button.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class FirstButtonComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
