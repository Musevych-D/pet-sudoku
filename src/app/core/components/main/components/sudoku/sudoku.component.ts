import {Component, OnInit} from '@angular/core';
import {ISudokuField} from 'interfaces/sudoku';

@Component({
  selector: 'sdk-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.scss'],
})
export class SudokuComponent implements OnInit {
  public sudokuField: ISudokuField;

  constructor() {}

  ngOnInit() {
    this.sudokuField = this.generateField();
  }

  public generateField(): ISudokuField {
    const output: ISudokuField = {fieldRows: []};

    output.fieldRows = new Array(9).fill('').map((row, rowIndex) => {
      return {
        cells: new Array(9).fill('').map((cell, cellIndex) => {
          return {
            x: cellIndex + 1,
            y: rowIndex + 1,
            value: Math.floor(Math.random() * (9 - 1) + 1),
          };
        }),
      };
    });
    return output;
  }
}
