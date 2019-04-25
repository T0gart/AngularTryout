import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hobbies : string[] = ['cooking','jebaitinho'];
  newHobbyInput : '';
  hobbyWasDeleted: boolean = false;
  hobbycounter: string = '';
  
  onNewHobby(){
    this.hobbies.push(this.newHobbyInput);
  }

  
  onRemoveHobby(hobby){
   const position = this.hobbies.indexOf(hobby);
   this.hobbies.splice(position,1 );
   this.hobbyWasDeleted = true;
  }

  moreThan3() {
    this.hobbies.length > 3 ? 'red' : 'black';
  }
}
