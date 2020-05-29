import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AccountComponent} from './pages/account/account.component';
import {FavComponent} from './pages/fav/fav.component';
import {ParaComponent} from './pages/para/para.component';

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

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
