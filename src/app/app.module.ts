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
import {EventmanagerEventsComponent} from './components/event/event-overview/eventmanager-events.component';
import {EventFilterPipe} from './pipes/eventfilter.pipe';
import {SupplierOverviewComponent} from './components/supplier/supplier-overview/supplier-overview.component';
import {SupplierFilterPipe} from './pipes/supplierfilter.pipe';
import {CateringOverviewComponent} from './components/catering/catering-overview/catering-overview.component';
import {CateringFilterPipe} from './pipes/cateringfilter.pipe';
import {EventmanagerEventmanagersComponent} from './components/werknemers/eventmanager-overview/eventmanager-eventmanagers.component';
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
import {EventsUpdateComponent} from './components/event/events-update/events-update.component';
import {EventsCreateComponent} from './components/event/events-create/events-create.component';
import {SupplierDetailsComponent} from './components/supplier/supplier-details/supplier-details.component';
import {SupplierUpdateComponent} from './components/supplier/supplier-update/supplier-update.component';
import {SupplierCreateComponent} from './components/supplier/supplier-create/supplier-create.component';
import {InstructorUpdateComponent} from './components/instructor/instructor-update/instructor-update.component';
import {InstructorDetailsComponent} from './components/instructor/instructor-details/instructor-details.component';
import {EventmanagerCreateComponent} from './components/werknemers/eventmanager-create/eventmanager-create.component';
import {EventmanagerUpdateComponent} from './components/werknemers/eventmanager-update/eventmanager-update.component';
import {CustomerDetailsComponent} from './components/customer/customer-details/customer-details.component';
import {CateringCreateComponent} from './components/catering/catering-create/catering-create.component';
import {CateringService} from './services/catering.service';
import {HomepageInstructorComponent} from './components/homepage-instructor/homepage-instructor.component';
import {ReservationService} from './services/reservation.service';
import {SupplierContractOverviewComponent} from './components/supplier/supplier-contract-overview/supplier-contract-overview.component';
import {SupplierContractUpdateComponent} from './components/supplier/supplier-contract-update/supplier-contract-update.component';
import {CateringDetailsComponent} from './components/catering/catering-details/catering-details.component';
import {CateringUpdateComponent} from './components/catering/catering-update/catering-update.component';
import {WerknemersDetailsComponent} from './components/werknemers/werknemers-details/werknemers-details.component';
import {EventDetailsComponent} from './components/event/event-details/event-details.component';
import {ReserveringenCreateComponent} from './components/eventmanager-reserveringen/reserveringen-create/reserveringen-create.component';
import {ReserveringenUpdateComponent} from './components/eventmanager-reserveringen/reserveringen-update/reserveringen-update.component';
import {UploadFileService} from './services/upload-file.service';
import {DetailsUploadComponent} from './components/details-upload/details-upload.component';
import {ImageUploadComponent} from './components/image-upload/image-upload.component';
import {PdfGeneratorComponent} from './components/pdf-generator/pdf-generator.component';
import {ReserveringDetailsComponent} from './components/eventmanager-reserveringen/reservering-details/reservering-details.component';
import {SupplierContractCreateComponent} from './components/supplier/supplier-contract-create/supplier-contract-create.component';
import {QuotationComponent} from './components/quotation/quotation.component';
import {QuotationCreateComponent} from './components/quotation/quotation-create/quotation-create.component';
import {EmailComponent} from './components/email/email.component';
import {MailUpdateComponent} from './components/mail-update/mail-update.component';
import {SupplierContract} from './models/supplier-contract.model';


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
    EventmanagerAgendaComponent,
    CateringOverviewComponent,
    EventsCreateComponent,
    InstructorCreateComponent,
    CustomerUpdateComponent,
    InstructorCreateComponent,
    InstructorUpdateComponent,
    InstructorDetailsComponent,
    SupplierCreateComponent,
    SupplierUpdateComponent,
    SupplierDetailsComponent,
    HomepageInstructorComponent,
    EventsUpdateComponent,
    EventmanagerCreateComponent,
    InstructorDetailsComponent,
    EventmanagerUpdateComponent,
    CustomerDetailsComponent,
    CateringCreateComponent,
    SupplierContractOverviewComponent,
    SupplierContractUpdateComponent,
    CateringDetailsComponent,
    CateringUpdateComponent,
    WerknemersDetailsComponent,
    ReserveringenCreateComponent,
    ReserveringenUpdateComponent,
    WerknemersDetailsComponent,
    EventDetailsComponent,
    DetailsUploadComponent,
    ImageUploadComponent,
    PdfGeneratorComponent,
    QuotationComponent,
    QuotationCreateComponent,
    ReserveringDetailsComponent,
    SupplierContractCreateComponent,
    MailUpdateComponent,
    EmailComponent
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
  providers: [
    Globals,
    NavbarComponent,
    UserService,
    CustomerService,
    ApiService,
    AuthGuard,
    AuthorizationService,
    InstructorService,
    ReservationService,
    UploadFileService,
    CateringService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
