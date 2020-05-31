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
import {CartComponent} from "./pages/cart/cart.component";
import {CardproductComponent} from "./component/cardproduct/cardproduct.component";
import {ActionNavComponent} from "./component/action-nav/action-nav.component";
import {ContentOrderComponent} from "./pages/content-order/content-order.component";
import {CardPayComponent} from "./pages/card-pay/card-pay.component";
import {ThankYouComponent} from "./pages/thank-you/thank-you.component";


@NgModule({
    declarations: [AppComponent, HomeComponent, TabsComponent, ToolbarComponent, CartComponent, CardproductComponent, ActionNavComponent, ThankYouComponent, ContentOrderComponent, CardPayComponent],
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
