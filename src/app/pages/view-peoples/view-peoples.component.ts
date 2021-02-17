import { ToastrService } from 'ngx-toastr';
import { SelectedNumbersDto } from './../../dtos/slected-numbers.dto';
import { NumberService } from './../../services/number.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-peoples',
  templateUrl: './view-peoples.component.html',
  styleUrls: ['./view-peoples.component.scss']
})
export class ViewPeoplesComponent implements OnInit {

  peoples: SelectedNumbersDto[] = [];
  ready: boolean = false;

  constructor(
    private numberService: NumberService,
    private toastrService: ToastrService
  ) { }
   
  ngOnInit(): void {
    this.getAlreadyTakenNumbers();
  }

  getAlreadyTakenNumbers() {
    this.numberService.getAlreadyTakenNumbers().subscribe(
      result => {
        this.peoples = result;
        console.log(this.peoples);
        this.ready = true;
      },
      error => {
        this.showError(error);
      }
    )
  }

  showError(error: any) {
    this.toastrService.error((error.message || 'Unexpected Error'), 'Erro', {
      progressBar: true,
      progressAnimation: 'decreasing'
    })
  }

}
