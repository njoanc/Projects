import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from '../project';

@Component({
	selector: 'app-form',
	templateUrl: './project-form.component.html',
	styleUrls: [ './project-form.component.css' ]
})
export class ProjectFormComponent implements OnInit {
	newProject = new Project('', '', '', new Date());
	@Output() emitQuote = new EventEmitter();
	quoteStr: string;
	quotePublisher: string;
	quoteAuthor: string;
	theProject: any;

	submitQuote() {
		this.theProject = new Project(this.quotePublisher, this.quoteAuthor, this.quoteStr, new Date());
		this.quoteStr = '';
		this.quoteAuthor = '';
		this.quotePublisher = '';

		this.emitQuote.emit(this.theProject);
	}

	constructor() {}

	ngOnInit() {}
}
