import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loginUser, setLoginUser] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [startupName, setStartupName] = useState("");
  const [authError, setAuthError] = useState("");
  
  const { login, registerStartup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setAuthError("");

    if (isLoginMode) {
      const result = await login(loginUser, loginPass);
      if (result.success) {
        navigate("/admin");
      } else {
        setAuthError(result.error || "Sai tên đăng nhập hoặc mật khẩu.");
      }
    } else {
      const result = await registerStartup(
        loginUser, 
        loginPass, 
        fullName, 
        phone, 
        startupName, 
        "villa_rental"
      );
      if (result.success) {
        // After registering, we need to login
        const loginResult = await login(loginUser, loginPass);
        if (loginResult.success) {
          navigate("/admin");
        } else {
          setIsLoginMode(true);
          setAuthError("Đăng ký thành công. Vui lòng đăng nhập.");
        }
      } else {
        setAuthError(result.error || "Không thể đăng ký. Vui lòng thử lại.");
      }
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm">
        <div className="text-center">
          <span className="font-heading text-2xl font-bold text-navy">
            Villa<span className="text-gold">VungTau</span>
          </span>
          <p className="mt-2 text-sm text-gray-500">
            {isLoginMode ? "Đăng nhập quản trị" : "Đăng ký tài khoản quản trị"}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {!isLoginMode && (
            <>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Tên doanh nghiệp / Startup</label>
                <input
                  type="text"
                  value={startupName}
                  onChange={(e) => setStartupName(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="Villa Vũng Tàu Mới"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Họ và tên</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="Nguyễn Văn A"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Số điện thoại</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="0912345678"
                  required
                />
              </div>
            </>
          )}

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Tên đăng nhập hoặc Email</label>
            <input
              type="text"
              value={loginUser}
              onChange={(e) => setLoginUser(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              placeholder="admin@villavungtau.com"
              autoFocus
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Mật khẩu</label>
            <input
              type="password"
              value={loginPass}
              onChange={(e) => setLoginPass(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              placeholder="••••"
              required
            />
          </div>

          {authError && <p className="text-sm font-medium text-red-500">{authError}</p>}
          
          <button type="submit" className="w-full rounded-xl bg-navy py-3 text-sm font-semibold text-white hover:bg-navy-light">
            {isLoginMode ? "Đăng nhập" : "Đăng ký"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => {
              setIsLoginMode(!isLoginMode);
              setAuthError("");
            }}
            className="text-sm font-medium text-gold hover:text-gold-dark focus:outline-none"
          >
            {isLoginMode ? "Chưa có tài khoản? Đăng ký ngay" : "Đã có tài khoản? Đăng nhập"}
          </button>
        </div>
      </div>
    </div>
  );
}
