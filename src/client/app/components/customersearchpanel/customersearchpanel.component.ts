import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'customer-search-panel-component',
    templateUrl: 'customersearchpanel.component.html'
})
class CustomerSearchPanelComponent {
    @Input()
    public searchString: string;

    constructor() {
        console.log('Customer Search Panel Initialized!');
    }
}

export default CustomerSearchPanelComponent;
