import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-gi-home',
    templateUrl: './gi-home.component.html',
    styleUrls: ['./gi-home.component.css'],
    imports: [RouterLink]
})
export class GiHomeComponent {
  public links = [
    ["Basic Assignment 1", "assn1"],
    ["Basic Assignment 2", "assn2"],
    ["Basic Assignment 3", "assn3"],
    ["Advanced - KD Trees", "advanced-kd"],
    ["Basic Assignment 4", "assn4"],
    ["Basic Assignment 5", "assn5"],
    ["Advanced - Photon Mapping", "advanced-photon-map"],
  ]
}
