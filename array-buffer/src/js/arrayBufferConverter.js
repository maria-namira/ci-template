export default class ArrayBufferConverter {
  load(value) {
    this.buffer = value;
  }

  toString() {
    const view = new Uint16Array(this.buffer);
    return String.fromCharCode(...view);
  }
}