import {Component, OnInit} from '@angular/core';
import {Instructor} from '../../../models/instructor.model';
import {User} from '../../../models/user.model';
import {InstructorService} from '../../../services/instructor.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Globals} from '../../globals';
import {Location} from '@angular/common';

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.css']
})
export class InstructorDetailsComponent implements OnInit {

  instructor = new Instructor();
  user = new User();
  private sub: any;
  currentId: number;

  constructor(private instructorService: InstructorService,
              private route: ActivatedRoute, private router: Router, private globals: Globals, private location: Location) {
  }

  ngOnInit() {
    this.globals.setHuidigePagina('instructeurFormulier');

    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.instructor_id;
      console.log(this.currentId);
      this.instructorService.getById(this.currentId).subscribe(instructor => {
        this.instructor = instructor;
      });
    });
  }

  onDelete() {
    if (!confirm(`Wilt u de instructeur "${this.instructor.first_name + ' ' + this.instructor.last_name}" verwijderen ?`)) {
      return;
    }
    this.instructorService.delete(this.currentId).subscribe(() => {
      this.location.back();
    });
  }
}
