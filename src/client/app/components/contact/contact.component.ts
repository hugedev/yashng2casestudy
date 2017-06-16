import { Component, OnInit, OnDestroy } from '@angular/core';

let contactComponentDef: any = {
    moduleId: module.id,
    templateUrl: 'contact.component.html',
    selector: 'contact-component'
};

@Component(contactComponentDef)
class ContactComponent implements OnInit, OnDestroy {
    constructor() {
        console.log('Contact Component Constructor ...');
    }

    ngOnInit() {
        console.log('Component and Child Components Initialized!');
    }

    ngOnDestroy() {
        console.log('Component and Child Components are Deinitialized!');
    }
}

export default ContactComponent;
