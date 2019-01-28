import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectComponent } from './project/project.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { ProjectFormComponent } from './project-form/project-form.component';

@NgModule({
	declarations: [
		AppComponent,
		ProjectDetailsComponent,
		ProjectComponent,
		StrikethroughDirective,
		DateCountPipe,
		ProjectFormComponent
	],
	imports: [ BrowserModule, FormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
