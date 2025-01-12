import ProtectedRoute from '@/components/auth/protected-route'

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <div className="p-4">
        <h1>Dashboard</h1>
        {/* Your protected content here */}
      </div>
    </ProtectedRoute>
  )
} 