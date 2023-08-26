import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { RAW_VALUE_ATTRIBUTE_NAME } from './raw-value-attribute-name';

@Directive({
  selector: 'th[appTableToCsvRawValue],td[appTableToCsvRawValue]',
})
export class TableToCsvRawValueDirective implements OnInit {
  // By using setAttribute, this number will be converted to string anyway
  @Input() appTableToCsvRawValue: number | string;

  constructor(
    private readonly _renderer2: Renderer2,
    private readonly _elementRef: ElementRef,
  ) {}

  ngOnInit(): void {
    if (
      this.appTableToCsvRawValue !== null &&
      this.appTableToCsvRawValue !== undefined
    ) {
      this._renderer2.setAttribute(
        this._elementRef.nativeElement,
        RAW_VALUE_ATTRIBUTE_NAME,
        this.appTableToCsvRawValue.toString(),
      );
    }
  }
}
