import { useAuth } from "../../providers/AuthProvider";

export default function VerticalNavbar() {
    const { logout } = useAuth();

    return (
        <div className="h-full">
            <p>Lateral navbar</p>

            <button onClick={logout}>Cerrar sesion</button>
        </div>
    );
}
