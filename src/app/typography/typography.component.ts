import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  screenSize: string = 'unknown';
  text: string = 'This is a sample text.';

  typographyStyles: any = {};

  ngOnInit() {
    this.updateScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateScreenSize();
  }

  private updateScreenSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 600) {
      this.screenSize = 'small';
      this.typographyStyles = {
        'font-family': 'Arial',
        'font-size': '9px'
      };
    } else if (screenWidth <= 800) {
      this.screenSize = 'medium';
      this.typographyStyles = {
        'font-family': 'Bookman Old Style',
        'font-size': '18px'
      };
    } else {
      this.screenSize = 'large';
      this.typographyStyles = {
        'font-family': 'Garamond',
        'font-size': '22px'
      };
    }
  }
}
