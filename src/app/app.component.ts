import { Component, ComponentFactoryResolver, Injector, ApplicationRef, ViewChild } from '@angular/core';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import { DomPortalHost, TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('testTemplate') testTemplatePortal: TemplatePortal<any>;

  title = 'hello-angular';

  private componentFactoryResolver: ComponentFactoryResolver
  private injector: Injector
  private applicationRef: ApplicationRef

  private overlayHost = document.createElement('div');

  renderer = (root: HTMLElement) => root.appendChild(this.overlayHost);

  ngOnInit() {
    new DomPortalHost(
      this.overlayHost,
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
    ).attach(this.testTemplatePortal);
  }
}
