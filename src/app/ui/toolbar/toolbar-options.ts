import {ToolbarAction} from './toolbar-action';

export class ToolbarOptions {
  backEnable: boolean;
  title: string;
  actions: ToolbarAction[];


  constructor(backEnabled: boolean, title: string, actions: ToolbarAction[]) {
    this.backEnable = backEnabled;
    this.title = title;
    this.actions = actions;
  }
}
