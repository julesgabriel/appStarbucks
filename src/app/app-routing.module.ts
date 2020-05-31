import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CartComponent} from "./pages/cart/cart.component";
import {ContentOrderComponent} from "./pages/content-order/content-order.component";
import {ThankYouComponent} from "./pages/thank-you/thank-you.component";
import {CommandComponent} from "./pages/command/command.component";
import {CommandHistSingleComponent} from "./pages/command-hist-single/command-hist-single.component";
import {AccountComponent} from './pages/account/account.component';
import {FavComponent} from './pages/fav/fav.component';
import {ParaComponent} from './pages/para/para.component';
import {AideComponent} from './pages/aide/aide.component';
import {MethodepayeComponent} from './pages/methodepaye/methodepaye.component';
import { ConnectionComponent } from './component/connection/connection.component';
import { PersonaliseComponent} from './component/personalise/personalise.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'contentOrder',
        component: ContentOrderComponent
    },
    {
        path: 'thanks',
        component: ThankYouComponent
    },
    {
        path: 'command',
        component: CommandComponent
    },
    {
        path: 'commandHistSingle',
        component: CommandHistSingleComponent
    },
    {
        path: 'account',
        component: AccountComponent
    },
    {
        path: 'account/fav',
        component: FavComponent
    },
    {
        path: 'account/para',
        component: ParaComponent
    },
    {
        path: 'account/aide',
        component: AideComponent
    },
    {
        path: 'account/paiement',
        component: MethodepayeComponent
    },
    {
        path: 'connection',
        component : ConnectionComponent
    },
    {
        path: 'personalise',
        component : PersonaliseComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
