import { useEffect, useState } from "react";
import SectionCard from "../components/layout/SectionCard";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUsers() {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await res.json();

      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <SectionCard title="Users Lab">
      <button onClick={fetchUsers} style={{ marginBottom: "12px" }}>
        {" "}
        Refetch
      </button>

      {loading && <p>Loadinnngg....</p>}
      {error && <p style={{ color: "red" }}></p>}

      {!loading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </SectionCard>
  );
}

export default UsersPage;
