import { Component, ComponentFactoryResolver, Injector, ApplicationRef, ViewChild } from '@angular/core';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-tree-column.js';
import '@vaadin/vaadin-menu-bar/vaadin-menu-bar.js';
import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
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

  constructor() {
    // Only register styles once!
    registerStyles('vaadin-grid-tree-toggle', css`
      :host {
        color: blue;
      }

      [part~=toggle] {
        color: red;
      }
    `);

    registerStyles('vaadin-button', css`
      :host(.blue) [part~=label] {
        color: blue;
      }
    `);

    registerStyles('vaadin-menu-bar-button', css`
      [part~=label] {
        color: red;
      }
    `);

  }

  ngOnInit() {
    new DomPortalHost(
      this.overlayHost,
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector
    ).attach(this.testTemplatePortal);
  }

  dataProvider = (params, cb) => {
    const level = params.parentItem ? params.parentItem.level + 1 : 0;
    cb(this.generator(level, params.parentItem));
  };

  nameRenderer = (root: HTMLElement, column, {item}) => {
    if (!root.firstElementChild) {
      root.appendChild(document.createElement('strong'));
    }
    root.firstElementChild.textContent = 'name-' + item.foo;
  }

  generator = (level, parent={key: '0'}) =>
    Array.from(new Array(5))
      .map((i, index) => {
        return {
          key: `${parent.key}-${index}`,
          foo: 'bar',
          level,
          hasChildren: level < 2
        };
      });

  menuItems = [
    {
      text: 'Project',
      children: [
        {text: 'Users',
          children: [{text: 'List'}, {text: 'Add'}]
        },
        {text: 'Billing',
          children: [{text: 'Invoices'}, {text: 'Balance Events'}]
        },
      ]
    },
    {
      text: 'Account',
      children: [
        {text: 'Edit Profile'},
        {text: 'Privacy Settings'}
      ]
    },
    {text: 'Sign Out'}
  ];

  menuBarItemSelected = e => {
    console.log(e.detail.value.text + ' selected');
  }

  // Empty function to override the menu-bar's _onMouseOver
  // monkey patching a private member isn't recommended!
  onMouseOver = () => {}
}
