const API_BASE_URL = "https://localhost:7029";

// ==================== Interfaces ====================

export interface Document {
  id: number;
  nama_Dokumen: string;
  link_File: string;
}

export interface CreateDocumentRequest {
  namaDokumen: string;
  linkFile: string;
}

export interface CreateDocumentResponse {
  id: number;
  message: string;
}

// ==================== API Functions ====================

export async function getAllDocuments(): Promise<Document[]> {
  const response = await fetch(`${API_BASE_URL}/api/Dokumen`);

  if (!response.ok) {
    throw new Error(`Failed to fetch documents: ${response.status}`);
  }

  return response.json();
}

export async function createDocument(
  data: CreateDocumentRequest,
  token: string,
): Promise<CreateDocumentResponse> {
  const response = await fetch(`${API_BASE_URL}/api/Dokumen`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(
      error?.message ?? `Failed to create document: ${response.status}`,
    );
  }

  return response.json();
}
