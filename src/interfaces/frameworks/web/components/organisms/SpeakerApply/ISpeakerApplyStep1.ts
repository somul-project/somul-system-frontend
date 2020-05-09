export interface ISpeakerApplyStep1 {
  currentStep: number;
  handleChange: Function;
  name: string;
  email: string;
  nextStep: () => void;
}
