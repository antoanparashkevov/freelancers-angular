import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.scss']
})
export class SharedButtonComponent implements OnInit {
    @Input('to') location: string | number = '/coaches'
    @Input('mode') currentMode: string = 'outline'
    @Input('link') isLink: boolean = false;
    
  constructor() { }

  ngOnInit(): void {
  }

}