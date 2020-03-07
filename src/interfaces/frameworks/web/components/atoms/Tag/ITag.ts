type TagType = 'default' | 'accept' | 'pending' | 'unaccept';

export interface ITag {
  type?: TagType
  label: string
  color?: string
}
