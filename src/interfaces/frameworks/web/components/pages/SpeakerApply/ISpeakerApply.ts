export type speakerApplyElement = 'introduce' | 'sessionName' | 'sessionDesc' | 'youtube';

export interface ISpeakerApply {
  name: string;
  email: string;
}

export interface ISpeakerApplyState {
  currentStep: number;
  introduce: string;
  sessionName: string;
  sessionDesc: string;
  youtube: string;
}
