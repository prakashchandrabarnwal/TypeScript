import { Sorter } from './sorter';

export class CharacterCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftindex: number, rightIndex: number): boolean {
    return (
      this.data[leftindex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase()
    )
  }

  swap(leftIndex: number, rightIndex: number): void {
    const chars = this.data.split('');
    const leftHand = chars[leftIndex];
    chars[leftIndex] = chars[rightIndex];
    chars[rightIndex] = leftHand;
    this.data = chars.join("");

  }
}