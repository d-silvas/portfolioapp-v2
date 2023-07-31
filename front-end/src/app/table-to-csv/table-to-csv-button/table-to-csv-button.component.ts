import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { RAW_VALUE_ATTRIBUTE_NAME } from '../raw-value-attribute-name';

@Component({
  selector: 'app-table-to-csv-button',
  templateUrl: './table-to-csv-button.component.html',
  styleUrls: ['./table-to-csv-button.component.scss'],
})
export class TableToCsvButtonComponent {
  @Input() table: HTMLTableElement;

  @ViewChild('downloadLink') linkElement: ElementRef;

  constructor(private readonly _renderer: Renderer2) {}

  downloadCsv() {
    const csvString = this.createCsvString(this.table);
    this.download(csvString);
  }

  createCsvString(table: HTMLTableElement): string {
    const allTrs = this.table.querySelectorAll('tr');
    let csvString = '';
    allTrs.forEach((tr) => {
      const tds = tr.querySelectorAll('td, th');
      tds.forEach((td) => {
        let value: string;
        const dataAttribute = td.getAttribute(RAW_VALUE_ATTRIBUTE_NAME);
        if (dataAttribute) {
          value = dataAttribute;
        } else {
          value = td.textContent.trim();
        }
        csvString += `${value},`;
      });
      csvString = csvString.replace(/,$/, '');
      csvString += '\n';
    });
    return csvString;
  }

  download(csvString: string) {
    const encodedUri = encodeURI(csvString);
    this._renderer.setAttribute(
      this.linkElement.nativeElement,
      'href',
      `data:attachment/csv,${encodedUri}`
    );
    this._renderer.setAttribute(
      this.linkElement.nativeElement,
      'target',
      '_blank'
    );
    this.linkElement.nativeElement.click();
  }
}
