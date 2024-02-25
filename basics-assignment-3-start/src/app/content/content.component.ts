import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  contentVisible = false;
  clickCounts = [];

  constructor() {}
  displayContent() {
    this.contentVisible = !this.contentVisible;
    // this.clickCounts.push(this.clickCounts.length + 1);
    this.clickCounts.push(new Date());
  }
}
