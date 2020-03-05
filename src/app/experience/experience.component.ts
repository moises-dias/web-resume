import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }
  @ViewChild('letter', { static: false, read: ElementRef }) letter: ElementRef;
  @ViewChild('info', { static: false, read: ElementRef }) info: ElementRef;

  actualPicture: number = 0;

  ngOnInit(): void {
  }

  hovered(imageNum: number) {
    this.letter.nativeElement.style.opacity = '0';
    this.info.nativeElement.style.opacity = '0';
    
    setTimeout(() => {
      this.letter.nativeElement.style.opacity = 1;
      this.info.nativeElement.style.opacity = 1;
      this.actualPicture = imageNum;
    }, 500);
  }

}
