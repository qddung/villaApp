export function translateAuthError(error: string): string {
  switch (error) {
    case 'Invalid credentials':
      return 'Tài khoản hoặc mật khẩu không chính xác';
    case 'User not found':
      return 'Không tìm thấy tài khoản';
    case 'Email already exists':
      return 'Email đã được sử dụng';
    default:
      return error || 'Đã có lỗi xảy ra, vui lòng thử lại sau';
  }
}
