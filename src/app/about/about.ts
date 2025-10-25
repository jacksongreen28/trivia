import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class About {
  public readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('aboutDialog');

  protected closeDialog(): void {
    this.dialog().nativeElement.close();
  }

  protected openDialog(): void {
    this.dialog().nativeElement.showModal();
  }
}
