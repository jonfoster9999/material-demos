import { SidenavDemoComponent } from './sidenav-demo/sidenav-demo.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule,
          MatCardModule,
          MatSliderModule,
          MatButton,
          MatTooltipModule,
          MatSnackBarModule,
          MatMenuModule,
          MatIconModule,
          MatSidenavModule,
          MatToolbarModule,
          MatChipsModule,
          MatInputModule,
          MatButtonModule
        } from '@angular/material';
import { AppComponent } from './app.component';
import 'hammerjs';
import { MyFormComponent } from './my-form/my-form.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { SnackbarDemoComponent } from './snackbar-demo/snackbar-demo.component';
import { MenuDemoComponent } from './menu-demo/menu-demo.component';
import { ToolbarDemoComponent } from './toolbar-demo/toolbar-demo.component';
import { HoverDirective } from './hovers.directive';
import { GridComponent } from './grid/grid.component';
import { HttpClientModule } from '@angular/common/http';
import {AuthServiceService} from './auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    DialogDemoComponent,
    MyDialogComponent,
    TooltipDemoComponent,
    SnackbarDemoComponent,
    NavigationComponent,
    MenuDemoComponent,
    SidenavDemoComponent,
    ToolbarDemoComponent,
    HoverDirective,
    GridComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSliderModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'form', component: MyFormComponent},
      { path: 'dialog', component: DialogDemoComponent},
      { path: 'tooltip', component: TooltipDemoComponent, canActivate: [AuthServiceService]},
      { path: 'snackbar', component: SnackbarDemoComponent},
      { path: 'menu', component: MenuDemoComponent},
      { path: 'sidenav', component: SidenavDemoComponent},
      { path: 'toolbar', component: ToolbarDemoComponent},
      { path: 'grid', component: GridComponent }
    ]),
    MatChipsModule
  ],
  providers: [AuthServiceService],
  entryComponents: [MyDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
