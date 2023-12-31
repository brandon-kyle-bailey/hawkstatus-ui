import { authOptions } from "@/config/auth/config";
import { getServerSession } from "next-auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <h1 className="h-screen">Unauthorized</h1>;
  }
  return (
    <main className="h-screen">
      <h1>Dashboard</h1>
      <p>Welcome {session.user?.email}</p>
    </main>
  );
}
