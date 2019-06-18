import {RouterModule, Routes} from '@angular/router';
import {LoginEventManagerComponent} from './components/login-event-manager/login-event-manager.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {HomepageEventmanagerComponent} from './components/homepage-eventmanager/homepage-eventmanager.component';
import {CustomerOverviewComponent} from './components/customer/customer-overview/customer-overview.component';
import {CustomerCreateComponent} from './components/customer/customer-create/customer-create.component';
import {EventmanagerReserveringenComponent} from './components/eventmanager-reserveringen/eventmanager-reserveringen.component';
import {EventmanagerEventsComponent} from './components/eventmanager-events/eventmanager-events.component';
import {SupplierOverviewComponent} from './components/supplier/supplier-overview/supplier-overview.component';
import {EventmanagerInstructeursComponent} from './components/instructor/instructor-overview/eventmanager-instructeurs.component';
import {EventmanagerEventmanagersComponent} from './components/werknemers/eventmanager-overview/eventmanager-eventmanagers.component';
import {EventmanagerAgendaComponent} from './components/eventmanager-agenda/eventmanager-agenda.component';
import {CustomerUpdateComponent} from './components/customer/customer-update/customer-update.component';
import {AuthGuard} from './services/auth.guard.service';
import {HomepageInstructorComponent} from './components/homepage-instructor/homepage-instructor.component';
import {InstructorCreateComponent} from './components/instructor/instructor-create/instructor-create.component';
import {InstructorUpdateComponent} from './components/instructor/instructor-update/instructor-update.component';
import {InstructorDetailsComponent} from './components/instructor/instructor-details/instructor-details.component';
import {SupplierCreateComponent} from './components/supplier/supplier-create/supplier-create.component';
import {SupplierUpdateComponent} from './components/supplier/supplier-update/supplier-update.component';
import {EventsCreateComponent} from './components/eventmanager-events/events-create/events-create.component';
import {EventsUpdateComponent} from './components/eventmanager-events/events-update/events-update.component';
import {EventmanagerCreateComponent} from './components/werknemers/eventmanager-create/eventmanager-create.component';
import {EventmanagerUpdateComponent} from './components/werknemers/eventmanager-update/eventmanager-update.component';
import {CustomerDetailsComponent} from './components/customer/customer-details/customer-details.component';
import {CateringOverviewComponent} from './components/catering/catering-overview/catering-overview.component';
import {CateringCreateComponent} from './components/catering/catering-create/catering-create.component';
import {CateringDetailsComponent} from './components/catering/catering-details/catering-details.component';
import {CateringUpdateComponent} from './components/catering/catering-update/catering-update.component';
import {WerknemersDetailsComponent} from './components/werknemers/werknemers-details/werknemers-details.component';
import {SupplierDetailsComponent} from './components/supplier/supplier-details/supplier-details.component';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'loginpage', component: LoginEventManagerComponent},
  {path: 'homeeventmanager', component: HomepageEventmanagerComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/supplieroverview', component: SupplierOverviewComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/supplieroverview/createsupplier', component: SupplierCreateComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/supplieroverview/supplieredit/:supplierid', component: SupplierUpdateComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/supplieroverview/supplierdetails/:supplierid', component: SupplierDetailsComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/customeroverview', component: CustomerOverviewComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/customeroverview/createcustomer', component: CustomerCreateComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/reserveringenoverview', component: EventmanagerReserveringenComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/evenementenoverview', component: EventmanagerEventsComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/werknemersoverview', component: EventmanagerEventmanagersComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/instructeursoverview', component: EventmanagerInstructeursComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/horecaoverview', component: CateringOverviewComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/horecaoverview/createcatering', component: CateringCreateComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/horecaoverview/cateringedit/:id', component: CateringUpdateComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/horecaoverview/cateringdetails/:id', component: CateringDetailsComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/agenda', component: EventmanagerAgendaComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/evenementenoverview/createevenement', component: EventsCreateComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/evenementenoverview/eventedit', component: EventsUpdateComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/evenementenoverview/eventedit/:eventId', component: EventsUpdateComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/customeroverview/customeredit', component: CustomerUpdateComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/customeroverview/customeredit/:customerId', component: CustomerUpdateComponent, canActivate: [AuthGuard]},
  {path: 'homeinstructor', component: HomepageInstructorComponent, canActivate: [AuthGuard]},
  {path: 'homeinstructor/supplieroverview', component: SupplierOverviewComponent, canActivate: [AuthGuard]},
  {path: 'homeinstructor/customeroverview', component: CustomerOverviewComponent, canActivate: [AuthGuard]},
  {path: 'homeinstructor/reserveringenoverview', component: EventmanagerReserveringenComponent, canActivate: [AuthGuard]},
  {path: 'homeinstructor/evenementenoverview', component: EventmanagerEventsComponent, canActivate: [AuthGuard]},
  {path: 'homeinstructor/werknemersoverview', component: EventmanagerEventmanagersComponent, canActivate: [AuthGuard]},
  {path: 'homeinstructor/instructeursoverview', component: EventmanagerInstructeursComponent, canActivate: [AuthGuard]},
  {path: 'homeinstructor/horecaoverview', component: CateringOverviewComponent, canActivate: [AuthGuard]},
  {path: 'homeinstructor/agenda', component: EventmanagerAgendaComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/instructeursoverview/createinstructor', component: InstructorCreateComponent, canActivate: [AuthGuard]},
  {
    path: 'homeeventmanager/instructeursoverview/instructoredit/:instructor_id',
    component: InstructorUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'homeeventmanager/instructeursoverview/instructordetails/:instructor_id',
    component: InstructorDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'homeeventmanager/customeroverview/customerdetails/:customer_id',
    component: CustomerDetailsComponent,
    canActivate: [AuthGuard]
  },
  {path: 'homeeventmanager/werknemersoverview/createeventmanager', component: EventmanagerCreateComponent, canActivate: [AuthGuard]},
  {
    path: 'homeeventmanager/werknemersoverview/employeeedit/:employeeId',
    component: EventmanagerUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'homeeventmanager/werknemersoverview/employeedetails/:employeeId',
    component: WerknemersDetailsComponent,
    canActivate: [AuthGuard]
  },

  {path: '**', component: HomepageComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
