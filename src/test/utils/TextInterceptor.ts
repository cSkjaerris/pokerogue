/**
 * Class will intercept any text or dialogue message calls and log them for test purposes
 */
export default class TextInterceptor {
  private scene;
  public logs: string[] = [];
  constructor(scene) {
    this.scene = scene;
    scene.messageWrapper = this;
  }

  showText(text: string, delay?: number, callback?: Function, callbackDelay?: number, prompt?: boolean, promptDelay?: number): void {
    console.log(text);
    this.logs.push(text);
  }

  showDialogue(text: string, name: string, delay?: number, callback?: Function, callbackDelay?: number, promptDelay?: number): void {
    console.log(name, text);
    this.logs.push(name, text);
  }

  getLatestMessage(): string {
    return this.logs.pop() ?? "";
  }
}
