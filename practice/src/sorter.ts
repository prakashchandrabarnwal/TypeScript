
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {

  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        //instance gaurd constructor
        // if (this.collection instanceof Array) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
        //}

        //type gaurd number string boolean symbol
        // if (typeof this.collection === "string") {

        // }




      }
    }
  }
};

