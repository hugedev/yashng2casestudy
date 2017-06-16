import LayoutComponent from '../../components/layout/layout.component';
import HeaderComponent from '../../components/header/header.component';
import NavigationComponent from '../../components/navigation/navigation.component';
import FooterComponent from '../../components/footer/footer.component';
import HomeComponent from '../../components/home/home.component';
import AboutUsComponent from '../../components/aboutus/aboutus.component';
import ContactComponent from '../../components/contact/contact.component';
import FaqComponent from '../../components/faq/faq.component';
import VacanciesComponent from '../../components/vacancies/vacancies.component';

import commonRouteEntries from '../../routing/common/common.routing';

let navigationComponents = [HomeComponent, AboutUsComponent, ContactComponent];
let partialComponents = [HeaderComponent, LayoutComponent,
    NavigationComponent, FooterComponent, FaqComponent, VacanciesComponent];

let commonModuleDef: any = {
    imports: [commonRouteEntries],
    declarations: [...partialComponents, ...navigationComponents],
    exports: [LayoutComponent]
};

export default commonModuleDef;
