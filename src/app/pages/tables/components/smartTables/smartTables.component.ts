import { Component } from '@angular/core';

import { SmartTablesService } from './smartTables.service';
import { LocalDataSource } from 'ng2-smart-table';

import 'style-loader!./smartTables.scss';

@Component({
  selector: 'smart-tables',
  templateUrl: './smartTables.html',
})
export class SmartTables {

  query: string = '';
  valid:boolean = false;

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number'
      },
      firstName: {
        title: 'First',
       // type: 'textarea'
        filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: [
              { value: 'Glenna Reichert', title: 'Glenna Reichert' },
              { value: 'Kurtis Weissnat', title: 'Kurtis Weissnat' },
              { value: 'Chelsey Dietrich', title: 'Chelsey Dietrich' }
            ]
          }
        }


      },
      lastName: {
        title: 'Last Name',
        type: 'string'
      },
        lastName2: {
        title: 'Last Name',
        type: 'string'
      },
        lastName3: {
        title: 'Last Name',
        type: 'string'
      },
        lastName4: {
        title: 'Last Name',
        type: 'string'
      },
        lastName5: {
        title: 'Last Name',
        type: 'string'
      },
        lastName6: {
        title: 'Last Name',
        type: 'string'
      },


      username: {
        title: 'Username',
       // type: 'string'
       editor: {
          type: 'textarea'
        }
      },
      email: {
        title: 'E-mail',
        type: 'string'
      },
      age: {
        title: 'Age',
        type: 'number'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: SmartTablesService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    console.log(event);
    this.valid = true;
    if (window.confirm('Are you sure you want to delete?')) {

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
