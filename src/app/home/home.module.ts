import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homeRoutingComponents, HomeRoutingModule } from './home-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ThemeTogglerModule } from '../shared/components/theme-toggler/theme-toggler.module';
import { InfoComponent } from './components/info/info.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SocialsComponent } from './components/socials/socials.component';
import { SocialIconComponent } from './components/social-icon/social-icon.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { CreditsComponent } from './components/credits/credits.component';

@NgModule({
  declarations: [...homeRoutingComponents, NavigationComponent, InfoComponent, AvatarComponent, SocialsComponent, SocialIconComponent, CopyrightComponent, CreditsComponent],
  imports: [
    CommonModule,
    ThemeTogglerModule,
    HomeRoutingModule
  ],
  exports: [NavigationComponent, InfoComponent, AvatarComponent, SocialsComponent, SocialIconComponent, CopyrightComponent, CreditsComponent]
})
export class HomeModule { }
