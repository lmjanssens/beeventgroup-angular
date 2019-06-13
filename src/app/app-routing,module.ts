import {RouterModule, Routes} from '@angular/router';
import {LoginEventManagerComponent} from './components/login-event-manager/login-event-manager.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {HomepageEventmanagerComponent} from './components/homepage-eventmanager/homepage-eventmanager.component';
import {CustomerOverviewComponent} from './components/customer/customer-overview/customer-overview.component';
import {CustomerCreateComponent} from './components/customer/customer-create/customer-create.component';
import {EventmanagerReserveringenComponent} from './components/eventmanager-reserveringen/eventmanager-reserveringen.component';
import {EventmanagerEventsComponent} from './components/eventmanager-events/eventmanager-events.component';
import {SupplierOverviewComponent} from './components/supplier-overview/supplier-overview.component';
import {CateringOverviewComponent} from './components/catering-overview/catering-overview.component';

;
import {EventmanagerInstructeursComponent} from './components/instructor/instructor-overview/eventmanager-instructeurs.component';
import {EventmanagerEventmanagersComponent} from './components/eventmanager-werknemers/eventmanager-eventmanagers.component';
import {EventmanagerAgendaComponent} from './components/eventmanager-agenda/eventmanager-agenda.component';
import {CustomerUpdateComponent} from './components/customer/customer-update/customer-update.component';
import {AuthGuard} from './services/auth.guard.service';
import {InstructorCreateComponent} from './components/instructor/instructor-create/instructor-create.component';
import {InstructorUpdateComponent} from './components/instructor/instructor-update/instructor-update.component';
import {EventmanagerCreateComponent} from './components/eventmanager-werknemers/eventmanager-create/eventmanager-create.component';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'loginpage', component: LoginEventManagerComponent},
  {path: 'homeeventmanager', component: HomepageEventmanagerComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/supplieroverview', component: SupplierOverviewComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/customeroverview', component: CustomerOverviewComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/customeroverview/createcustomer', component: CustomerCreateComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/reserveringenoverview', component: EventmanagerReserveringenComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/evenementenoverview', component: EventmanagerEventsComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/werknemersoverview', component: EventmanagerEventmanagersComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/instructeursoverview', component: EventmanagerInstructeursComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/horecaoverview', component: CateringOverviewComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/agenda', component: EventmanagerAgendaComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/customeroverview/customeredit', component: CustomerUpdateComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/customeroverview/customeredit/:customerId', component: CustomerUpdateComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/instructeursoverview/createinstructor', component: InstructorCreateComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/instructeursoverview/instructoredit/:instructor_id', component: InstructorUpdateComponent, canActivate: [AuthGuard]},
  {path: 'homeeventmanager/werknemersoverview/createeventmanager', component: EventmanagerCreateComponent, canActivate: [AuthGuard]},
  {path: '**', component: HomepageComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
