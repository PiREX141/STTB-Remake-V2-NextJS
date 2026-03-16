const API_BASE_URL = "http://localhost:5143";

// ==================== Interfaces ====================

export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
    role?: string;
}

export interface RegisterResponse {
    id: number;
    message: string;
}

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    message: string;
    token: string;
}

// ==================== API Functions ====================

export async function register(data: RegisterRequest): Promise<RegisterResponse> {
    const response = await fetch(`${API_BASE_URL}/api/Auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => null);
        throw new Error(error?.message ?? `Registration failed: ${response.status}`);
    }

    return response.json();
}

export async function login(data: LoginRequest): Promise<LoginResponse> {
    const response = await fetch(`${API_BASE_URL}/api/Auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => null);
        throw new Error(error?.message ?? `Login failed: ${response.status}`);
    }

    return response.json();
}
