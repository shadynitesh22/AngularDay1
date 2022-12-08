import { Injectable } from '@angular/core';
import * as filesaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class CsvService {


  constructor() { }


  csDownload(headers: any, form_data: any) {
    if (!form_data || !form_data.length) {
      return;
    }


    const separator = ',';

    const csv_content = headers.join(separator) +
      '\n' +

      form_data.  
        map((rowData: any) => {
          return headers
            .map((headKey: any) => {
              return rowData[headKey.toLowerCase().replaceAll(' ', '_')]
                ===
                null ||
                rowData[headKey.toLowerCase().replaceAll(' ', '_')] ===
                undefined ?
                ""
                : rowData[headKey.toLowerCase().replaceAll(' ', '_')];


            }).join(separator);

        }).join('/n');

    this.exportFile(csv_content, 'text/csv');

  }
  exportFile(data: any, fileType: string) {
    const blob = new Blob([data], { type: fileType });
    filesaver.saveAs(blob, 'NewOrders.csv',);
  }
}

