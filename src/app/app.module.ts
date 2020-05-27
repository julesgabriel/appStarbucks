import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {TabsComponent} from "./component/tabs/tabs.component";
import {HomeComponent} from "./pages/home/home.component";
import {ToolbarComponent} from "./component/toolbar/toolbar.component";

@NgModule({
    declarations: [AppComponent, HomeComponent, TabsComponent, ToolbarComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    exports: [
        TabsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
