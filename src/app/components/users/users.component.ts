import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/Models';
import {ModalController} from '@ionic/angular';
import {UserDetailsComponent} from '../user-details/user-details.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public users: User[];
  public filteredUsers: User[];
  public searchTerm: any;

  public constructor(public usersService: UsersService, private  modalController: ModalController) {
  }

  public ngOnInit() {
    this.getUsers();
  }


  public getUsers(): void {
    this.usersService.getUsers().subscribe(res => {
      this.users = res;
      this.filteredUsers = res;
    });
  }

  public filterUsers() {
    this.filteredUsers = this.users.filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  public async displayUsersDetails(user: User) {
    const modal = await this.modalController.create({
      component: UserDetailsComponent,
      cssClass: 'users-modal',
      componentProps: {
        user,
      }
    });
    return await modal.present();
  }
}
