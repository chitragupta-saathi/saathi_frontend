import { Component, OnInit } from '@angular/core';
import { Loader } from './../../providers/loader';
declare var drawChart;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  chartData = ['temp', 'ecg', 'emg', 'res', 'cv']
  chartTitle = {
    temp: 'Body Temperature',
    ecg: 'ECG',
    emg: 'EMG',
    res: 'Resistance',
    cv: 'Conductance Voltage'
  }
  constructor() { }

  ngOnInit() {
    Loader.present();
    setTimeout(value => {
      for (let i in this.chartData) {
        if (i) {
          drawChart(this.chartData[i]);
            if(Number(i) === (this.chartData.length - 1)) {
              Loader.dismiss();
            }
        }
      }
    }, 1000);
  }
}
