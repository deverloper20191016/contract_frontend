import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTreeModule } from 'ng-zorro-antd/tree';

import {
  AuthenticationService,
  FileSignService,
  EmployeeService,
  FileUploadEmitter
} from '@app/core/services';

import {
  LayoutComponent,
  AuthLayoutComponent
} from './layout';

import {
  InputLabelComponent,
  UsersTreeComponent,
  PaginationComponent,
  ButtonDeleteComponent,
  TableEditorErrorsComponent,
  DepartmentComponent,
  ManageUnitFormComponent,
  AcountFormComponent,
  EmailFormComponent,
  ContractComponent,
  FileAttachmentComponent,
  DeclarationResultComponent,
  DeclarationResultOfCompanyComponent,
  DeclarationResultDetailComponent,
  UploadFormComponent,
  TableInportErrorsComponent,
  SignaturePadComponent,
  ImageBaseComponent,
  SignatureFlowComponent,
  SignatureFlowS2Component,
  SignatureFlowS3Component,
  SignatureUploadFileComponent,
  FormEployeeSingComponent,
  DialogErrorComponent,
  PdfListThumbnailComponent,
  PdfViewComponent,
} from './components';

import {
  CardFullHeightDirective,
  EditorAutoSizeDirective,
  PluploadDirective,
  PluploadExcelDirective,
} from './directives';
import { SignaturePadModule } from 'angular2-signaturepad';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NzButtonModule,
    NzDatePickerModule,
    NzDropDownModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzModalModule,
    NzSelectModule,
    NzSpinModule,
    NzRadioModule,
    NzCheckboxModule,
    NzPaginationModule,
    NzTabsModule,
    NzTreeModule,
    NzTableModule,
    NzToolTipModule,
    SignaturePadModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [
    LayoutComponent,
    AuthLayoutComponent,
    InputLabelComponent,
    UsersTreeComponent,
    PaginationComponent,
    ButtonDeleteComponent,
    TableEditorErrorsComponent,
    CardFullHeightDirective,
    EditorAutoSizeDirective,
    PluploadDirective,
    PluploadExcelDirective,
    ManageUnitFormComponent,
    DepartmentComponent,
    AcountFormComponent,
    EmailFormComponent,
    ContractComponent,
    FileAttachmentComponent,
    DeclarationResultComponent,
    DeclarationResultOfCompanyComponent,
    DeclarationResultDetailComponent,
    UploadFormComponent,
    TableInportErrorsComponent,
    SignaturePadComponent,
    ImageBaseComponent,
    SignatureFlowComponent,
    SignatureFlowS2Component,
    SignatureFlowS3Component,
    SignatureUploadFileComponent,
    FormEployeeSingComponent,
    DialogErrorComponent,
    PdfListThumbnailComponent,
    PdfViewComponent,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    InputLabelComponent,
    UsersTreeComponent,
    PaginationComponent,
    ButtonDeleteComponent,
    TableEditorErrorsComponent,
    CardFullHeightDirective,
    EditorAutoSizeDirective,
    PluploadDirective,
    PluploadExcelDirective,
    NzCheckboxModule,
    NzToolTipModule,
    ManageUnitFormComponent,
    DepartmentComponent,
    ContractComponent,
    FileAttachmentComponent,
    DeclarationResultComponent,
    DeclarationResultOfCompanyComponent,
    DeclarationResultDetailComponent,
    UploadFormComponent,
    TableInportErrorsComponent,
    SignaturePadComponent,
    ImageBaseComponent,
    SignatureFlowComponent,
    SignatureFlowS2Component,
    SignatureFlowS3Component,
    SignatureUploadFileComponent,
    FormEployeeSingComponent,
    DialogErrorComponent,
    PdfListThumbnailComponent,
    PdfViewComponent,
  ],
  providers: [
    AuthenticationService,
    FileSignService,
    EmployeeService,
    FileUploadEmitter
  ],
  entryComponents: [
    TableEditorErrorsComponent,
    ManageUnitFormComponent,
    AcountFormComponent,
    EmailFormComponent,
    ContractComponent,
    FileAttachmentComponent,
    DeclarationResultComponent,
    DeclarationResultOfCompanyComponent,
    DeclarationResultDetailComponent,
    UploadFormComponent,
    TableInportErrorsComponent,
    SignaturePadComponent,
    ImageBaseComponent,
    SignatureFlowComponent,
    SignatureFlowS2Component,
    SignatureFlowS3Component,
    SignatureUploadFileComponent,
    FormEployeeSingComponent,
    DialogErrorComponent,
  ]
})
export class SharedModule { }
