export class Task {
  id: number = Math.floor(Math.random() * 65536);;
  title: string = "";
  description: string = "";
  date?: Date;
  done: boolean = false;
}