import {
  Component,
  Prop,
  Element,
  Event,
  EventEmitter,
  h,
  Method,
  Watch,
} from '@stencil/core';
import { TranslationController } from '../../global/Translation';
import { renderHiddenField } from '../../utils';
import { InitialUploaderFile, UploaderFile } from './file-uploader2-util';
import { fileDragSVG, fileErrorSVG } from '../../utils/assets';

let fileCount = 0;

@Component({
  tag: 'fw-file-uploader-2',
  styleUrl: 'file-uploader-2.scss',
  shadow: true,
})
export class FileUploader {
  @Element() host!: HTMLElement;

  /**
   * name - field name
   */
  @Prop() name = '';

  /**
   * text - file uploader text.
   */
  // @i18n({ keyName: 'fileUploader2.text' })
  @Prop({ mutable: true })
  text;

  /**
   * description - file uploader description.
   */
  // @i18n({ keyName: 'fileUploader2.description' })
  @Prop({ mutable: true })
  description;

  @Prop()
  infoText = '';

  /**
   * accept - comma separated string. tells us what file formats file uploader should accept.
   */
  @Prop() accept = '';

  /**
   * maxFileSize - maximum file size the file uploader must accept.
   */
  @Prop() maxFileSize = 0;

  /**
   * acceptError - Error message to display when format is invalid.
   */
  // @i18n({ keyName: 'fileUploader2.acceptError' })
  @Prop({ mutable: true })
  acceptError = TranslationController.t('fileUploader2.acceptError');

  /**
   * maxFileSizeError - Error message to display when file size exceeds limit
   */
  // @i18n({ keyName: 'fileUploader2.maxFileSizeError' })
  @Prop({ mutable: true })
  maxFileSizeError = TranslationController.t('fileUploader2.maxFileSizeError');

  /**
   * totalFileSizeAllowedError - Total file size (combination of all files) allowed for upload.
   */
  @Prop({ mutable: true })
  totalFileSizeAllowedError = TranslationController.t(
    'fileUploader2.totalFileSizeAllowedError'
  );

  /**
   * maxFilesLimitError - Error message when going beyond files limit.
   */
  // @i18n({ keyName: 'fileUploader2.maxFilesLimitError' })
  @Prop({ mutable: true })
  maxFilesLimitError = TranslationController.t(
    'fileUploader2.maxFilesLimitError'
  );

  /**
   * fileUploadError - Error message when a file upload fails.
   */
  // @i18n({ keyName: 'fileUploader2.fileUploadError' })
  @Prop({ mutable: true })
  fileUploadError;

  /**
   * actionURL - URL to make server call.
   */
  @Prop() actionURL = '';

  /**
   * actionParams - additional information to send to server other than the file.
   */
  @Prop() actionParams: { [prop: string]: any } = {};

  /**
   * multiple - upload multiple files.
   */
  @Prop() multiple = false;

  /**
   * Max files allowed to upload.
   */
  @Prop() filesLimit = 10;

  /**
   * Max total size allowed for upload
   */
  @Prop() totalFileSizeAllowed = 0;

  /**
   * Upload all files in one single shot
   */
  @Prop() isBatchUpload = false;

  /**
   * files - files collection.
   */
  @Prop({ mutable: true }) files: UploaderFile[] = [];

  /**
   * modify request
   * @param xhr
   * @returns xhr
   */
  @Prop() modifyRequest: (xhr: XMLHttpRequest) => XMLHttpRequest = (xhr) => xhr;

  /**
   * to load default values in file uploader component.
   */
  @Prop() initialFiles: InitialUploaderFile[] = [];

  /**
   * restrict the width of the attachment in the file uploader
   */
  @Prop() restrictAttachmentWidth = false;

  /**
   * Use this prop to show the label on the component.
   */
  @Prop() hideLabel = true;

  /**
   * Use a simple interface for the single file mode.
   */
  @Prop() simpleInterfaceForSingleMode = false;

  /**
   * field acts as a mandatory field and displays an asterisk next to the label. If the attribute’s value is undefined, the value is set to false.
   */
  @Prop() required = false;

  /**
   * errors - errors collection.
   */
  @Prop({ mutable: true }) errors: any = [];

  /**
   * Triggered during batch upload, when all files are uploaded.
   */
  @Event() fwFilesUploaded: EventEmitter;

  /**
   * Triggered during a file reupload.
   */
  @Event() fwFileReuploaded: EventEmitter;

  /**
   * Triggered during file remove.
   */
  @Event() fwFileRemoved: EventEmitter;

