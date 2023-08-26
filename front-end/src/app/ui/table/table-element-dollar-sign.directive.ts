import { Directive, HostBinding } from '@angular/core';
import { TABLE_CLASS } from './constants';

/**
 * Adds a dollar sign to the beginning of the element
 */
@Directive({ selector: '[appTableElementDollarSign]' })
export class TableElementDollarSignDirective {
  @HostBinding(`class.${TABLE_CLASS}-element`) tableElementClass = true;
  @HostBinding(`class.${TABLE_CLASS}-element--dollar-sign`)
  tableElementDollarSignClass = true;
}
