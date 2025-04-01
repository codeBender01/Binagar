export interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string | null;
  data: T;
}
