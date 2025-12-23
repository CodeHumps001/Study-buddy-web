export function formatPostedTime(dateString) {
  const createdDate = new Date(dateString);
  const now = new Date();

  const diffInSeconds = Math.floor((now - createdDate) / 1000);

  if (diffInSeconds < 60) return "Just now";

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60)
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24)
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;

  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
}

export function formatSessionDate(dateString) {
  const sessionDate = new Date(dateString);
  const now = new Date();

  // Normalize dates (ignore time for comparison)
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const sessionDay = new Date(
    sessionDate.getFullYear(),
    sessionDate.getMonth(),
    sessionDate.getDate()
  );

  const diffInDays = Math.round((sessionDay - today) / (1000 * 60 * 60 * 24));

  const time = sessionDate.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  if (diffInDays === 0) {
    return `Today · ${time}`;
  }

  if (diffInDays === 1) {
    return `Tomorrow · ${time}`;
  }

  const date = sessionDate.toLocaleDateString([], {
    month: "short",
    day: "numeric",
  });

  return `${date} · ${time}`;
}
