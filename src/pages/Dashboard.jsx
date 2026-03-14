import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
  const { user, loading } = useAuth();

  // If still loading auth state, show a spinner or simple text
  if (loading) {
    return (
      <div className="min-h-screen pt-24 px-6 max-w-7xl mx-auto">
        <p className="text-gray-500">Yükleniyor...</p>
      </div>
    );
  }

  // Protected Route Logic: If not logged in, boot them to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-semibold mb-2">
          Hoş Geldiniz, {user.user_metadata?.full_name || "Kullanıcı"} 👋
        </h1>
        <p className="text-gray-500 mb-8">Kullanıcı paneline başarıyla giriş yaptınız.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Profiliniz</h2>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Kayıt Tarihi:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
            </div>
            <button className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
              Profili Düzenle &rarr;
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Rezervasyonlarım</h2>
            <p className="text-sm text-gray-600">Henüz aktif bir rezervasyonunuz bulunmuyor.</p>
            <button className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
              Marinalara Göz At &rarr;
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Değerlendirmelerim</h2>
            <p className="text-sm text-gray-600">Henüz bir değerlendirme yapmadınız.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
