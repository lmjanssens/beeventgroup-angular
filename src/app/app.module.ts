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
import { SupplierOverviewComponent } from './components/supplier-overview/supplier-overview.component';
import {SupplierFilterPipe} from "./pipes/supplierfilter.pipe";

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
    NavbarComponent,
    EventmanagerEventsComponent,
    SupplierOverviewComponent
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
    NgxPaginationModule
  ],
  providers: [Globals, NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
