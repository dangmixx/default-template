import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BarCodeInterface, GridData } from 'src/app/model/bar-code.interface';
import { DataService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  options = [1, 2, 3, 4, 5];
  myControl = new FormControl();
  barCodeList: GridData<BarCodeInterface> = {
    data: [],
    total: 0,
  };

  codeAdd: BarCodeInterface;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getData();
  }
  submitForm() {
    console.log(this.myControl.value);
    const item: BarCodeInterface = {
      code: this.myControl.value,
      format: 'QR_CODE',
      type: 'QR_CODE',
      value: (Math.random() * 10000000).toFixed(0),
    };
    this.barCodeList.data.unshift(item);
    this.myControl.reset();
  }

  getData() {
    this.dataService.getData().subscribe((data) => {
      this.barCodeList = data;
      this.codeAdd = data.data[0];
    });
  }
}
