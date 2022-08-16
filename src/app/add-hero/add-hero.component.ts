import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack = () => {
    this.location.back()
  }

}
