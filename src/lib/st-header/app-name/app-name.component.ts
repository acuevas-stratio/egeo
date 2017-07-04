/*
 * Copyright (C) 2016 Stratio (http://stratio.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StDeprecated } from '../../decorators/require-decorators';

@Component({
   selector: 'app-name',
   styleUrls: ['./app-name.component.scss'],
   templateUrl: './app-name.component.html',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNameComponent {

   @Input() @StDeprecated('STRATIO') companyName: string | undefined;
   @Input() appName: string | undefined;
   @Input() appLogoPath: string | undefined;
   @Input() qaTag: string;

   public showAppName(): boolean {
      return this.appName !== undefined;
   }
}
