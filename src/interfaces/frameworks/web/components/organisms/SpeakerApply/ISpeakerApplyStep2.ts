export interface ISpeakerApplyStep2 {
  currentStep: number
  handleChange: Function
  onSubmit: () => void
}

export interface ISpeakerApplyStep2State {
  linkArray: Array<string>
}
