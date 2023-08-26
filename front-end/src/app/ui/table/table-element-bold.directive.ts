import { Directive, HostBinding } from '@angular/core';
import { TABLE_CLASS } from './constants';

@Directive({ selector: '[appTableElementBold]' })
export class TableElementBoldDirective {
  @HostBinding(`class.${TABLE_CLASS}-element`) tableElementClass = true;
  @HostBinding(`class.${TABLE_CLASS}-element--bold`) tableElementBoldClass =
    true;
}
