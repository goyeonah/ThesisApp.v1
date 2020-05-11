import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import {LoginComponent} from "~/app/login/login.component";
import {PatientLoginComponent} from "~/app/login/patient/patient-login.component";
import {SignupComponent} from "~/app/signup/signup.component";
import {PatientHomeScreenComponent} from "~/app/patient-home-screen/patient-home-screen.component";
import {PatientDailySignsComponent} from "~/app/patient-daily-signs/patient-daily-signs.component";
import {ReadingsComponent} from "~/app/readings/readings.component";
import {ViewDailySignsComponent} from "~/app/view-daily-signs/view-daily-signs.component";
import {ForgotPasswordComponent} from "~/app/password/forgot-password.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
    { path: "patientLogin", component: PatientLoginComponent },
    { path: "login", component: LoginComponent },
    { path: "patientSignup", component: SignupComponent },
    { path: "patientHome", component:  PatientHomeScreenComponent},
    { path: "daily-signs", component: PatientDailySignsComponent},
    { path: "readings", component: ReadingsComponent},
    { path: "viewDailySigns", component: ViewDailySignsComponent},
    { path: "forgotPassword", component: ForgotPasswordComponent},
    { path: "profile", component: ProfileComponent},
    { path: "", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
