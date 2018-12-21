import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IMan} from '../man';
import {MenService} from '../men.service';

@Component({
    selector: 'app-awesome',
    templateUrl: './awesome.component.html',
    styleUrls: ['./awesome.component.scss']
})
export class AwesomeComponent implements OnInit {

    awesomeList: IMan[] = [];
    inputControl = new FormControl();
    awesomeForm = FormGroup;

    constructor(private menService: MenService,
                private fb: FormBuilder) {
    }

    ngOnInit() {
        this.menService.getAwesomes().subscribe(next => {
            this.awesomeList = next;
        });
    }

    onSubmit() {
        const value = this.awesomeForm;
        this.menService.createAwesome(value)
            .subscribe(next => {
                this.awesomeList.unshift(next);
                this.awesomeForm.reset({
                    title: '',
                    description: ''
                });
            }, error => console.log(error));
    }

    toggleAwesome(i) {
        const awesome = this.awesomeList[i];
        const awesomeData = {
            ...awesome
        };
    }

    addAwesome() {
        const awesome: Partial<IMan> = {
            url: this.inputControl.value,
            descriptions: this.inputControl.value
        };
        this.menService.createAwesome(awesome).subscribe(next => {
            this.awesomeList.unshift(next);
            this.inputControl.setValue('');
        });
    }

    deleteAwesome(i) {
        const awesome = this.awesomeList[i];
        this.menService.deleteAwesome(awesome.id).subscribe(next => {
            this.awesomeList = this.awesomeList.filter(t => t.id !== awesome.id);
        });
    }

}
