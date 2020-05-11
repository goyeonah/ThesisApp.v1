import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";
import {LoginComponent} from "~/app/login/login.component";
import {HomeComponent} from "~/app/home/home.component";
import {PatientLoginComponent} from "~/app/login/patient/patient-login.component";
import {SignupComponent} from "~/app/signup/signup.component";
import {RelevantInfoComponent} from "~/app/relevant-info/relevant-info.component";
import {PatientHomeScreenComponent} from "~/app/patient-home-screen/patient-home-screen.component";
import {NativeScriptFormsModule} from "nativescript-angular";
import {PatientDailySignsComponent} from "~/app/patient-daily-signs/patient-daily-signs.component";
import {CreateHistoryComponent} from "~/app/create-history/create-history.component";
import {ViewHistoryComponent} from "~/app/view-history/view-history.component";
import {ReadingsComponent} from "~/app/readings/readings.component";
import {ViewDailySignsComponent} from "~/app/view-daily-signs/view-daily-signs.component";
import {ForgotPasswordComponent} from "~/app/password/forgot-password.component";
import { SelectListComponent } from "./modals/select-list/select-list.component";
import { ProfileComponent } from "./profile/profile.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        NativeScriptHttpClientModule,
    ],
    entryComponents: [
        AppComponent,
        SelectListComponent
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        PatientLoginComponent,
        SignupComponent,
        RelevantInfoComponent,
        PatientHomeScreenComponent,
        PatientDailySignsComponent,
        CreateHistoryComponent,
        ViewHistoryComponent,
        ReadingsComponent,
        ViewDailySignsComponent,
        ForgotPasswordComponent,
        SelectListComponent,
        ProfileComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule {

}
