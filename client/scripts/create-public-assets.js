import fs from 'fs';

const basePublicUrl = new URL('../public/', import.meta.url);
const svg = `<svg width="720" height="720" viewBox="0 0 720 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#5eead4" />
      <stop offset="100%" stop-color="#7c93ff" />
    </linearGradient>
  </defs>
  <rect width="720" height="720" rx="60" fill="#0a1727" />
  <circle cx="360" cy="250" r="160" fill="url(#g)" opacity="0.16" />
  <circle cx="360" cy="250" r="130" fill="#112338" />
  <text x="360" y="380" text-anchor="middle" fill="#f5f7fb" font-family="Inter, sans-serif" font-size="56" font-weight="700">Paulus</text>
  <text x="360" y="440" text-anchor="middle" fill="#a9b3c7" font-family="Inter, sans-serif" font-size="28">Fullstack</text>
</svg>`;

const pdfBase64 =
  'JVBERi0xLjQKJcTl8uXrPg0KMSAwIG9iago8PC9UeXBlIC9DYXRhbG9nL1BhZ2VzIDIgMCBSPj4KZW5kb2JqCjIgMCBvYmoKPDwvVHlwZSAvUGFnZXMvQ291bnQgMS9LaWRzIFsgMyAwIFIgXS9NZWRpYUJveCBbMCAwIDYxMiA3OTJdPj4KZW5kb2JqCjMgMCBvYmoKPDwvVHlwZSAvUGFnZS9QYXJlbnQgMiAwIFIvTWVkaWFCb3ggWzAgMCA2MTIgNzkyXS9Db250ZW50cyA0IDAgUi9SZXNvdXJjZXMgPDwvRm9udCA8PC9GMSA1IDAgUj4+Pj4+Pj4+Pj4KZW5kb2JqCjQgMCBvYmoKPDwvTGVuZ3RoIDcxPj4Kc3RyZWFtCkJUIDI0IFRmCjEwMCA3MDAgVGYgKER1bW15IENWLkQpIFRqCkVUCmVuZHN0cmVhbQplbmRvYmoKNSAwIG9iago8PC9UeXBlIC9Gb250L1N1YnR5cGUgL1R5cGUxL0Jhc2VGb250IC9IZWx2ZXRpY2E+PgplbmRvYmoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDcxIDAwMDAwIG4gCjAwMDAwMDAxNCAwMDAwMCBuIAowMDAwMDAwMjA0IDAwMDAwIG4gCjAwMDAwMDAyOTQgMDAwMDAgbiAKdHJhaWxlcjw8L1NpemUgNi9Sb290IDEgMCBSPj4Kc3RhcnR4cmVmCjM0MAolJUVPRgo=';

const pdf = Buffer.from(pdfBase64, 'base64');
const imgBase64 =
  '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAIBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wCEAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAQABADASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDBf/EACAQAAICAgIDAQAAAAAAAAAAAAECAwQAESESBTEFFBH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABkRAAMBAQEAAAAAAAAAAAAAAAABAgMEEf/aAAwDAQACEQMRAD8Amq/lrr0pB3Z0pvBvY7zTdJZ3cfVqscoIhaIT9sX8MGGvYVcYEl7Wxq4d0nK1p7xXWf/9k=';

const publicDir = basePublicUrl;
fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(new URL('profile.jpg', publicDir), Buffer.from(imgBase64, 'base64'));
fs.writeFileSync(new URL('CV.pdf', publicDir), pdf);
fs.writeFileSync(new URL('profile.svg', publicDir), svg);
console.log('created', fs.statSync(new URL('profile.jpg', publicDir)).size, fs.statSync(new URL('CV.pdf', publicDir)).size);