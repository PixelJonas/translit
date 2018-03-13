import { Component, TemplateRef, ViewChild } from "@angular/core";

@Component({
  selector: 'lit-highlight',
  templateUrl: './highlight.component.html',
})
export class HighlightDirectiveComponent {
  @ViewChild("tpl")
  public container: TemplateRef<any>;

  constructor(){
  }
}
