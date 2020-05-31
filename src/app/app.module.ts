import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {TabsComponent} from "./component/tabs/tabs.component";
import {CartComponent} from "./pages/cart/cart.component";
import {CardproductComponent} from "./component/cardproduct/cardproduct.component";
import {ActionNavComponent} from "./component/action-nav/action-nav.component";
import {ContentOrderComponent} from "./pages/content-order/content-order.component";
import {CardPayComponent} from "./pages/card-pay/card-pay.component";
import {ThankYouComponent} from "./pages/thank-you/thank-you.component";
import {CommandComponent} from "./pages/command/command.component";
import {ProductCardCommandComponent} from "./component/product-card-command/product-card-command.component";
import {CommandCardHistoryComponent} from "./component/command-card-history/command-card-history.component";
import {CommandHistSingleComponent} from "./pages/command-hist-single/command-hist-single.component";
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
    declarations: [AppComponent, HomeComponent, TabsComponent, ToolbarComponent, CartComponent, CardproductComponent, ActionNavComponent, ThankYouComponent, ContentOrderComponent, CardPayComponent, 
                   ConnectionComponent,PersonaliseComponent,CustomOrderComponent, 
                   AccountComponent, AccounttoolbarComponent, AccountbuttonComponent, FavComponent, FavlistComponent, ParaComponent, ParalistComponent, ParabuttonComponent, AideComponent, AidebuttonComponent, MethodepayeComponent, BtnpayeComponent, 
                   CommandComponent, ProductCardCommandComponent, CommandCardHistoryComponent, CommandHistSingleComponent],
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
