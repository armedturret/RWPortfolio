import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor( private router: Router) {}

  ngOnInit(): void {
    window.open("/assets/RWhiteResume.pdf", "_blank");
    this.router.navigateByUrl("/home");
  }
}
