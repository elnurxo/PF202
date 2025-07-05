export interface ApiResponse<T> {
  data: T;
  message?: string;
  totalProducts?: number;
  page?: number;
}
