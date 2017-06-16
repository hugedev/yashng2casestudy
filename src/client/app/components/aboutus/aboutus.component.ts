import { Component, OnInit, OnDestroy } from '@angular/core';

let aboutusComponentDef: any = {
    moduleId: module.id,
    templateUrl: 'aboutus.component.html',
    selector: 'aboutus-component'
};

@Component(aboutusComponentDef)
class AboutUsComponent implements OnInit, OnDestroy {
    constructor() {
        console.log('AboutUs Component Constructor ...');
    }

    ngOnInit() {
        console.log('Component and Child Components Initialized!');
    }

    ngOnDestroy() {
        console.log('Component and Child Components are Deinitialized!');
    }
}

export default AboutUsComponent;
