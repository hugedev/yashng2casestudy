import { NgModule } from '@angular/core';
import crmSystemModuleDef from './crmsystem.module.def';

@NgModule(crmSystemModuleDef)
class CrmSystemModule {
    constructor() {
        console.log('CRM System Module Initialized!');
    }
}

export default CrmSystemModule;
