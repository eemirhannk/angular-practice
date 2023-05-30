import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  user = {
    name: 'Ahmet',
    surname: 'Yaman',
    job: 'Frontend Developer',
    favourite_place: 'Kız Kulesi',
    favourite_place_image: 'https://www.uskudar.bel.tr/userfiles/images/5.png',
    isEditable: true,
  };

  constructor() {}
  ngOnInit(): void {}

  buttonClicked() {
    alert("tıklandı")
  }
  inputSubmit(value : any) {
    //console.log(value)
    alert(value?.target?.value + " geldi")
  }
}
