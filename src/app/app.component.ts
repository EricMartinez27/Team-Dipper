import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Team Dipper';
  bio = 'We are Team Dipper, and we develop web apps using angular';
  slogan = 'Ad Astra';
  logo = 'assets/big_dipper_2.png';
  bigDipper = 'assets/ursa_major_cover.jpg';
  stateFlag = 'assets/texas_flag_2.png';
  clock: Date | undefined;

  constructor(){
    setInterval(()=>{
      this.clock = new Date();
    });
  }
}


