# 📚 eizyConnect — Study Buddy Finder

**eizyConnect** is a specialized social platform designed to help students find and join study sessions in real-time. It bridges the gap between students looking for academic support and hosts looking to lead collaborative study groups.

---

## 🚀 Features

- **Personalized User Dashboards:** Dynamic sidebar featuring user profiles, bios, and auto-generated avatars based on initials using the UI Avatars API.
- **Dynamic Session Feed:** Real-time list of available study sessions, automatically filtered to hide expired sessions.
- **Seamless Session Creation:** A streamlined form for hosts to create sessions with automatic "Host-as-Attendee" logic and unique `host_id` assignment.
- **Smart WhatsApp Integration:** One-click communication that opens WhatsApp with a pre-filled, URL-encoded message containing the course and host name.
- **Real-time State Management:** Powered by TanStack Query (React Query) for instant UI updates and cached data synchronization.
- **Automated Database Cleanup:** SQL-based cron jobs via `pg_cron` that remove past sessions to maintain database performance.

---

## 🛠️ Technical Stack

| Category             | Technology                       |
| :------------------- | :------------------------------- |
| **Frontend**         | React.js (Vite)                  |
| **Styling**          | Tailwind CSS & Styled Components |
| **State Management** | TanStack Query (React Query)     |
| **Backend & Auth**   | Supabase (PostgreSQL)            |
| **Icons**            | Lucide React                     |
| **Routing**          | React Router 7                   |

---

## 🏗️ Database Schema

The application relies on three primary tables in Supabase:

1. **`profiles`**: Stores user-specific data (`full_name`, `whatsapp_number`, `avatar_url`, `bio`, `skills`).
2. **`sessions`**: Contains study event details (`course_name`, `location`, `session_date`). Linked to `profiles` via `host_id`.
3. **`attendees`**: A junction table managing the many-to-many relationship between users and sessions.

---

## 📥 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/CodeHumps001/Study-buddy-web.git
cd studdy-buddy
```

2. Install dependencies
   npm install

3. Environment Setup
   Create a .env file in the root directory and add your Supabase credentials:

VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

4. Database Setup (SQL Editor)
   Run the following to enable automatic cleanup of old sessions:

create extension if not exists pg_cron;
create or replace function delete_past_sessions() returns void language plpgsql as $$
begin
  delete from public.sessions where session_date < now();
end; $$;
select cron.schedule('0 \* \* \* \*', 'select delete_past_sessions()'); 5. Run the app
Bash

npm run dev
🔮 Roadmap (v2)
[ ] Real-time Notifications: Alerts when a new user joins your session.

[ ] Session Management: Allow hosts to update location or cancel sessions.

[ ] Search & Search Filters: Filter sessions by course code or university.

[ ] Profile Editor: In-app interface for users to update their own contact details and skills.

Developed for the student community to make learning more collaborative and accessible.
