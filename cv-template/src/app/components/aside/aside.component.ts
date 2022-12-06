import { Component, Input } from '@angular/core';
import { AsideData } from 'src/app/models/aside-models';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  @Input() public asideData!:AsideData
}
