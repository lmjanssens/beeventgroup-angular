import {Component, OnInit} from '@angular/core';
import {Instructor} from '../../../models/instructor.model';
import {User} from '../../../models/user.model';
import {NgForm} from '@angular/forms';
import {Globals} from '../../globals';

@Component({
  selector: 'app-instructor-create',
  templateUrl: './instructor-create.component.html',
  styleUrls: ['./instructor-create.component.css']
})
export class InstructorCreateComponent implements OnInit {
  instructor: Instructor = new Instructor();
  user: User = new User();
  password2: string;
  password1: string;

  constructor(private globals: Globals) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('instructeurFormulier');
  }

  ngSubmit(f: NgForm) {
    if (this.password1 === this.password2) {
      this.password1 = this.user.password;
    }

  }
}
