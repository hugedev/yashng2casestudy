import { Component, OnInit, OnDestroy } from '@angular/core';

let footerComponentDef: any = {
    moduleId: module.id,
    templateUrl: 'footer.component.html',
    selector: 'footer-component'
};

@Component(footerComponentDef)
class FooterComponent implements OnInit, OnDestroy {
    constructor() {
        console.log('Footer Component Constructor ...');
    }

    ngOnInit() {
        console.log('Component and Child Components Initialized!');
    }

    ngOnDestroy() {
        console.log('Component and Child Components are Deinitialized!');
    }
}

export default FooterComponent;
