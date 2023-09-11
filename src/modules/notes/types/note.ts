export interface Note {
  uuid: string;
  title: string;
  createDate: Date | string;
  formatedCreateDate: Date | string;
  color?: string;
}
