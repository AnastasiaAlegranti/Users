import {Component, Input} from '@angular/core';
import {User} from '../../models/Models';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent  {
  @Input() user: User;

  public constructor(private modalController: ModalController) {
  }

  public dismiss(){
    this.modalController.dismiss();
  }

}
