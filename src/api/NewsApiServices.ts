const API_BASE_URL = "http://localhost:5143";

// ==================== Interfaces ====================

export interface NewsCategory {
    id: number;
    nama_Kategori: string;
}

export interface News {
    id: number;
    judul: string;
    slug: string;
    konten: string;
    thumbnail_Url: string;
    tanggal_Publikasi: string;
    kategori_Id: number;
    kategori_Berita: NewsCategory | null;
}

export interface CreateNewsRequest {
    judul: string;
    konten: string;
    thumbnailUrl: string;
    kategoriId: number;
}

export interface UpdateNewsRequest {
    id: number;
    judul: string;
    konten: string;
    thumbnailUrl: string;
    kategoriId: number;
}

export interface MutationResponse {
    message: string;
}

export interface CreateNewsResponse {
    id: number;
    message: string;
}

// ==================== API Functions ====================

export async function getAllNews(): Promise<News[]> {
    const response = await fetch(`${API_BASE_URL}/api/Berita`);

    if (!response.ok) {
        throw new Error(`Failed to fetch news: ${response.status}`);
    }

    return response.json();
}

export async function createNews(data: CreateNewsRequest, token: string): Promise<CreateNewsResponse> {
    const response = await fetch(`${API_BASE_URL}/api/Berita`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => null);
        throw new Error(error?.message ?? `Failed to create news: ${response.status}`);
    }

    return response.json();
}

export async function updateNews(id: number, data: UpdateNewsRequest, token: string): Promise<MutationResponse> {
    const response = await fetch(`${API_BASE_URL}/api/Berita/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => null);
        throw new Error(error?.message ?? `Failed to update news: ${response.status}`);
    }

    return response.json();
}

export async function deleteNews(id: number, token: string): Promise<MutationResponse> {
    const response = await fetch(`${API_BASE_URL}/api/Berita/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        const error = await response.json().catch(() => null);
        throw new Error(error?.message ?? `Failed to delete news: ${response.status}`);
    }

    return response.json();
}
