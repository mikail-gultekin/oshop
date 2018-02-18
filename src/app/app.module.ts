import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';
import { AppComponent } from 'app/app.component';
import { SharedModule } from 'shared/shared.module';
import { AdminModule } from 'app/admin/admin.module';
import { ShoppingModule } from 'app/shopping/shopping.module';
import { CoreModule } from 'app/core/core.module';
import { ProductsComponent } from 'app/shopping/components/products/products.component';
import { LoginComponent } from 'app/core/components/login/login.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'login', component: LoginComponent }
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