  /**
   * Event that triggers when uploading is in progress, completed or failed.
   */
  @Event() fwChange: EventEmitter;

  /**
   * Event that triggers when removing a file from the file uploader.
   */
  @Event() fwRemove: EventEmitter;

  /**
   * private
   * fileInputElement
   */
  fileInputElement: HTMLInputElement = null;

  /**
   * private
   * dropzoneContainer
   */
  dropzoneContainer: HTMLElement = null;

  /**
   * private
   * fileUploadPromises
   */
  fileUploadPromises: { [prop: number]: Promise<any> } = {};

  /**
   * private
   * formDataCollection
   */
  formDataCollection: { [prop: number]: FormData } = {};

  /**
   * private
   * isBatchUploadInProgress
   */
  isBatchUploadInProgress = false;

  /**
   * componentWillLoad life cycle event
   */
  componentWillLoad() {
    this.handleInitialFilesChange(this.initialFiles);
  }

  @Watch('initialFiles')
  handleInitialFilesChange(changedFiles) {
    this._reset(false, false);

    if (this.multiple) {
      changedFiles.forEach((initialFile) => this.setLocalFile(initialFile));
    } else {
      if (changedFiles.length) {
        this.setLocalFile(changedFiles[0]);
      }
    }
  }

  setLocalFile(initialFile) {
    this.addFileToFiles(
      initialFile.file,
      initialFile.progress,
      initialFile.lastServerResponse,
      initialFile.error
    );
    this.addFileToFormDataCollection(initialFile.file);
  }

  /**
   * private
   * isBatchAllow - will determine if this is a batch upload
   * @returns {boolean} isBatchAllow
   */
  isBatchAllow() {
    return this.isBatchUpload || !this.actionURL ? true : false;
  }

  /**
   * private
   * get all locally available files in the component
   * @returns FileList of all locally available files in the component
   */
  _getFiles() {
    return this.files;
  }

  /**
   * get all locally available files in the component
   * @returns FileList of all locally available files in the component
   */
  @Method()
  async getFiles() {
    return this._getFiles();
  }

  _getFilesList() {
    const data = new DataTransfer();
    this.files.forEach((file) => {
      const formDataFile = this.formDataCollection[file.id].get('file') as File;
      data.items.add(formDataFile);
    });
    return data.files;
  }

  @Method()
  async getFilesList() {
    return this._getFilesList();
  }

  @Method()
  async setFocus() {
    this.dropzoneContainer.focus();
  }

  /**
   * private
   * reset file uploader
   */
  _reset(resetInput = true, resetErrors = true) {
    this.files = [];
    this.formDataCollection = {};
    this.fileUploadPromises = {};
    if (resetInput && this.fileInputElement) {
      this.fileInputElement.value = '';
    }
    if (resetErrors) {
      this.errors = [];
    }
  }

  /**
   * reset file uploader
   */
  @Method()
  async reset() {
    this._reset();
  }

  /**
   * private
   * filesValidation validate collection of files
   * @param files files to be validated
   * @returns filesValidation
   */
  filesValidation(files) {
    let passed = true;
    const totalFiles = [...this.files, ...Array.from(files)];
    const totalSize = totalFiles.reduce(
      (acc: number, obj: File) => acc + obj.size,
      0
    );
    this.errors = [];

    if (totalFiles.length > this.filesLimit) {
      this.errors = [this.maxFilesLimitError];
      passed = false;
    } else if (
      this.totalFileSizeAllowed !== 0 &&
      totalSize > this.totalFileSizeAllowed * 1024 * 1024
    ) {
      this.errors = [this.totalFileSizeAllowedError];
      passed = false;
    } else {
      for (let index = 0; index < files.length; index++) {
        const file = files[index];
        passed = this.fileValidation(file);
        if (!passed) {
          break;
        }
      }
    }

    return passed;
  }

  /**
   * private
   * fileValidation validate a file for upload
   * @param file
   * @returns
   */
  fileValidation(file) {
    let isPassed = true;
    const fileExtension = file.name;
    const fileSize = file.size;
    const errors: any = [];
    if (this.accept) {
      isPassed = this.accept
        .split(',')
        .filter((fileType) => fileType !== '')
        .some((fileType) => fileExtension.includes(fileType.trim()));
      if (!isPassed) {
        errors.push(this.acceptError);
      }
    }
    if (this.maxFileSize !== 0) {
      if (fileSize > this.maxFileSize * 1024 * 1024) {
        isPassed = false;
        errors.push(this.maxFileSizeError);
      }
    }
    this.errors = [...this.errors, ...errors];
    return isPassed;
  }

