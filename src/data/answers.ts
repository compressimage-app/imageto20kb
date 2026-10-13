// Concise direct answers shown near the top of each page (definition + how it works + key limit).
export const answers: Record<string, string> = {
  // tool pages
  'compress-image-to-20kb': 'To compress image to 20KB, add your photo or signature, keep the 20KB preset and download the result. The tool lowers JPEG quality and, if needed, image dimensions until the real file is 20,480 bytes or less. It runs in your browser, so nothing is uploaded.',
  'compress-image-to-100kb': 'To compress image to 100KB online, add your image, keep the 100KB preset and download the result. The tool searches for the best quality that fits 102,400 bytes and tells you honestly if the target could not be reached.',
  'compress-jpg-to-20kb': 'A JPG is the easiest file to compress image to 20KB. The tool re-encodes it at different quality levels, measures each result and keeps the best one under 20KB, reducing dimensions only when quality alone is not enough.',
  'compress-jpg-to-100kb': 'To compress a JPG to 100KB, add the file and keep the 100KB preset. The tool keeps the highest quality that fits 102,400 bytes and shows the final size, dimensions and a before-and-after preview.',
  'compress-png-to-20kb': 'PNG is lossless, so a PNG photo rarely fits in 20KB. To compress image to 20KB from a PNG, keep JPEG output: the tool converts it, fills transparency with white and searches for a quality that fits. Simple graphics may fit as PNG.',
  'compress-image-to-50kb': 'To compress an image to 50KB, add it and keep the 50KB preset. The tool aims for 51,200 bytes or less, which suits many form photos and signatures, and reports the real size before you download.',
  'compress-image-to-200kb': 'To compress image to 200KB, add your picture and keep the 200KB preset. The tool keeps your dimensions where it can and lowers JPEG or WebP quality only as far as needed to fit 204,800 bytes.',
  'compress-image-to-500kb': 'To compress an image to 500KB, add it and keep the 500KB preset. At this size most photos keep high quality, because the tool only lowers quality slightly to fit 512,000 bytes.',
  'image-resizer': 'An image resizer changes the number of pixels in a picture. Set a maximum width and height here, keep the aspect ratio, and the tool also compresses to the KB target you choose. Images are never enlarged.',
  'image-compressor': 'This image compressor lets you choose the file size you need, from 1 KB up to 10 MB. Add JPG, PNG or WebP files, pick a preset or a custom size, and the tool compresses them in your browser and compares before and after.',
  'image-compressor-for-online-forms': 'To prepare an image for an online form, find the size range and format on the form, compress to just under the maximum, and check the result is above any minimum. This page has presets and warnings for that.',
  'government-exam-photo-signature-size': 'Government exam forms ask for a JPEG photo and signature within a KB range, which differs by exam and year. Choose the range from your notification, compress each file separately, and check the result card before uploading.',
  'ssc-photo-signature-size': 'SSC forms commonly ask for a signature of about 10–20 KB and, in some notices, a photo of about 20–50 KB. Use the matching preset, compress image to 20KB or the range you need, and confirm the figures in your own notice.',
  'rrb-photo-signature-size': 'Railway (RRB) notices set a size range for the photo and signature that changes by exam. Pick the matching range preset, compress, and confirm the result is inside your notification’s minimum and maximum.',
  'upsc-photo-signature-size': 'UPSC guidance commonly describes a photo and a signature image in JPG within KB ranges and pixel limits. Use the matching preset, compress, check the minimum as well as the maximum, and verify on the official portal.',
  // other pages
  '/': 'ImageTo20KB is a free online image compressor that lets you compress image to 20KB, 100KB or any size in KB. Add a JPG, PNG or WebP file, pick a target, and the tool compresses it in your browser and shows the real file size.',
  faqs: 'These FAQs explain how to compress image to 20KB or 100KB, which formats work, why a result can stay above target, and how your images are handled. Use the search box to find a question quickly.',
  'how-it-works': 'The tool decodes your image in your browser, tries different quality levels, measures the real file size each time, and reduces dimensions only if needed. It reports success only when the final file is within your target.',
  about: 'ImageTo20KB is a free browser-based image compressor built and maintained by Kamlesh Mohabe, Software Engineer. It helps people meet KB size limits on online forms without uploading their images.',
  contact: 'You can contact ImageTo20KB by email or with the form on this page, which opens your email app with your message ready to send. Include the page address, your browser and what happened.',
  blog: 'This blog answers common questions about photo and signature uploads for online forms, including how to compress image to 20KB or 100KB. Each post links to the tool that fixes the problem.',
  // legal
  'privacy-policy': 'This policy explains what data the site handles. Images are compressed in your browser and not uploaded; Google Analytics runs only if you accept cookies; email you send us is used only to reply.',
  'terms-and-conditions': 'These terms explain how you may use ImageTo20KB: only with images you have the right to process, with no guarantee that any result will be accepted by a third-party website.',
  'cookie-policy': 'This site uses cookies only for Google Analytics, and only if you accept. Your theme and cookie choices are stored on your device. You can change your choice at any time on this page or in the footer.',
  disclaimer: 'The tool is a convenience, not a guarantee. Compression is lossy, a target size may not be reachable, and third-party portals set their own rules. Keep your original files and check results before uploading.',
  security: 'Compression runs in your browser, the site is static and served over HTTPS with security headers, and files are checked by their real contents. No system is perfectly secure, so keep your device updated.',
  accessibility: 'The site uses semantic headings, labelled controls, visible keyboard focus and a reduced-motion mode. It has not had a formal accessibility audit, and you can report barriers by email.',
  'copyright-policy': 'You keep the rights to your images and we keep the rights to our site content. Only process images you may use, and email us if you believe something on the site infringes your copyright.',
};
export const postAnswers: Record<string, string> = {
  'how-to-compress-image-to-20kb': 'To compress image to 20KB: use the original, crop to what the form needs, choose JPEG, run the 20KB tool, check the real size and preview, and aim slightly under the limit. If it stays too large, reduce the width.',
  'how-to-compress-image-to-100kb': 'To compress image to 100KB online: choose the original, crop it, keep the 100KB preset, and check the result card. A width of 800–1,200 pixels usually fits as a JPEG; aim near 95KB if the limit is strict.',
  'how-to-resize-photo-and-signature-for-online-exam-forms': 'To resize a photo and signature for an exam form: read the size range on the form, start from the original, crop first, compress to just under the maximum, and check the minimum, format and dimensions.',
  'photo-rejected-file-size-too-large-after-compression': 'A form can reject a compressed file because KB is counted differently (1,000 vs 1,024 bytes), the file is under a minimum, the real format differs from the extension, or the pixel size is wrong. Aim a few KB under the limit.',
  'how-to-make-a-clean-signature-image-for-online-forms': 'For a clean signature image, sign on plain white paper with a dark pen, photograph it flat in even light, crop with a small margin, then compress to the form’s KB range and check it is readable.',
  'photo-upload-checklist-for-private-jobs-and-online-admissions': 'Before uploading to a private job or admission form, confirm the size range, format, dimensions and file name, crop and compress with a small margin, check the preview, and keep the originals.',
  'jpg-png-or-webp-which-format-for-online-forms': 'Use JPEG for photos on forms, PNG for graphics and screenshots, and WebP only if the form accepts it. JPEG is accepted almost everywhere and reaches small sizes best.',
  'is-it-safe-to-compress-photos-online': 'It is safer when processing happens in your browser, as it does on this site, because your image is not uploaded for compression. Still delete downloads from shared computers and avoid unnecessary ID uploads.',
};
