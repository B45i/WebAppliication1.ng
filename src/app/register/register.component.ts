import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	model: any = {};
	@Output() cancelRegister: EventEmitter<boolean> = new EventEmitter();

	constructor(private authService: AuthService) { }

	ngOnInit() {
	}

	register(): void {
		this.authService.register(this.model).subscribe(() => {
			console.log('Registration is done ');
		}, () => {
			console.log('Error during registration !');
		});
	}

	cancel(): void {
		this.cancelRegister.emit(false);
	}

}
