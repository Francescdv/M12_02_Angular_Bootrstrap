import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';





const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full',
    data: {
      title: 'Title for Home Component',
      descrption: 'Description of Home Component',
      ogTitle: 'Description of Home Component for social media',
    }
  },
  {
    path: 'first', component: AboutComponent,
    data: {
      title: 'Title for First Component',
      descrption: 'Description of First Component',
      robots: 'noindex, nofollow',
      ogTitle: 'Description of First Component for social media',
    }
  },
  {
    path: 'second', children:
      [
        {
          path: '', component: ContactComponent , pathMatch: 'full',
          data: {
            title: 'Title for Second Component',
            descrption: 'Description of Second Component',
          }
        },
        {
          path: 'a', component: FooterComponent,
          data: {
            title: 'Title for Second A Component',
            descrption: 'Description of Second A Component',
            ogTitle: 'Title of Second A Component for social media',
            ogDescription: 'Description of Second A Component for social media',
            ogImage: 'ImagePathForSocialMedia'
          }
        },
      ]
  },
  {
    path: 'third', component: HeaderComponent,
    data: {
      title: 'Title for third Component',
      descrption: 'Description of third Component',
      ogDescription: 'Description of third Component for social media',
      ogUrl: '/home'
    }
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
