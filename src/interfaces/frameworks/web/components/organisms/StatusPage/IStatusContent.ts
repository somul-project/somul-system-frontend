type statusType = 0 | 1 | 2 | 3;

export interface IStatusContent {
  statusNum: statusType;
  applyDate: string;
  title: string;
  video: Array<string>;
  speaker: string;
  bio: string;
  description: string;
}
