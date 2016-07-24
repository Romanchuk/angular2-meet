/* tslint:disable:no-unused-variable */
import { App } from '../app/app';

import { async, inject } from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/core/testing';

import { By }             from '@angular/platform-browser';
import { provide }        from '@angular/core';
import { ViewMetadata }   from '@angular/core';
import { PromiseWrapper } from '@angular/core/src/facade/promise';

////////  SPECS  /////////////


describe('AppComponent with TCB', function () {

  it('should instantiate component',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

    tcb.createAsync(App).then(fixture => {
      expect(fixture.componentInstance instanceof App).toBe(true, 'should create App');
    });
  })));

  it('should have expected <h1> text',
    async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      tcb.createAsync(App).then(fixture => {
      // fixture.detectChanges();  // would need to resolve a binding but we don't have a binding

      let h1 = fixture.debugElement.query(By.css('h1')).nativeElement;            // preferred

      expect(h1.innerText).toMatch(/angular 2 app/i, '<h1> should say something about "Angular 2 App"');
    });

  })));
});
