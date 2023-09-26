import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { HomeComponent } from './pages/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { AuthInterceptor } from './services/auth-interceptor/auth-interceptor.service';
import { SuperAdminDashboardComponent } from './pages/super-admin-dashboard/super-admin-dashboard.component';
import { NewAdminDialogComponent } from './pages/new-admin-dialog/new-admin-dialog.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { NotesComponent } from './pages/notes/notes.component';
import { ToolbarSuperAdminComponent } from './components/toolbar-super-admin/toolbar-super-admin.component';
import { ToolbarAdminComponent } from './components/toolbar-admin/toolbar-admin.component';
import { ToolbarUserComponent } from './components/toolbar-user/toolbar-user.component';
import { MyNotesComponent } from './pages/my-notes/my-notes.component';
import { NewNoteDialogComponent } from './pages/new-note-dialog/new-note-dialog.component';
import { AuthGuard } from './auth.guard';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { ChangeNameDialogComponent } from './components/change-name-dialog/change-name-dialog.component';
import { ChangePasswordDialogComponent } from './components/change-password-dialog/change-password-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    UnauthorizedComponent,
    HomeComponent,
    SuperAdminDashboardComponent,
    NewAdminDialogComponent,
    SettingsComponent,
    NotesComponent,
    ToolbarSuperAdminComponent,
    ToolbarAdminComponent,
    ToolbarUserComponent,
    MyNotesComponent,
    NewNoteDialogComponent,
    InfoItemComponent,
    ChangeNameDialogComponent,
    ChangePasswordDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatStepperModule,
    MatListModule,
    MatToolbarModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {
        path: 'settings', component: SettingsComponent,
        canActivate: [AuthGuard],
        data: {
          role: ['ROLE_USER', 'ROLE_ADMIN', 'ROLE_SUPER_ADMIN']
        }
      },
      {
        path: 'home', component: HomeComponent,
        canActivate: [AuthGuard],
        data: {
          role: ['ROLE_USER']
        }
      },
      {
        path: 'admins', component: SuperAdminDashboardComponent,
        canActivate: [AuthGuard],
        data: {
          role: ['ROLE_SUPER_ADMIN']
        }
      },
      {
        path: 'notes', component: NotesComponent,
        canActivate: [AuthGuard],
        data: {
          role: ['ROLE_SUPER_ADMIN']
        }
      },
      {
        path: 'my-notes', component: MyNotesComponent,
        canActivate: [AuthGuard],
        data: {
          role: ['ROLE_SUPER_ADMIN', 'ROLE_ADMIN']
        }
      },
      { path: 'unauthorized', component: UnauthorizedComponent },
      { path: '**', component: NotFoundComponent },
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
