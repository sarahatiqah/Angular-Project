import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobportalComponent } from './jobportal/jobportal.component';
import {RatingModule} from 'primeng/rating';
import {HttpClientModule} from '@angular/common/http';
import {RadioButtonModule} from 'primeng/radiobutton';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ApplicationComponent } from './application/application.component';
import { TestComponent } from './test/test.component';
import { ManagejoblistComponent } from './managejoblist/managejoblist.component';
import { FolderComponent } from './component/folder/folder.component';
import { JobappliedComponent } from './component/jobapplied/jobapplied.component';
import { JoblistComponent } from './component/joblist/joblist.component';
import { FilterPipe } from './shared/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    JobportalComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ApplicationComponent,
    TestComponent,
    ManagejoblistComponent,
    FolderComponent,
    JobappliedComponent,
    JoblistComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RatingModule,
    RadioButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
