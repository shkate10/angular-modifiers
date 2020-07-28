import {Component, HostBinding, Input} from '@angular/core';
import {LayoutWrapper} from './layout-wrapper.model';

@Component({
  selector: 'app-layout-wrapper',
  templateUrl: './layout-wrapper.component.html',
  styleUrls: ['./layout-wrapper.component.scss']
})
export class LayoutWrapperComponent {

  @Input() alignment: LayoutWrapper = LayoutWrapper.VERTICAL;

  @HostBinding('class') get hostClass(): string {
    return `host-class ${this.styleClass}`.trim();

  }

  private cssClasses: object = {
    [LayoutWrapper.HORIZONTAL]: 'horizontal-container',
    [LayoutWrapper.VERTICAL]: 'vertical-container'
  };

  get styleClass(): string {
    return this.cssClasses[this.alignment];
  }
}
