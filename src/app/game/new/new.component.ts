import { Component, OnChanges, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { TableDimention } from './models/dimention';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  form!: FormGroup;
  dimentions: TableDimention = { rows: 3, cols: 6 };
  constructor(private formBuilder: FormBuilder) {}
  table: any = [];
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      rows: new FormControl(3, [Validators.min(1)]),
      cols: new FormControl(6, [Validators.min(1)]),
    });
    this.drawGrid();
    this.form.valueChanges.subscribe((val) => {
      this.dimentions = val;
      this.drawGrid();
    });
  }

  drawGrid() {
    if (this.form.valid) {
      const t = [...this.table];
      this.table = [];
      for (let o = 0; o < this.dimentions.rows; o++) {
        const t = [];
        for (let o = 0; o < this.dimentions.cols; o++) t.push('');
        this.table.push(t);
      }
      t.forEach((t, o) => {
        t.forEach((t, r) => {
          this.table[o] &&
            void 0 !== this.table[o][r] &&
            (this.table[o][r] = t);
        });
      });
    }
    console.log({ t: this.table });
  }

  handleCardClick(row,col){
    var color = prompt('insert color')
    console.log(row,col,color);
    
    this.table[row][col]=color
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}