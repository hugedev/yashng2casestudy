import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import HomeComponent from '../../components/home/home.component';
import AboutUsComponent from '../../components/aboutus/aboutus.component';
import ContactComponent from '../../components/contact/contact.component';

let commonRoutes = [
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

let commonRouteEntries: ModuleWithProviders = RouterModule.forRoot(commonRoutes, {
    useHash: false
});

export default commonRouteEntries;
