import { RouterModule } from '@angular/router';

import SignInComponent from '../../components/signin/signin.component';

let securityRoutes = [
    { path: 'sign-in', component: SignInComponent }
];

let securityRouteEntries = RouterModule.forRoot(securityRoutes, {
    useHash: false
});

export default securityRouteEntries;