import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  @Input() color = ""
  
  constructor() { }

  ngOnInit(): void {
  }

}
