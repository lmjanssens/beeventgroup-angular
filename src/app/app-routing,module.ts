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
import {EventmanagerInstructeursComponent} from './components/eventmanager-instructeurs/eventmanager-instructeurs.component';
import {EventmanagerEventmanagersComponent} from './components/eventmanager-werknemers/eventmanager-eventmanagers.component';
import {EventmanagerAgendaComponent} from './components/eventmanager-agenda/eventmanager-agenda.component';
import {EventsCreateComponent} from './components/eventmanager-events/events-create/events-create.component';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'loginpage', component: LoginEventManagerComponent},
  {path: 'homeeventmanager', component: HomepageEventmanagerComponent},
  {path: 'homeeventmanager/supplieroverview', component: SupplierOverviewComponent},
  {path: 'homeeventmanager/customeroverview', component: CustomerOverviewComponent},
  {path: 'homeeventmanager/customeroverview/createcustomer', component: CustomerCreateComponent},
  {path: 'homeeventmanager/reserveringenoverview', component: EventmanagerReserveringenComponent},
  {path: 'homeeventmanager/evenementenoverview', component: EventmanagerEventsComponent},
  {path: 'homeeventmanager/werknemersoverview', component: EventmanagerEventmanagersComponent},
  {path: 'homeeventmanager/instructeursoverview', component: EventmanagerInstructeursComponent},
  {path: 'homeeventmanager/horecaoverview', component: CateringOverviewComponent},
  {path: 'homeeventmanager/evenementenoverview/createevenement', component: EventsCreateComponent},
  {path: 'homeeventmanager/agenda', component: EventmanagerAgendaComponent},

];

export const routing = RouterModule.forRoot(appRoutes);
