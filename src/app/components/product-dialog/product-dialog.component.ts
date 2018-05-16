import {Component, Input, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductDialogComponent {

  @Input() productName: string;
  @Input() priceInfo: object;

  closeResult: string;

  constructor(private modalService: NgbModal) {}


  /**
   * Open product dialog with informatio
   * @param content - html template of dialog
   */
  openDialog(content) {
    this.modalService.open(content, {
      centered: true,
      // backdropClass: 'light-blue-backdrop'
    });
  }
}
