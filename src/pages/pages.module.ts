import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from 'src/components/components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
    declarations: [PrincipalComponent],
    imports: [ CommonModule, 
        BrowserAnimationsModule, 
        ComponentsModule,
        FontAwesomeModule ],
    exports: [PrincipalComponent],
    providers: [],
})
export class PagesModule {}