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
			'Communication',
			'George Bernard Show',
			'The single biggest problem in communication is the illusion that it has taken place.'
		),
		new Project('Women', 'Anna Held', 'A woman should be like a single flower, not a whole bouquet.')
	];
	preNum: number;
	lastNum: number;
	counter: number;

	addProject(emittedProject) {
		this.projects.push(emittedProject);
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
		this.preNum = 0;
		this.lastNum = 0;

		for (this.counter = 0; this.counter < this.projects.length; this.counter++) {
			this.lastNum = this.projects[this.counter].upvotes;
			if (this.lastNum > this.preNum) {
				this.preNum = this.lastNum;
			}
		}
		return this.preNum;
	}
	constructor() {}

	ngOnInit() {}
}
