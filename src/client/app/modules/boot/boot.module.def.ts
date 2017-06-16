import { BrowserModule } from '@angular/platform-browser';
import CommonModule from '../common/common.module';
import CrmSystemModule from '../crmsystem/crmsystem.module';

import BootComponent from '../../components/boot/boot.component';

let bootModuleDef: any = {
    imports: [BrowserModule, CommonModule, CrmSystemModule],
    declarations: [BootComponent],
    bootstrap: [BootComponent]
};

export default bootModuleDef;