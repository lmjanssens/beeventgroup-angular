import {RouterModule, Routes} from '@angular/router';
import {LoginEventManagerComponent} from './components/login-event-manager/login-event-manager.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {HomepageEventmanagerComponent} from './components/homepage-eventmanager/homepage-eventmanager.component';
import {CustomerOverviewComponent} from './components/customer/customer-overview/customer-overview.component';
import {CustomerCreateComponent} from './components/customer/customer-create/customer-create.component';
import {EventmanagerReserveringenComponent} from './components/eventmanager-reserveringen/eventmanager-reserveringen.component';
import {EventmanagerEventsComponent} from './components/eventmanager-events/eventmanager-events.component';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'loginpage', component: LoginEventManagerComponent},
  {path: 'homeeventmanager', component: HomepageEventmanagerComponent},
  {path: 'homeeventmanager/customeroverview', component: CustomerOverviewComponent},
  {path: 'homeeventmanager/customeroverview/createcustomer', component: CustomerCreateComponent},
  {path: 'homeeventmanager/reserveringenoverview', component: EventmanagerReserveringenComponent},
  {path: 'homeeventmanager/evenementenoverview', component: EventmanagerEventsComponent},
];

export const routing = RouterModule.forRoot(appRoutes);
