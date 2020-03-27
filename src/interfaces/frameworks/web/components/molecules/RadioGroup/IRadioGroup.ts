export interface IRadioGroup {
  id: string
  data: string[]
  onDataSelectChange: (data: string) => void
  disabled?: boolean
}
