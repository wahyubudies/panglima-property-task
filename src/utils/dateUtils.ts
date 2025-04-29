/**
 * Formats a date from various input types to "D Month YYYY HH:MM:SS"
 * @param date - Date input (string, Date object, or timestamp)
 * @returns Formatted date string
 */
export const formatDate = (date: string | Date | number): string => {
   if (!date) return '';

   let dateObj: Date;

   if (date instanceof Date) {
      dateObj = date;
   } else if (typeof date === 'string') {
      dateObj = new Date(date);
   } else if (typeof date === 'number') {
      dateObj = new Date(date);
   } else {
      return String(date);
   }

   if (isNaN(dateObj.getTime())) return String(date);

   const day = dateObj.getDate();
   const month = dateObj.toLocaleString('en-US', { month: 'long' });
   const year = dateObj.getFullYear();

   const hours = String(dateObj.getHours()).padStart(2, '0');
   const minutes = String(dateObj.getMinutes()).padStart(2, '0');
   const seconds = String(dateObj.getSeconds()).padStart(2, '0');
   const timePart = `${hours}:${minutes}:${seconds}`;

   return `${day} ${month} ${year} ${timePart}`;
};