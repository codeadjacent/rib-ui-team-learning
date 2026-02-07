import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  //selectUser = DUMMY_USERS[randomUser];

  /*
  * Using Signals
  */
  selectUser = signal(DUMMY_USERS[randomUser]);
  imagePath = computed(()=>'assets/users/' + this.selectUser().avatar);

  // get imagePath(){
  //   return 'assets/users/' + this.selectUser.avatar;
  //   //before in html we were using this path: 'assets/users/' + selectUser.avatar, 
  //   // but now we have to use this method to get the image path because we are using standalone component and we cannot use the selectUser variable directly in the html file.
  // }

  onUserSelected() {
    //math.random() returns a random number between 0 and 1, so we multiply it by the length of the DUMMY_USERS array to get a random index. Then we use that index to select a random user from the DUMMY_USERS array and assign it to the selectUser variable. Finally, we log the selected user to the console.
    //managning the state of the selected user
    const randomUser = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectUser.set(DUMMY_USERS[randomUser]); //using signals set method to update the value of the signal
    //this.selectUser = DUMMY_USERS[randomUser];
    console.log('User selected: ', this.selectUser);
  }


}
