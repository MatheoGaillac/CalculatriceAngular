import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-calculette',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './calculette.component.html',
  styleUrl: './calculette.component.css'
})
export class CalculetteComponent {
  public resultat: Number = 0;
  public calculatrice: FormGroup;

  calcul(): void {
    this.resultat = eval(
      'parseFloat(this.operande1.value) ' +
      this.operateur.value +
      ' parseFloat(this.operande2.value)'
    )};


  public operande1: FormControl
    = new FormControl<Number>(0, [
    Validators.min(1),
    Validators.required]);
  public operateur: FormControl
    = new FormControl<string | null>('+', Validators.required);
  public operande2: FormControl
    = new FormControl<Number>(0,[
      Validators.min(1),
      Validators.required
  ]);

  constructor() {
    this.calculatrice = new FormGroup({
      operande1: this.operande1,
      operateur: this.operateur,
      operande2: this.operande2,
    });
  }
}
