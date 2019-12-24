import { Component, OnInit} from '@angular/core';
import 'grapesjs-plugin-forms';
import grapesjs from 'grapesjs';
import 'grapesjs-blocks-basic';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  editor;



constructor() { }

  ngOnInit() {
    this.editor = grapesjs.init({
      container: '#gjs',
      fromElement: true,
      style: '',
      navbar: 'true',
      formsOpts	:'false',
      countdown: 'true',
      canvas: {

        styles: ['https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css']
        },
      storageManager: { type: null },
      components: '',
      plugins: [ 'gjs-blocks-basic', 'grapesjs-plugin-forms'],
    });
  }

}

