import { Component, ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import { OverlayComponent } from './overlay.component';

import { DomPortalHost, Portal, ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-angular';

  private portalHost: DomPortalHost;

  private portal: ComponentPortal<OverlayComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private applicationRef: ApplicationRef,
   ) {
    this.renderer = this.renderer.bind(this);
   }

   private foo = document.createElement('div');

   renderer(root: HTMLElement) {
    root.appendChild(this.foo);
   }

   ngOnInit() {
    // Create a portalHost from a DOM element
    this.portalHost = new DomPortalHost(
      this.foo,
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
    );

    // Locate the component factory for the OverlayComponent
    this.portal = new ComponentPortal(OverlayComponent);

    // Attach portal to host
    this.portalHost.attach(this.portal);
  }
}
