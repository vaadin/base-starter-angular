import { Component, ViewChild, TemplateRef, EmbeddedViewRef, ElementRef } from '@angular/core';
import { debug } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dialogOpened = false;

  @ViewChild('dialogContent') private dialogContentRef: TemplateRef<any>;
  @ViewChild('dialog') private dialogRef: ElementRef;

  check(event) {
    debugger;
  }

  ngAfterViewInit() {
    this.dialogRef.nativeElement.renderer = ((contentRoot: Node) => {
      if (contentRoot.firstChild === null) {
        const dialogView: EmbeddedViewRef<any> = this.dialogContentRef.createEmbeddedView({});
        dialogView.rootNodes.forEach(node => contentRoot.appendChild(node));
      }
    }).bind(this);
  }
}
