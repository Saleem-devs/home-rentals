import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-property',
  templateUrl: './new-property.component.html',
  styleUrls: ['./new-property.component.css'],
})
export class NewPropertyComponent implements OnInit {
  constructor() {}

  fileInput: HTMLElement | null = null;

  show() {
    console.log(this.fileInput);
    this.fileInput?.click();
  }
  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {
      this.fileInput = document.getElementById('custom-file-input');
    });
  }
}
