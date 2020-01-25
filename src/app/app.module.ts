import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { IconsComponent } from './home/icons/icons.component';
import { EmployersComponent } from './employers/employers.component';
import { PopularlistComponent } from './popularlist/popularlist.component';
import { FeatureComponent } from './feature/feature.component';
import { TechnicalcardComponent } from './feature/technicalcard/technicalcard.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { CandidatedetailsComponent } from './candidatedetails/candidatedetails.component';
import { ContactComponent } from './contact/contact.component';
import { JobcardComponent } from './blog/jobcard/jobcard.component';
import { JobseekersComponent } from './jobseekers/jobseekers.component';
import { JobdetailsComponent } from './jobseekers/jobdetails/jobdetails.component';
import { ProfilecardComponent } from './jobseekers/profilecard/profilecard.component';
import { PagesComponent } from './pages/pages.component';
import { CompanyDetailsComponent } from './pages/company-details/company-details.component';
import { EditprofileComponent } from './pages/editprofile/editprofile.component';
// import { JoinComponent } from './pages/join/join.component';
import { LoginComponent } from './pages/login/login.component';
import { PostJobComponent } from './post-job/post-job.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    IconsComponent,
    EmployersComponent,
    PopularlistComponent,
    FeatureComponent,
    TechnicalcardComponent,
    FooterComponent,
    AboutusComponent,
    BlogComponent,
    CandidatedetailsComponent,
    ContactComponent,
    PopularlistComponent,
    JobcardComponent,
    JobseekersComponent,
    JobdetailsComponent,
    ProfilecardComponent,
    PagesComponent,
    CompanyDetailsComponent,
    EditprofileComponent,
    // JoinComponent,
    LoginComponent,
    PostJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
