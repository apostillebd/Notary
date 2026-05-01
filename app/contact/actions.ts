"use server"

export type ContactFormState = {
  status: "idle" | "success" | "error"
  message?: string
}

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const phone = String(formData.get("phone") ?? "").trim()
  const service = String(formData.get("service") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email and message." }
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailOk) {
    return { status: "error", message: "Please enter a valid email address." }
  }

  // TODO: integrate with email/CRM (e.g. Resend, HubSpot) once credentials are available.
  // For now we log on the server so submissions are visible during development.
  console.log("[v0] New contact submission:", { name, email, phone, service, message })

  return {
    status: "success",
    message: "Thank you. Our team will contact you within one business hour.",
  }
}
