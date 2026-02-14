import { Component } from '@angular/core';

@Component({
    selector: 'app-gi-home',
    templateUrl: './gi-home.component.html',
    styleUrls: ['./gi-home.component.css'],
    standalone: false
})
export class GiHomeComponent {
  public links = [
    ["Basic Assignment 1", "assn1"],
    ["Basic Assignment 2", "assn2"],
    ["Basic Assignment 3", "assn3"],
    ["Advanced - KD Trees", "advanced-kd"]
  ]
}
