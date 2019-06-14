import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MatCardModule, MatGridListModule, MatToolbarModule} from '@angular/material';
import {HomepageComponent} from './components/homepage/homepage.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routing} from './app-routing,module';
import {HomepageEventmanagerComponent} from './components/homepage-eventmanager/homepage-eventmanager.component';
import {Globals} from './components/globals';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {LoginEventManagerComponent} from './components/login-event-manager/login-event-manager.component';
import {CustomerOverviewComponent} from './components/customer/customer-overview/customer-overview.component';
import {CustomerCreateComponent} from './components/customer/customer-create/customer-create.component';
import {EventmanagerReserveringenComponent} from './components/eventmanager-reserveringen/eventmanager-reserveringen.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {DummyFilterPipe} from './pipes/dummyfilter.pipe';
import {NavbarComponent} from './navbar/navbar.component';
import {OrderFilterPipe} from './pipes/orderfilter.pipe';
import {CustomerFilterPipe} from './pipes/customerfilter.pipe';
import {EventmanagerEventsComponent} from './components/eventmanager-events/eventmanager-events.component';
import {EventFilterPipe} from './pipes/eventfilter.pipe';
import {SupplierOverviewComponent} from './components/supplier-overview/supplier-overview.component';
import {SupplierFilterPipe} from './pipes/supplierfilter.pipe';
import {CateringOverviewComponent} from './components/catering-overview/catering-overview.component';
import {CateringFilterPipe} from './pipes/cateringfilter.pipe';
import {EventmanagerEventmanagersComponent} from './components/eventmanager-werknemers/eventmanager-eventmanagers.component';
import {EventManagerFilterPipe} from './pipes/eventmanagerfilter.pipe';
import {InstructorFilterPipe} from './pipes/instructorfilter.pipe';
import {HttpClientModule} from '@angular/common/http';
import {AlertsModule} from 'angular-alert-module';
import {EventmanagerInstructeursComponent} from './components/instructor/instructor-overview/eventmanager-instructeurs.component';
import {EventmanagerAgendaComponent} from './components/eventmanager-agenda/eventmanager-agenda.component';
import {FullCalendarModule} from '@fullcalendar/angular';
import {CustomerUpdateComponent} from './components/customer/customer-update/customer-update.component';
import {UserService} from './services/user.service';
import {CustomerService} from './services/customer.service';
import {ApiService} from './services/api.service';
import {AuthGuard} from './services/auth.guard.service';
import {AuthorizationService} from './services/authorization.service';
import {InstructorCreateComponent} from './components/instructor/instructor-create/instructor-create.component';
import {InstructorService} from './services/instructor.service';
import {InstructorUpdateComponent} from './components/instructor/instructor-update/instructor-update.component';
import {InstructorDetailsComponent} from './components/instructor/instructor-details/instructor-details.component';
// import { DetailsComponent } from './components/customer/customer/details/details.component';
// import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import {EventsCreateComponent} from './components/eventmanager-events/events-create/events-create.component';
import {EventsUpdateComponent} from './components/eventmanager-events/events-update/events-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    LoginEventManagerComponent,
    HomepageEventmanagerComponent,
    CustomerOverviewComponent,
    CustomerCreateComponent,
    EventmanagerReserveringenComponent,
    SupplierFilterPipe,
    DummyFilterPipe,
    OrderFilterPipe,
    CustomerFilterPipe,
    EventFilterPipe,
    CateringFilterPipe,
    NavbarComponent,
    EventmanagerEventsComponent,
    EventmanagerEventmanagersComponent,
    EventManagerFilterPipe,
    EventmanagerInstructeursComponent,
    InstructorFilterPipe,
    SupplierOverviewComponent,
    CateringOverviewComponent,
    EventmanagerAgendaComponent,
    CateringOverviewComponent,
    EventsCreateComponent,
    InstructorCreateComponent,
    CustomerUpdateComponent,
    InstructorCreateComponent,
    InstructorUpdateComponent,
    InstructorDetailsComponent,
    // DetailsComponent,
    // CustomerDetailsComponent
    EventsUpdateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    SlideshowModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    AngularFontAwesomeModule,
    MatGridListModule,
    NgxPaginationModule,
    HttpClientModule,
    FullCalendarModule,

    AlertsModule.forRoot()
  ],
  providers: [Globals, NavbarComponent, UserService, CustomerService, ApiService, AuthGuard, AuthorizationService, InstructorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
