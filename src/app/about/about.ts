import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faQuestion , faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  imports: [FaIconComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class About {
  public readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('aboutDialog');

  protected infoIcon = faQuestion
  protected closeIcon = faClose

  protected closeDialog(): void {
    this.dialog().nativeElement.close();
  }

  protected openDialog(): void {
    this.dialog().nativeElement.showModal();
  }
}
