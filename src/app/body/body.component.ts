import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  ngOnInit() {
  }

  public formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    return value;
  }
}
