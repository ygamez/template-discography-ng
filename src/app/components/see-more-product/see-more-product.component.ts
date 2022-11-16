import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-see-more-product',
  template: `
  <div class="modal-header">
      <h5 class="modal-title text-center">Free</h5>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
      </button>
  </div>
  <div class="modal-body"> Far far away, even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
  </div>
  <div class="modal-footer">
      <!-- <div class="left-side">
          <button type="button" class="btn btn-default btn-link" (click)="activeModal.close('Close click')">Never mind</button>
      </div> -->
      <div class="divider"></div>
      <div class="right-side">
          <button type="button" class="btn btn-danger btn-link" (click)="activeModal.close('Close click')">EXIT</button>
      </div>
  </div>
  `
})

export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-SeeMoreProduct-component',
  templateUrl: './see-more-product.component.html'
})

export class SeeMoreProductComponent implements OnInit {

  constructor(private modalService: NgbModal) {}
    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    }

  ngOnInit(): void {
  }

}
