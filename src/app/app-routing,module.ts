import {RouterModule, Routes} from '@angular/router';
import {LoginEventManagerComponent} from './components/login-event-manager/login-event-manager.component';
import {HomepageComponent} from './components/homepage/homepage.component';

const appRoutes: Routes = [
  {path: 'loginpage', component: LoginEventManagerComponent},
  {path: '', component: HomepageComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
