import { Component, OnInit, OnDestroy } from '@angular/core';

let faqComponentDef: any = {
    moduleId: module.id,
    templateUrl: 'faq.component.html',
    selector: 'faq-component'
};

@Component(faqComponentDef)
class FaqComponent implements OnInit, OnDestroy {
    constructor() {
        console.log('Faq Component Constructor ...');
    }

    ngOnInit() {
        console.log('Component and Child Components Initialized!');
    }

    ngOnDestroy() {
        console.log('Component and Child Components are Deinitialized!');
    }
}

export default FaqComponent;
