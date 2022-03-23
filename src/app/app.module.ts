import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
// HTTP
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';
import { ModalSidebarComponent } from './components/sidebar/modal-sidebar/modal-sidebar.component';
import { EnergyDashboardComponent } from './components/energy/energy-dashboard/energy-dashboard.component';
import { EnergyExploreComponent } from './components/energy/energy-explore/energy-explore.component';
import { EnergyPowerQualityComponent } from './components/energy/energy-power-quality/energy-power-quality.component';
import { EnergyPreventiveMaintenanceComponent } from './components/energy/energy-preventive-maintenance/energy-preventive-maintenance.component';
import { EnergyReportComponent } from './components/energy/energy-report/energy-report.component';
import { EnergySettingGroupSensorComponent } from './components/energy/energy-setting/energy-setting-group-sensor/energy-setting-group-sensor.component';
import { EnergySettingNotificationComponent } from './components/energy/energy-setting/energy-setting-notification/energy-setting-notification.component';
import { EnergyPowerQualityAllMeterComponent } from './components/energy/energy-power-quality-all-meter/energy-power-quality-all-meter.component';
import { ModalModuleComponent } from './components/modal-module/modal-module.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { ModalReportPrintComponent } from './components/energy/modal/modal-report-print/modal-report-print.component';
import { ModalReportSaveComponent } from './components/energy/modal/modal-report-save/modal-report-save.component';
import { LoadingComponent } from './components/loading/loading.component';
// ROUTES
export const router: Routes = [
  { path: 'energy-dashboard', component: EnergyDashboardComponent },
  { path: 'energy-explore', component: EnergyExploreComponent },
  { path: 'energy-power-quality', component: EnergyPowerQualityComponent },
  { path: 'energy-power-quality-all-meter', component: EnergyPowerQualityAllMeterComponent },
  { path: 'energy-report', component: EnergyReportComponent },
  { path: 'energy-setting-group-sensor', component: EnergySettingGroupSensorComponent },
  { path: 'energy-setting-notification', component: EnergySettingNotificationComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ModalSidebarComponent,
    EnergyDashboardComponent,
    EnergyExploreComponent,
    EnergyPowerQualityComponent,
    EnergyPreventiveMaintenanceComponent,
    EnergyReportComponent,
    EnergySettingGroupSensorComponent,
    EnergySettingNotificationComponent,
    EnergyPowerQualityAllMeterComponent,
    ModalModuleComponent,
    NotificationListComponent,
    ModalReportPrintComponent,
    ModalReportSaveComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
