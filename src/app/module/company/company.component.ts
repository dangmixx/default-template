import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TranslateService } from '@ngx-translate/core';
import { BarCodeInterface, GridData } from 'src/app/model/bar-code.interface';

export function CustomPaginator(translate: TranslateService) {
  const customPaginatorIntl = new MatPaginatorIntl();
  customPaginatorIntl.itemsPerPageLabel = translate.instant(
    'table.label-paging'
  );
  console.log(translate.instant('title'));

  customPaginatorIntl.getRangeLabel = (
    page: number,
    pageSize: number,
    length: number
  ) => {
    if (length === 0 || pageSize === 0) {
      return `0 ${translate.instant('title')} ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;
    return `${startIndex + 1} – ${endIndex} ${translate.instant(
      'table.of-items'
    )} ${length}`;
  };
  return customPaginatorIntl;
}
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public gridDataOrders: GridData<any> = {
    data: [
      {
        orderNo: '',
        createdOn: '',
        state: '',
        total: '',
      },
    ],
    total: 1,
  };
  filterOrder: any;
  displayedColumns: string[] = ['orderNo', 'createdOn', 'state', 'total'];
  constructor() {}

  ngOnInit(): void {}
  sortData(data) {}
}
