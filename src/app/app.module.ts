import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FeaturesComponent } from './components/features/features.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { SearchRoomComponent } from './components/search-room/search-room.component';
import { NewPropertyComponent } from './components/new-property/new-property.component';
import { TestimoniesComponent } from './components/testimonies/testimonies.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesComponent,
    PropertiesComponent,
    SearchRoomComponent,
    NewPropertyComponent,
    TestimoniesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
