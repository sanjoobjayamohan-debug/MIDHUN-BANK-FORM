/**
 * Formats standard ISO YYYY-MM-DD (or Date string) into Indian / Commonwealth DD/MM/YYYY format
 */
export function formatToDDMMYYYY(dateString?: string): string {
  if (!dateString) return '-';
  
  // If already in DD/MM/YYYY or DD-MM-YYYY format
  if (/^\d{2}[\/\-]\d{2}[\/\-]\d{4}$/.test(dateString.trim())) {
    return dateString.trim().replace(/-/g, '/');
  }

  // Handle YYYY-MM-DD
  const match = dateString.trim().match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (match) {
    const [, year, month, day] = match;
    return `${day}/${month}/${year}`;
  }

  // Fallback for full timestamps
  const parsed = new Date(dateString);
  if (isNaN(parsed.getTime())) {
    return dateString;
  }

  const day = String(parsed.getDate()).padStart(2, '0');
  const month = String(parsed.getMonth() + 1).padStart(2, '0');
  const year = parsed.getFullYear();
  return `${day}/${month}/${year}`;
}
