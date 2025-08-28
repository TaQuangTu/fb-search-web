"use server"

interface SearchResult {
  id: string
  phone: string
  fbuid: string
  created_at: string
}

const API_BASE_URL = process.env.API_BASE_URL || "http://0.0.0.0:8000"

export async function searchByPhone(phone: string, token: string): Promise<SearchResult[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/find-fb/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ phone, turnstileToken: token }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error("Error searching by phone:", error)
    throw new Error("Failed to search by phone number")
  }
}

export async function searchByUUID(fbuid: string, token: string): Promise<SearchResult[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/find-phone/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ fbuid, turnstileToken: token }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error("Error searching by UUID:", error)
    throw new Error("Failed to search by Facebook UUID")
  }
}
