export interface IAPI {
  get<T>(endpoint: string): Promise<T>;
}
