import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {TabsComponent} from "./component/tabs/tabs.component";
import {HomeComponent} from './pages/home/home.component';
import {ToolbarComponent} from './component/toolbar/toolbar.component';
import {ConnectionComponent} from "./component/connection/connection.component";
import {PersonaliseComponent} from "./component/personalise/personalise.component";
import {CustomOrderComponent} from "./component/custom-order/custom-order.component";
import {AccountComponent} from './pages/account/account.component';
import {AccounttoolbarComponent} from './component/accounttoolbar/accounttoolbar.component';
import {AccountbuttonComponent} from './component/accountbutton/accountbutton.component';
import {FavComponent} from './pages/fav/fav.component';
import {FavlistComponent} from './component/favlist/favlist.component';
import {ParaComponent} from './pages/para/para.component';
import {ParalistComponent} from './component/paralist/paralist.component';
import {ParabuttonComponent} from './component/parabutton/parabutton.component';
import {AideComponent} from './pages/aide/aide.component';
import {AidebuttonComponent} from './component/aidebutton/aidebutton.component';
import {MethodepayeComponent} from './pages/methodepaye/methodepaye.component';
import {BtnpayeComponent} from './component/btnpaye/btnpaye.component';


@NgModule({
    declarations: [AppComponent, HomeComponent, TabsComponent, ToolbarComponent, ConnectionComponent,PersonaliseComponent,CustomOrderComponent, AccountComponent, AccounttoolbarComponent,
        AccounttoolbarComponent, AccountbuttonComponent, FavComponent, FavlistComponent, ParaComponent, ParalistComponent,
        ParabuttonComponent, AideComponent, AideComponent, AidebuttonComponent, MethodepayeComponent, BtnpayeComponent]],
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
