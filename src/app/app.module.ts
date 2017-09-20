import { SidenavDemoComponent } from './sidenav-demo/sidenav-demo.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDialogModule, 
          MdCardModule,
          MdButton,
          MdTooltipModule,
          MdSnackBarModule,
          MdMenuModule,
          MdIconModule,
          MdSidenavModule,
          MdToolbarModule
        } from '@angular/material';
import { AppComponent } from './app.component';
import { MdInputModule, MdButtonModule } from '@angular/material';
import 'hammerjs';
import { MyFormComponent } from './my-form/my-form.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { SnackbarDemoComponent } from './snackbar-demo/snackbar-demo.component';
import { MenuDemoComponent } from './menu-demo/menu-demo.component';
import { ToolbarDemoComponent } from './toolbar-demo/toolbar-demo.component';

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
    ToolbarDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdTooltipModule,
    MdSnackBarModule,
    MdMenuModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule,
    RouterModule.forRoot([
      { path: 'form', component: MyFormComponent},
      { path: 'dialog', component: DialogDemoComponent},
      { path: 'tooltip', component: TooltipDemoComponent},
      { path: 'snackbar', component: SnackbarDemoComponent},
      { path: 'menu', component: MenuDemoComponent},
      { path: 'sidenav', component: SidenavDemoComponent},
      { path: 'toolbar', component: ToolbarDemoComponent}
    ])
  ],
  providers: [],
  entryComponents: [MyDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
