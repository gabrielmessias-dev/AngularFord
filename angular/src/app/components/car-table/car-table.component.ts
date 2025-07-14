import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-table',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './car-table.component.html',
  styleUrl: './car-table.component.css'
})
export class CarTableComponent implements OnChanges {
  @Input() vin: string = '';
  @Input() odometro: number = 0;
  @Input() nivelCombustivel: number = 0;
  @Input() status: string = '';
  @Input() lat: number = 0;
  @Input() long: number = 0;

  @Output() buscarVin = new EventEmitter<string>();

  vinDigitado: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['vin'] && changes['vin'].currentValue !== undefined) {
      this.vinDigitado = this.vin;
    }
  }

  buscarPorVin() {
    if (this.vinDigitado.trim()) {
      this.buscarVin.emit(this.vinDigitado.trim());
    }
  }
}
