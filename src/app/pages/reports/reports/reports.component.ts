import { CategoryService } from './../../categories/shared/category.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import currencyFormarter from "currency-formatter";
import { Category } from '../../categories/shared/category.model';
import { Entry } from '../../entries/shared/entry.model';
import { EntryService } from '../../entries/shared/entry.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
 expenseTotal: any = 0;
 revenueTotal: any = 0;
 balance: any = 0;
 expenseChartData: any;
 revenueChartData: any;

 chartOptions = {
    scales: {
      yAxes: [
        {ticks: { beginAtZero: true }}
      ]
    }
 }

 categories: Category [] = [];
 entries: Entry [] = [];
 @ViewChild('month') month: ElementRef = null;
 @ViewChild('year') year: ElementRef = null;

  constructor(private entryService: EntryService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll()
    .subscribe(categories => this.categories = categories );
  }

  public generateReports(){
    const month = this.month.nativeElement.value;
    const year  = this.year.nativeElement.value;
    if (!month ||  !year ){
      alert('Você precisa selecionar o mês e o ano para gerar o relatório.');
    }
    else {
      this.entryService.getByMonthAndYear(month,year);
    }
    }
  }

}
