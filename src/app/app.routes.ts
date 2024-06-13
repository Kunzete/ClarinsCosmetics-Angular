import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './body/body.component';
import { PerfumeComponent } from './perfume/perfume.component';
import { HairCareComponent } from './hair-care/hair-care.component';
import { MakeupComponent } from './makeup/makeup.component';
import { FaceComponent } from './face/face.component';
import { SunscreenComponent } from './sunscreen/sunscreen.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"body", component:BodyComponent},
    {path:"perfume", component:PerfumeComponent},
    {path:"haircare", component:HairCareComponent},
    {path:"sunscreen", component:SunscreenComponent},
    {path:"makeup", component:MakeupComponent},
    {path:"face", component:FaceComponent},
    {path:"signin", component:SigninComponent},
    {path:"signup", component:SignupComponent}
];
