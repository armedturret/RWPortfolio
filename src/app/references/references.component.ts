import { Component } from '@angular/core';

import { Reference } from '../reference';
import { ReferenceService } from '../reference.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent {
  references: Reference[] = [];
  
  constructor(private referenceService : ReferenceService) {}

  ngOnInit(): void {
    this.getReferences();
  }

  getReferences(): void {
    this.referenceService.getReferences()
      .subscribe(references => this.references = references);
  }
}
