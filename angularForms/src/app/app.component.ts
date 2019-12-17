import { Component,OnInit} from '@angular/core';
import grapesjs from 'grapesjs';
import 'grapesjs-preset-webpage';


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
      // Size of the editor
      height: '500px',
      width: 'auto',
      // Disable the storage manager for the moment
      storageManager: { type: null },
      components: '',
      style: '',
      plugins: ['gjs-preset-webpage'],
      pluginsOpts: {
        'gjs-preset-webpage': {
          navbarOpts: false,
          countdownOpts: false,
          formsOpts: false,
          blocksBasicOpts: {
            blocks: ['link-block', 'quote', 'image', 'video', 'text', 'column1', 'column2', 'column3'],
            flexGrid: false,
            stylePrefix: 'lala-'
          }
        }
      },
    });
  }
}
