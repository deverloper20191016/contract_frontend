import { AfterViewInit, Component, Input, OnDestroy, OnInit, Output, EventEmitter } from "@angular/core";
import { AuthenticationService } from "@app/core/services";
import { GROUP_TYPE } from '@app/shared/constant';
import { Credential } from '@app/core/models';

@Component({
  selector: 'signature-flow-s2',
  templateUrl: './signature-flow-s2.component.html',
  styleUrls: ['signature-flow-s2.component.less']
})
export class SignatureFlowS2Component implements OnInit, OnDestroy, AfterViewInit {
  @Input() employeesSign: any;
  @Output() onFormValid: EventEmitter<any> = new EventEmitter();
  @Output() onAddEmployeeSing: EventEmitter<any> = new EventEmitter();
  GroupType = GROUP_TYPE;
  currentUser: Credential;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.currentUser = this.authService.currentCredentials;
  }

  addEmployeeSing(formVale) {
    this.onAddEmployeeSing.emit(formVale);
  }

  ngAfterViewInit() {

  }
  ngOnDestroy() { }

  formValid(formValue) {
    this.onFormValid.emit(formValue);
  }

}
