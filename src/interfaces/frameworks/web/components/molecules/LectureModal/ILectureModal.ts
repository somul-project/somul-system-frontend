export interface ILectureModal {
  title: string;
  youtubeLink: Array<string>;
  speaker: string;
  speakerInfo: string;
  lectureInfo: string;
  isOpen: boolean;
  onClose: Function;
}

export interface ILectureModalBackground {
  isOpen: boolean;
}
