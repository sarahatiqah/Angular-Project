import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { FolderComponent } from './component/folder/folder.component';
import { JobappliedComponent } from './component/jobapplied/jobapplied.component';
import { JoblistComponent } from './component/joblist/joblist.component';
import { HomeComponent } from './home/home.component';
import { JobportalComponent } from './jobportal/jobportal.component';
import { LoginComponent } from './login/login.component';
import { ManagejoblistComponent } from './managejoblist/managejoblist.component';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'jobportal', component: JobportalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'test', component: TestComponent },
  { path: 'managejoblist', component: ManagejoblistComponent },
  { path: 'joblist', component: JoblistComponent },
  { path: 'jobapplied', component: JobappliedComponent },
  { path: 'folder', component: FolderComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
