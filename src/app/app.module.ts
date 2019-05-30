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
import {EventmanagerReserveringenComponent} from './components/eventmanager-reserveringen/eventmanager-reserveringen.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {DummyFilterPipe} from './pipes/dummyfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    LoginEventManagerComponent,
    HomepageEventmanagerComponent,
    EventmanagerReserveringenComponent,
    DummyFilterPipe
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
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule {
}
