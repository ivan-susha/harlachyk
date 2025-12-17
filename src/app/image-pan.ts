import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImagePan]',
  standalone: true // Use standalone if you are using standalone components
})
export class ImagePanDirective {
  private isDragging = false;
  private startX!: number;
  private startY!: number;
  private currentX = 0;
  private currentY = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Ensure the image can be positioned
    this.renderer.setStyle(this.el.nativeElement, 'position', 'absolute');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grab');
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.clientX - this.currentX;
    this.startY = event.clientY - this.currentY;
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grabbing');
    // Prevent default drag-and-drop behavior of images
    event.preventDefault();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.isDragging) return;

    this.currentX = event.clientX - this.startX;
    this.currentY = event.clientY - this.startY;

    // Apply the transformation to move the image content
    this.renderer.setStyle(this.el.nativeElement, 'transform',
      `translate(${this.currentX}px, ${this.currentY}px)`);
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent): void {
    this.isDragging = false;
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grab');
  }
}
