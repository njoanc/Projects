import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: [ './project.component.css' ]
})
export class ProjectComponent implements OnInit {
	projects = [
		new Project(
			'Jeanne',
			'George Bernard Show',
			'The single biggest problem in communication is the illusion that it has taken place.',
			new Date(2018, 3, 14)
		),
		new Project(
			'Aline',
			'Anna Held',
			'A woman should be like a single flower, not a whole bouquet.',
			new Date(2018, 1, 12)
		)
	];
	number: number;
	number1: number;
	counter: number;

	addProject(emittedProject) {
		this.projects.push(emittedProject);
	}
	toogleDetails(y) {
		this.projects.splice(y, 1);
	}

	upvote(i) {
		this.projects[i].upvotes += 1;
	}
	downvote(i) {
		this.projects[i].downvotes += 1;
	}
	delProject(i) {
		this.projects.splice(i, 1);
	}
	highestUpvote() {
		this.number = 0;
		this.number1 = 0;

		for (this.counter = 0; this.counter < this.projects.length; this.counter++) {
			this.number1 = this.projects[this.counter].upvotes;
			if (this.number1 > this.number) {
				this.number = this.number1;
			}
		}
		return this.number1;
	}
	constructor() {}

	ngOnInit() {}
}
