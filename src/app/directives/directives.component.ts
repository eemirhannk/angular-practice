import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  title: any;
  name : string = "";
  username : string = "";
  ngOnInit(): void {}

  changeTitle() {
    this.title = !this.title;
  }
}