  /**
   * private
   * addFileToFormDataCollection - add a file to formDataCollection state
   * @param file file to add in formDataCollection
   */
  addFileToFormDataCollection(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    this.formDataCollection[fileCount] = formData;
  }

  /**
   * private
   * removeFileFromFormDataCollection - remove a file from the formDataCollection state
   * @param fileId id of the file
   */
  removeFileFromFormDataCollection(fileId: number) {
    delete this.formDataCollection[fileId];
  }

  /**
   * private
   * findFileIndex - find the index of file in files state
   * @param fileId if of the file
   * @returns fileIndex
   */
  findFileIndex(fileId: number | string) {
    return this.files.findIndex(
      (file) => file.id === parseInt(fileId as string)
    );
  }

  /**
   * private
   * addFileToFiles - Add the file to the files state
   * @param file file to add to the files state
   * @param progress current upload progress state of the file
   * @param lastServerResponse last response from the server
   * @param error error message from the upload
   * @returns
   */
  addFileToFiles(
    file: File,
    progress?: number,
    lastServerResponse?: any,
    error?: string
  ) {
    const uploaderFile = new UploaderFile(
      ++fileCount,
      file,
      progress,
      lastServerResponse,
      error
    );
    this.files = [...this.files, uploaderFile];
    return uploaderFile;
  }

  /**
   * private
   * removeFileFromFiles - remove file from the files state
   * @param fileId id of the file
   */
  removeFileFromFiles(fileId: number) {
    const fileIndex = this.findFileIndex(fileId);
    const removedFile = this.files[fileIndex];
    if (fileIndex >= 0) {
      const beforeFiles = this.files.slice(0, fileIndex);
      const afterFiles = this.files.slice(fileIndex + 1, this.files.length + 1);
      this.files = [...beforeFiles, ...afterFiles];
    }
    return removedFile;
  }

  /**
   * private
   * updateFileInFiles - update the file object in the files state
   */
  updateFileInFiles(fileId: number, updateObject) {
    const fileIndex = this.findFileIndex(fileId);
    if (fileIndex >= 0) {
      this.files = [
        ...this.files.slice(0, fileIndex),
        Object.assign(this.files[fileIndex], updateObject),
        ...this.files.slice(fileIndex + 1, this.files.length),
      ];
    }
  }

  /**
   * private
   * uploadFileLocally - upload the files locally to files and formDataCollection
   * @param file file to upload locally
   * @returns localFile local file state
   */
  uploadFileLocally(file: File) {
    const localFile = this.addFileToFiles(file);
    this.addFileToFormDataCollection(file);
    this.fwChange.emit({
      name: this.name,
      file: localFile,
      action: 'local-upload',
      files: this._getFiles(),
      fileList: this._getFilesList(),
    });
    return localFile;
  }

  /**
   * private
   * removeFileLocally - remove the file from the local states files and formDataCollection
   * @param fileId id of the file
   */
  removeFileLocally(fileId: number) {
    const removedFile = this.removeFileFromFiles(fileId);
    this.removeFileFromFormDataCollection(fileId);
    this.fwFileRemoved.emit({
      name: this.name,
      fileId: fileId,
      fileList: this._getFilesList(),
    });
    this.fwChange.emit({
      name: this.name,
      file: removedFile,
      action: 'local-remove',
      files: this._getFiles(),
      fileList: this._getFilesList(),
    });
    if (this.files.length === 0) {
      this._reset();
    }
  }

