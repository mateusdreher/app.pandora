import { SelectedNumbersDto } from './../../dtos/slected-numbers.dto';
import { INumberRegister } from './../../interfaces/number-register.interface';
import { NumberService } from './../../services/number.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-number',
  templateUrl: './select-number.component.html',
  styleUrls: ['./select-number.component.scss']
})
export class SelectNumberComponent implements OnInit {

  formSelectNumber: FormGroup;
  numbersToShow: Array<number> = [0];
  nextGift: string = '';
  ready: boolean = false;
  showSize: boolean = false;
  numberToRegister: INumberRegister = { people_name: '', gift: '', chosen_number: 0 };
  inputNameHasFocus: boolean = false;
  inputGiftHasFocus: boolean = false;
  showModal: boolean = true;
  showLoader: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private numberService: NumberService,
    private toastService: ToastrService,
    private router: Router
  ) { 
    this.formSelectNumber = this.formBuilder.group({
      name: ['', [Validators.required]],
      number: [0, [Validators.required]],
      gift: ['', [Validators.required]],
      size: ['']
    });
  }

  ngOnInit(): void {
    this.getAlreadyTakenNumbers();
    this.getNextGift();
  }

  registerNumber() {

    if (!this.formSelectNumber.valid) {
      this.showError({message: 'Por favor preencha os campos'});
      return;
    }

    const gift = this.formSelectNumber.controls.gift.value;
    const size = this.formSelectNumber.controls.size.value;

    if (gift === 'diaper' || gift === 'diaperAndAny') {

      if (size === '') {
        this.showError({ message: 'Por favor selecione o tamanho' });
        return;
      }

      if (size === 'p') {
        this.numberToRegister.gift = '5fff7b86a4fe8c11d1f881c5';
      }

      if (size === 'm') {
        this.numberToRegister.gift = '5fff7ca2a4fe8c11d1f881c6';
      }

      if (size === 'g') {
        this.numberToRegister.gift = '5fff7cd2a4fe8c11d1f881c7';
      }

    } else if (gift === 'any') {
      this.numberToRegister.gift = '5fff7cf1a4fe8c11d1f881c8';
    }
    
    this.numberToRegister.people_name = this.formSelectNumber.controls.name.value;
    this.numberToRegister.chosen_number = this.formSelectNumber.controls.number.value;

    this.showLoader = true;

    this.numberService.selectNumber(this.numberToRegister).subscribe(
      result => {
        this.showSuccess('Número registrado com sucesso. Boa Sorte!');
        this.router.navigate(['/good-luck'], { queryParams: {number: this.formSelectNumber.controls.number.value }})
      },
      error => this.showError({ message: 'Erro ao registrsr número. Tente novamente' })
    )

  }

  setShowSize(event: any) {
    const value = event.target.value;

    if (value === 'diaper' || value === 'diaperAndAny') {
      this.showSize = true;
    }
    else {
      this.showSize = false;
    }
  }

  numberToShow(result: Array<SelectedNumbersDto>) {
    let alreadyExists: boolean;
    console.log(result);
    result = result.sort();
    
    for (let i = 0; i < 200; i++) {
      alreadyExists = false;

      if (alreadyExists) {
        return;
      }

      result.forEach((item, index) => {
        if (i === item.chosen_number) {
          alreadyExists = true;
          return;
        }

      });

      this.numbersToShow.forEach((element) => {

        if (i === element) {
          alreadyExists = true;
          return;
        }
      });

      if (!alreadyExists) {
        this.numbersToShow.push(i);
      }
    }

    
  }

  nextGiftToShow(result: any) {
    this.nextGift = result;
    this.ready = true;
  }

  getAlreadyTakenNumbers() {
    this.numberService.getAlreadyTakenNumbers().subscribe(
      result => this.numberToShow(result),
      error => {
        this.showError(error);
      }
    )
  }

  getNextGift() {
    this.numberService.getNextGift().subscribe(
      result => this.nextGiftToShow(result),
      error => this.showError(error)
    )
  }


  showError(error: any) {
    this.toastService.error((error.message || 'Unexpected Error'), 'Erro', {
      progressBar: true,
      progressAnimation: 'decreasing'
    })
  }

  showSuccess(message: string) {
    this.toastService.success(message, 'Sucesso', {
      progressBar: true,
      progressAnimation: 'decreasing'
    });
  }
}
