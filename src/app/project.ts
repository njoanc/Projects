export class Project {
	public upvotes: number;
	public downvotes: number;
	public myDate: Date;
	constructor(public name: string, public author: string, public quote: string) {
		this.upvotes = 0;
		this.downvotes = 0;
		this.myDate = new Date();
	}
}
// export class ProjectComponent implements OnInit {
// 	projects = [
// 		new Project(
// 			1,
// 			'Watch Finding Nemo',
// 			'Find an online version and watch merlin find his son',
// 			new Date(2018, 3, 14)
// 		),
// 		new Project(2, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date(2018, 6, 9)),
// 		new Project(3, 'Get new Phone Case', 'Diana has her birthday coming up soon', new Date(2018, 1, 12)),
// 		new Project(4, 'Get Dog Food', 'Pupper likes expensive sancks', new Date(2018, 0, 18)),
// 		new Project(5, 'Solve math homework', 'Damn Math', new Date(2018, 2, 14)),
// 		new Project(6, 'Plot my world domination plan', 'Cause I am an evil overlord', new Date(2018, 3, 14))
// 	];
// }
