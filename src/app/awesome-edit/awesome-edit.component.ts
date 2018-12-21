import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {IMan} from '../man';
import {MenService} from '../men.service';

@Component({
    selector: 'app-awesome-edit',
    templateUrl: './awesome-edit.component.html',
    styleUrls: ['./awesome-edit.component.scss']
})
export class AwesomeEditComponent implements OnInit {
    awesome: IMan;
    awesomeForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private menService: MenService,
        private fb: FormBuilder,
        private router: Router
    ) {
    }

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.menService.getAwesomeById(id).subscribe(
            next => {
                this.awesome = next;
                this.awesomeForm.patchValue(this.awesome);
            },
            error => {
                console.log(error);
                this.awesome = null;
            }
        );
    }

    onSubmit() {
        if (this.awesomeForm.valid) {
            const {value} = this.awesomeForm;
            const data = {
                ...this.awesome,
                ...value
            };
            this.menService.updateAwesome(data).subscribe(
                next => {
                    this.router.navigate(['/awesome']);
                },
                error => console.log(error)
            );
        }
    }
}
