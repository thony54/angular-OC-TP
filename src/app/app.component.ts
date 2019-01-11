import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-OC-TP';

  posts = [ {

      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure commodi neque numquam explicabo tempora, rerum nostrum laudantium! Soluta aliquam deleniti necessitatibus numquam, recusandae ut, sit temporibus libero, provident error in.',
      date: new Date()

    },

    {

      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure commodi neque numquam explicabo tempora, rerum nostrum laudantium! Soluta aliquam deleniti necessitatibus numquam, recusandae ut, sit temporibus libero, provident error in.',
      date: new Date()

    },

    {

      title: 'Mon troisème post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure commodi neque numquam explicabo tempora, rerum nostrum laudantium! Soluta aliquam deleniti necessitatibus numquam, recusandae ut, sit temporibus libero, provident error in.',
      date: new Date()

    }

  ]

}
