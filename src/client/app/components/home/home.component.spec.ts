import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import HomeComponent from './home.component';
import FaqComponent from '../faq/faq.component';

function main() {
    describe('Home Component Test Suite', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [HomeComponent, FaqComponent]
            });
        });

        it('Valid Test Case 1', async(() => {
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(HomeComponent);
                let domElement = fixture.debugElement.children[0].nativeElement;

                let actualContent = domElement.querySelectorAll('h1')[0].textContent;
                let expectedContent = 'AWESOME, CUSTOMIZABLE, FREE';

                expect(actualContent).toBe(expectedContent);
            });
        }));
    });
}

export { main };
