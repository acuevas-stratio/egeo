import { CommonModule } from '@angular/common';
import { NgModule, Component, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { StDemoGeneratorModule } from './../../utils/demo-generator/demo-generator.module';
import { StHeaderModule } from './../st-header.module';

import { StHeaderModel, StHeaderUserMenuModel } from './../st-header.model';

import { StHeaderComponent } from './../st-header.component';

import { HEADER_MENU, USER_MENU } from './st-header-demo.model';

@Component({
   selector: 'st-header-demo',
   templateUrl: "./st-header-demo.component.html",
   styleUrls: ["./st-header-demo.component.scss"]
})
export class StHeaderDemoComponent {

   public headerMenu: Object[] = [];
   public userMenu: StHeaderUserMenuModel;

   public contentOffset: number;

   constructor(
      private _cd: ChangeDetectorRef
   ) {
      this.headerMenu = HEADER_MENU;
      this.userMenu = USER_MENU;
   }

   onContentChangeOffset(offset: number): void {
      this.contentOffset = offset + 10;
      setTimeout(() => {
         this._cd.markForCheck();
      });
   }

}
