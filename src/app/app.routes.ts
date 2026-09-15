import { Routes } from '@angular/router';
import { LoginComponent } from './layout/addiitions/login/login.component';
import { RegisterComponent } from './layout/addiitions/register/register.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { AboutusComponent } from './layout/pages/aboutus/aboutus.component';
import { CareerComponent } from './layout/pages/career/career.component';
import { ContactComponent } from './layout/pages/contact/contact.component';
import { NewsComponent } from './layout/pages/news/news.component';
import { ProductsComponent } from './layout/pages/products/products.component';
import { NotfoundComponent } from './layout/addiitions/notfound/notfound.component';
import { ServicesComponent } from './layout/pages/services/services.component';
import { PlasticComponent } from './layout/pages/plastic/plastic.component';
import { ProductDetailsComponent } from './layout/pages/product-details/product-details.component';
import { BlogDetailsComponent } from './layout/pages/blog-details/blog-details.component';

export const routes: Routes = [
    {path : '', redirectTo : 'home' , pathMatch : "full" },
    {path : 'login' , component : LoginComponent },
    {path : 'register' , component : RegisterComponent },
    {path : 'home' , component : HomeComponent },
    {path : 'aboutus' , component : AboutusComponent },
    {path : 'services' , component : ServicesComponent },
    {path : 'career' , component : CareerComponent },
    {path : 'contact' , component : ContactComponent },
    {path : 'news' , component : NewsComponent },
    {path : 'products' , component : ProductsComponent },
    {path : 'plastic Recycling' , component : PlasticComponent },
    {path : 'product-details' , component : ProductDetailsComponent },
    {path : 'blog-details' , component : BlogDetailsComponent },
    {path : '**' , component : NotfoundComponent }
];
