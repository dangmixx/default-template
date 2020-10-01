export interface BarCodeInterface {
  code: string;
  type: string;
  format: string;
  value: string;
}

export interface GridData<T> {
  data: T[];
  total: number;
}