  /**
   * private
   * uploadFile - upload file to the remote server.
   * @param fileId id of the file
   * @returns fileUploadPromise promise from the file upload that will return server response
   */
  uploadFile(fileId) {
    const formData = this.formDataCollection[fileId];
    this.updateFileInFiles(fileId, { progress: 1 });
    // adding extra information to formData before uploading
    for (const key in this.actionParams) {
      if (Object.prototype.hasOwnProperty.call(this.actionParams, key)) {
        formData.append(key, this.actionParams[key]);
      }
    }
    // creating and sending xhr requests
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener(
      'progress',
      (event) =>
        this.updateFileInFiles(fileId, {
          progress: (event.loaded / event.total) * 100,
        }),
      false
    );
    const fileUploadPromise = new Promise((resolve: any, reject: any) => {
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          const serverResponse = {
            uploadStatus: xhr.status,
            response: xhr.response,
            fileId,
          };
          if (xhr.status === 200) {
            this.updateFileInFiles(fileId, { serverResponse });
            resolve(serverResponse);
          } else {
            this.updateFileInFiles(fileId, {
              error:
                this.fileUploadError ||
                TranslationController.t('fileUploader2.fileUploadError'),
              progress: -1,
              serverResponse,
            });
            reject(serverResponse);
          }

          this.fwChange.emit({
            name: this.name,
            file: this.files[fileId],
            action: 'remote-upload',
            files: this._getFiles(),
            fileList: this._getFilesList(),
          });
        }
      };
    });
    xhr.open('POST', this.actionURL);
    const modifiedRequest = this.modifyRequest(xhr);
    modifiedRequest.send(formData);
    return fileUploadPromise;
  }

  /**
   * uploadFile
   * @param fileId
   * @returns fileUploadPromise
   */
  @Method()
  async uploadFiles() {
    if (this.files.length && !this.isBatchUploadInProgress) {
      this.isBatchUploadInProgress = true;
      for (const fileId in this.formDataCollection) {
        if (
          Object.prototype.hasOwnProperty.call(this.formDataCollection, fileId)
        ) {
          const uploadPromise = this.uploadFile(fileId);
          this.fileUploadPromises[fileId] = uploadPromise;
        }
      }
      Promise.allSettled(Object.values(this.fileUploadPromises)).then(
        (responses: any) => {
          let hasErrorFiles = false;
          this.fileUploadPromises = {};
          const responseValues = responses.map((response: any) => {
            if (response.value?.uploadStatus === 200) {
              this.removeFileLocally(response.value?.fileId);
            } else {
              hasErrorFiles = true;
            }
            return response.value;
          });
          const responseValue = this.multiple
            ? responseValues
            : responseValues[0];
          this.fwFilesUploaded.emit(responseValue);
          if (!hasErrorFiles) {
            this.isBatchUploadInProgress = false;
          }
        }
      );
    }
  }

  retryFileUpload(fileId) {
    this.updateFileInFiles(fileId, { error: '' });
    const uploadPromise = this.uploadFile(fileId);
    uploadPromise.then((serverResponse) => {
      if (this.isBatchAllow()) {
        this.removeFileLocally(fileId);
        if (Object.keys(this.formDataCollection).length === 0) {
          this.isBatchUploadInProgress = false;
        }
      }
      this.fwFileReuploaded.emit(serverResponse);
    });
  }

  /**
   * private
   * fileHandler - handler for both drop and input change
   * @param event
   */
  fileHandler(event) {
    if (!this.multiple && this.files.length === 1) {
      this._reset(false);
    }
    const tempFiles = event.target.files || event.dataTransfer.files;
    let files = [];
    if (tempFiles.length) {
      files = this.multiple ? tempFiles : [tempFiles[0]];
    }
    if (files.length) {
      const passed = this.filesValidation(files);
      if (passed) {
        for (let index = 0; index < files.length; index++) {
          const file = files[index];
          const localFile = this.uploadFileLocally(file);

          if (!this.isBatchAllow()) {
            const filePromise = this.uploadFile(localFile.id);
            this.fileUploadPromises[localFile.id] = filePromise;
          }
        }
      }
    }
  }

  showSimpleInterface() {
    return (
      !this.multiple &&
      this.simpleInterfaceForSingleMode &&
      this.files.length === 1
    );
  }

  /**
   * private
   * drag and drop handler
   * @param event
   */
  dropHandler(event) {
    event.preventDefault();
    this.fileHandler(event);
  }

  /**
   * renderDropzone
   * @returns {JSX.Element}
   */
  renderDropzone() {
    return (
      <div
        class={{
          'file-uploader__body__dropzone': true,
          'file-uploader__body__dropzone--disabled':
            this.isBatchUploadInProgress,
          'file-uploader__body__dropzone--error': !!this.errors.length,
        }}
        key='dropzone'
        tabIndex={0}
        onDrop={(event) =>
          !this.isBatchUploadInProgress && this.dropHandler(event)
        }
        onDragOver={(event) => event.preventDefault()}
        onClick={() =>
          !this.isBatchUploadInProgress && this.fileInputElement.click()
        }
        onKeyUp={(event) => {
          if (event.key === 'Enter' || event.key === 'Space') {
            !this.isBatchUploadInProgress && this.fileInputElement.click();
          }
        }}
        ref={(el) => (this.dropzoneContainer = el)}
        role='button'
      >
        <div class='file-uploader__body__dropzone__center'>
          <div class='file-uploader__body__dropzone__center__clickable'>
            <div class='file-uploader__body__dropzone__center__clickable__icon'>
              {!this.errors.length ? (
                <div
                  innerHTML={
                    new DOMParser().parseFromString(fileDragSVG, 'text/html')
                      .body.innerHTML
                  }
                ></div>
              ) : (
                <div
                  innerHTML={
                    new DOMParser().parseFromString(fileErrorSVG, 'text/html')
                      .body.innerHTML
                  }
                ></div>
              )}
            </div>
            {!this.errors.length ? (
              <div
                class='file-uploader__body__dropzone__center__clickable__text'
                innerHTML={
                  this.text || TranslationController.t('fileUploader2.text')
                }
              ></div>
            ) : (
              <div class='file-uploader__body__dropzone__center__clickable__error'>
                {this.errors[0]}.{' '}
                <span class='highlight'>
                  {TranslationController.t('fileUploader2.retry')}
                </span>
              </div>
            )}
            {this.description && (
              <div class='file-uploader__body__dropzone__center__clickable__description'>
                <span>{this.description}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  /**
   * renderFiles
   * @returns {JSX.Element}
   */
  renderFiles() {
    return this.files.length ? (
      <div class='file-uploader__body__files' key='files'>
        <div
          class={{
            'file-uploader__body__files__restrict':
              this.restrictAttachmentWidth,
          }}
        >
          <div class='file-uploader__body__files__center'>
            {this.files.map((file) => {
              return (
                <fw-attachment
                  index={file.id}
                  label={file.name}
                  size={file.size}
                  state={file.state}
                  type={file.type}
                  errorMessage={file.error}
                  onFwDelete={(event) => {
                    event.stopPropagation();
                    this.removeFileLocally(event.detail.index);
                  }}
                  onFwReupload={(event) => {
                    event.stopPropagation();
                    this.retryFileUpload(event.detail.index);
                  }}
                ></fw-attachment>
              );
            })}
          </div>
        </div>
      </div>
    ) : null;
  }

  /**
   * render
   * @returns {JSX.Element}
   */
  render() {
    const multipleFiles = this.multiple ? { multiple: true } : {};
    renderHiddenField(this.host, this.name, null, this._getFilesList());
    return (
      <div class='file-uploader'>
        {(this.infoText.trim() !== '' || !this.hideLabel || this.required) && (
          <div class='file-uploader__header'>
            <div class='file-uploader__header__block'>
              {(!this.hideLabel || this.required) && (
                <div
                  class={{
                    'file-uploader__header__block__title': true,
                    'required': this.required,
                  }}
                >
                  {TranslationController.t('fileUploader2.attachFiles')}
                </div>
              )}
              <div class='file-uploader__header__block__option'>
                {this.showSimpleInterface() && (
                  /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
                  <a
                    role='button'
                    tabIndex={0}
                    onClick={() => this.fileInputElement.click()}
                    onKeyDown={(ev) =>
                      ev.key === 'Enter' && this.fileInputElement.click()
                    }
                  >
                    {TranslationController.t(
                      'fileUploader2.uploadDifferentFile'
                    )}
                  </a>
                )}
              </div>
            </div>
            {this.infoText.trim() !== '' ? (
              <fw-inline-message open type='info'>
                {this.infoText}
              </fw-inline-message>
            ) : null}
          </div>
        )}
        {
          <div
            class={{
              'file-uploader__body': true,
              'file-uploader__body--error': !!this.errors.length,
              'file-uploader__body--hide': this.showSimpleInterface(),
            }}
            onDragOver={(ev: DragEvent) => {
              (ev.currentTarget as HTMLElement).classList.add(
                'file-uploader__body--on-drag'
              );
            }}
            onDragLeave={(ev: DragEvent) => {
              (ev.currentTarget as HTMLElement).classList.remove(
                'file-uploader__body--on-drag'
              );
            }}
            onDrop={(ev: DragEvent) => {
              (ev.currentTarget as HTMLElement).classList.remove(
                'file-uploader__body--on-drag'
              );
            }}
          >
            <input
              type='file'
              name={this.name}
              hidden
              {...multipleFiles}
              onChange={(ev) => {
                this.fileHandler(ev);
              }}
              ref={(el) => (this.fileInputElement = el)}
            ></input>
            {this.renderDropzone()}
          </div>
        }
        {this.renderFiles()}
      </div>
    );
  }
}
