import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CandidatedetailsComponent } from './candidatedetails/candidatedetails.component';
import { JobseekersComponent } from './jobseekers/jobseekers.component';
import { ProfilecardComponent } from './jobseekers/profilecard/profilecard.component';
import { LoginComponent } from './pages/login/login.component';
// import { JoinComponent } from './pages/join/join.component';
import { JobdetailsComponent } from './jobseekers/jobdetails/jobdetails.component';
import { EditprofileComponent } from './pages/editprofile/editprofile.component';
import { CompanyDetailsComponent } from './pages/company-details/company-details.component';
import { PostJobComponent } from './post-job/post-job.component';



const routes: Routes = [
  //  {path: "",component: JoinComponent},
  { path: "home", component: HomeComponent },
   {path: "login",component:LoginComponent},
  //  {path: "join",component: JoinComponent},
   {path:"postjob",component:PostJobComponent},
   {path:"jobseekers",component:JobseekersComponent},
   {path:"profilecard",component:ProfilecardComponent},
   {path:"jobdetails",component:JobdetailsComponent},
   {path:"blog",component:BlogComponent},
   {path:"contact",component:ContactComponent},
   {path:"aboutus",component:AboutusComponent},
   {path:"editprofile", component:EditprofileComponent},
   {path:"companydetails",component:CompanyDetailsComponent},
   {path:"candidatedetails",component:CandidatedetailsComponent},
  { path: '', redirectTo: 'HomeComponent', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
