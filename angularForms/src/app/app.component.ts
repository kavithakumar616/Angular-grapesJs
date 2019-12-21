import { Component, OnInit} from '@angular/core';
import 'grapesjs-plugin-forms';
import grapesjs from 'grapesjs';
import 'grapesjs-blocks-basic';
// import 'grapesjs-preset-webpage';





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
      storageManager: { type: null },
      components: '',
      plugins: [ 'gjs-blocks-basic','grapesjs-plugin-forms']



       });
      }
}


