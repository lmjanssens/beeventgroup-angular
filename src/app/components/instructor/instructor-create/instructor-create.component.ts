import {Component, OnInit} from '@angular/core';
import {Instructor} from '../../../models/instructor.model';
import {User} from '../../../models/user.model';
import {NgForm} from '@angular/forms';
import {Globals} from '../../globals';
import {CustomerService} from '../../../services/customer.service';
import {Router} from '@angular/router';
import {AlertsService} from 'angular-alert-module';
import {InstructorService} from '../../../services/instructor.service';

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

  constructor(private globals: Globals, private instructorService: InstructorService,
              private router: Router) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('instructeurFormulier');
  }

  toevoegAlert() {
    if (this.instructor.infix !== undefined || this.instructor.infix !== '' || this.instructor.infix !== null) {
      alert('De instructeur ' + this.instructor.first_name + ' ' +
        this.instructor.infix + ' ' + this.instructor.last_name + ' is toegevoegd.');
    } else {
      alert('De instructeur ' + this.instructor.first_name + ' ' + this.instructor.last_name + ' is toegevoegd.');
    }
  }

  ngSubmit(f: NgForm) {
    if (this.password1 === this.password2) {
      this.instructor.user_id = this.user;
      this.user.password = this.password1;
      const data = JSON.parse(JSON.stringify(this.instructor)) as any;
      console.log(data);
      this.instructorService.save(data).subscribe(() => {
        setTimeout(() => {
          this.router.navigate(['/homeeventmanager/instructeursoverview']
          );
        }, 1000);
      });
      (document.getElementById('submit') as HTMLInputElement).disabled = true;
      this.toevoegAlert();
    } else {
    }

  }
}
