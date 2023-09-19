import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Reference } from './reference';

@Injectable({
  providedIn: 'root'
})

/*
export interface Reference{
  name: string,
  role: string,
  company: string,
  email: string,
  phone_num: string,
  ref_letter: string
}
*/
export class ReferenceService {
  constructor() { }

  private references: Reference[] = [
    {name: "Jacob Sorenson", role: "Sr. Engineering Manager", company: "Collins Aerospace",
      email: "Jacob.Sorenson@email.com", phone_num: "+1-319-538-1988", ref_letter: "/assets/JS_ReferenceLetter.pdf"},
    {name: "Reed Kovach", role: "Sr. Principle Engineer", company: "Collins Aerospace",
      email: "Reed.Kovach@collins.com", phone_num: "+1-319-263-9073", ref_letter: "/assets/RK_ReferenceLetter.pdf"},
    {name: "Jeff Brockway", role: "Lead Mentor", company: "FIRST Robotics Team 2342",
      email: "jeff.brockway@team2342.org", phone_num: "+1-603-475-2014", ref_letter: ""}
  ]

  getReferences(): Observable<Reference[]> {
    return of(this.references);
  }
}
