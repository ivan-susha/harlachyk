
import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-image-cropper',
  templateUrl: 'image-cropper.component.html',
  styleUrls: ['image-cropper.component.css']
})
export class ImageCropperComponent {
  @ViewChild('container') container!: ElementRef<HTMLDivElement>;
  @ViewChild('draggableImage') image!: ElementRef<HTMLImageElement>;

  isDragging = false;
  offsetX = 0;
  offsetY = 0;
  currentX = 0;
  currentY = 0;

  // Удобный метод для получения размеров
  get containerRect() {
    return this.container.nativeElement.getBoundingClientRect();
  }
  get imageRect() {
    return this.image.nativeElement.getBoundingClientRect();
  }

  // Начало перетаскивания
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.offsetX = event.clientX - this.image.nativeElement.getBoundingClientRect().left;
    this.offsetY = event.clientY - this.image.nativeElement.getBoundingClientRect().top;
    this.image.nativeElement.style.cursor = 'grabbing';
  }

  // Перетаскивание
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;

    let newX = event.clientX - this.containerRect.left - this.offsetX;
    let newY = event.clientY - this.containerRect.top - this.offsetY;

    // Ограничение движения
    // Максимальное смещение влево/вверх
    const maxX = 0; // Картинка не может сдвинуться влево дальше своего начала
    const maxY = 0; // Картинка не может сдвинуться вверх дальше своего начала

    // Максимальное смещение вправо/вниз
    const minX = this.containerRect.width - this.imageRect.width; // Картин
  }
}
