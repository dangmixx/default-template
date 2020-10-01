import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/service/data-service.service';
import { BarCodeInterface, GridData } from './model/bar-code.interface';
import { TranslateService } from '@ngx-translate/core';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  listData: GridData<BarCodeInterface> = {
    data: [],
    total: 0,
  };
  showNavBar = true;
  isMobile: MediaQueryList;
  constructor(
    private dataService: DataService,
    private translate: TranslateService,
    private mediaMatcher: MediaMatcher
  ) {
    this.translate.setDefaultLang('vn');
    this.isMobile = mediaMatcher.matchMedia('(max-width: 600px)');
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe((data) => {
      console.log(data);
      this.listData = data;
    });
  }
}
