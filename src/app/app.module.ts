import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store'
import { AppComponent } from './app.component';
import { counterReducer } from './my-counter/state/counter.reducer';
import { accountReducer } from './authentication/state/account.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { LogComponent } from './pages/log/log.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'
import { AuthenticationGuard } from './authentication/authentication.guard';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticationEffects } from './authentication/state/account.effects';

const routes:Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard]},
  {path: '', component: LandingComponent},
  {path: '**', component: PageNotFoundComponent},
] 

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    HomeComponent,
    HistoryComponent,
    LogComponent,
    LandingComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({count: counterReducer, account: accountReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([AuthenticationEffects])
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
