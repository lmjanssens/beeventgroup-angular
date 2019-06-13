import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {Instructor} from '../../../models/instructor.model';
import {InstructorService} from '../../../services/instructor.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Globals} from '../../globals';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-instructor-update',
  templateUrl: './instructor-update.component.html',
  styleUrls: ['./instructor-update.component.css']
})
export class InstructorUpdateComponent implements OnInit {

  instructor = new Instructor();
  user = new User();
  private sub: any;
  currentId: number;

  constructor(private instructorService: InstructorService,
              private route: ActivatedRoute, private router: Router, private globals: Globals) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('instructeurFormulier');
    this.instructor.user_id = null;
    this.instructor.first_name = '';
    this.instructor.infix = '';
    this.instructor.last_name = '';
    this.instructor.email_address = '';

    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.instructor_id;
      console.log(this.currentId);
      this.instructorService.getById(this.currentId).subscribe(instructor => {
        this.instructor = instructor;
      });
    });
  }

  ngSubmit(f: NgForm) {
    const data = JSON.parse(JSON.stringify(this.instructor)) as any;
    this.instructorService.updateInstructor(data).subscribe(() => {
      this.router.navigate(['/homeeventmanager/instructeursoverview']);
    });
  }
}
