export interface Post { seoTitle?: string; slug: string; title: string; description: string; date: string; excerpt: string; sections: { h2: string; body: string[] }[]; links: [string, string][] }
const D = '2026-10-04';
export const posts: Post[] = [
{ slug: 'how-to-resize-photo-and-signature-for-online-exam-forms', date: D,
  title: 'How to Resize Photo and Signature for Online Exam Forms (Step by Step)',
  description: 'A practical guide to preparing a photograph and signature for government and private online exam forms: size ranges, format, minimum size and common mistakes.',
  excerpt: 'A step-by-step method for preparing a photo and a signature that the upload screen will actually accept.',
  links: [['Government exam photo and signature tool', '/government-exam-photo-signature-size/'], ['Compress image to 50KB', '/compress-image-to-50kb/'], ['Image resizer', '/image-resizer/']],
  sections: [
  { h2: 'What does the form actually check?', body: ['Most online exam forms check three things: the file format, the size in KB, and sometimes the pixel dimensions. The size check often has both a minimum and a maximum, for example 20 KB to 50 KB. A photo that is too small can be rejected just like one that is too large, which surprises many applicants.', 'Read the instructions on the upload screen itself. Figures posted on other websites, in videos or in group chats may belong to an older notification, and requirements change between exams and between years.'] },
  { h2: 'Step 1: Start with a good original', body: ['Use the original photo from your camera or phone, not a copy that was sent through a messaging app. Messaging apps compress images and remove detail, so a second compression looks worse. For a photograph, use even light, a plain background and a straight-on pose. For a signature, use plain white paper and a dark pen.'] },
  { h2: 'Step 2: Crop to the right shape first', body: ['Crop before you compress. A tight crop around the face or signature means the limited bytes are spent on the part that matters. ImageTo20KB keeps your aspect ratio and does not crop for you, so use your phone’s editor to get the framing right first.'] },
  { h2: 'Step 3: Pick the target size', body: ['Open the government exam photo and signature page and choose the range that matches your notice. The presets aim a few KB below the maximum, because some portals count a kilobyte as 1,000 bytes while this site counts 1,024. Aiming a little low prevents a rejection for being just over the limit.'] },
  { h2: 'Step 4: Check the result card', body: ['After processing, look at the compressed size, the dimensions and the preview. Make sure the size is inside the range, the face is clear and the signature is readable. If the tool says the file is below the minimum, use a larger original or crop less tightly.'] },
  { h2: 'Step 5: Name and upload the file', body: ['Some forms need a particular file name. Rename the downloaded file if the instructions say so, and keep the extension that matches the real format. A PNG renamed to .jpg is still a PNG inside, and some portals detect that and reject it.'] },
  { h2: 'Common mistakes to avoid', body: ['Compressing a screenshot of a photo, using a photo with a dark or patterned background, uploading the signature rotated or cropped too tightly, forgetting the minimum size, relying on old numbers, and deleting the original after compressing. Keep the original files in case a later stage asks for them.'] },
  { h2: 'Is it safe to use an online tool for this?', body: ['Photographs and signatures are personal, so it matters where the processing happens. ImageTo20KB compresses in your own browser and does not upload your image for compression. Even so, close the tab when you finish and delete downloaded copies on shared computers.'] },
  ] },
{ slug: 'photo-rejected-file-size-too-large-after-compression', date: D,
  title: 'Why Does the Portal Say "File Size Too Large" After I Compressed My Photo?',
  description: 'Reasons a form still rejects an image after compression: 1KB definitions, hidden minimums, wrong format, renamed files, and how to fix each one.',
  excerpt: 'You compressed the image and it still fails. These are the usual reasons, and the fixes.',
  links: [['Compress image to 20KB', '/compress-image-to-20kb/'], ['Image compressor for online forms', '/image-compressor-for-online-forms/'], ['FAQs', '/faqs/']],
  sections: [
  { h2: 'Question: My file is 20 KB but the form says it is too large. Why?', body: ['The most common cause is how kilobytes are counted. This site counts 1 KB as 1,024 bytes. Some operating systems and some portals count 1 KB as 1,000 bytes. A file shown as 20.0 KB under one rule can exceed 20 KB under the other. The practical fix is to leave a margin: aim for 18 or 19 KB when the limit is 20 KB.'] },
  { h2: 'Question: Could the file be too small instead?', body: ['Yes. Many portals set a minimum as well as a maximum. A simple signature on white paper can compress to just a few KB, and then the portal says the file is invalid. If your range is 10–20 KB and the result is 6 KB, use a larger or sharper original, crop less tightly, or keep more of the surrounding paper.'] },
  { h2: 'Question: Does the file format matter, or just the extension?', body: ['It matters. Some portals check the real contents, not just the name. A PNG that was renamed to .jpg is still a PNG. To get a genuine JPEG, use JPEG output in the tool, and check that the downloaded file ends in .jpg. ImageTo20KB never labels a file as JPEG unless it was encoded as one.'] },
  { h2: 'Question: The size is right but the form still complains about dimensions.', body: ['Some forms check pixel width and height as well. This tool preserves your aspect ratio and only reduces dimensions, so crop to the correct shape first and set a maximum width in Advanced settings. Check the dimensions on the result card against the notice.'] },
  { h2: 'Question: The upload fails with a vague error.', body: ['Try a different browser, turn off extensions that interfere with uploads, check your internet connection, and avoid special characters or very long names in the file name. If the file is within range and in the right format, the error may be temporary on the portal side. Wait and try again later.'] },
  { h2: 'Question: Could I be using old numbers?', body: ['Very often. Size limits change between recruitment cycles. A figure from last year’s forum post may not apply. Treat the instructions on the portal as the source of truth, and treat any website’s numbers, including ours, as a guide to confirm.'] },
  { h2: 'A short troubleshooting list', body: ['Check the range printed on the upload screen. Aim a few KB under the maximum. Make sure you are above the minimum. Confirm it is a real JPEG. Match the dimensions if they are given. Rename the file only if the instructions require it. Keep your original in case you need to start again.'] },
  ] },
{ slug: 'how-to-make-a-clean-signature-image-for-online-forms', date: D,
  title: 'How to Make a Clean Signature Image for Online Forms',
  description: 'How to photograph or scan a signature so it stays readable at 10–20 KB: paper, pen, light, cropping, and what to do when the file is too small or too large.',
  excerpt: 'A readable signature at a very small file size comes down to paper, pen, light and cropping.',
  links: [['Compress image to 20KB', '/compress-image-to-20kb/'], ['SSC photo and signature size', '/ssc-photo-signature-size/'], ['Image resizer', '/image-resizer/']],
  sections: [
  { h2: 'Why signatures are special', body: ['A signature is mostly white paper with thin dark lines. That makes it compress very well, which is good when a form asks for a small file. But thin lines are also easy to damage if you compress too hard. The aim is a crisp, dark line on a clean white background.'] },
  { h2: 'Question: What paper and pen should I use?', body: ['Use plain white paper without lines or patterns, and a black or dark blue pen with a medium tip. Very thin pens can disappear at small sizes. Very thick markers can blur the shape. Sign inside a box you drew with a ruler so the image has a clear boundary, and so you leave room around the signature.'] },
  { h2: 'Question: How do I photograph it?', body: ['Put the paper on a flat surface near a window, with soft daylight and no shadow of your hand or phone across it. Hold the phone directly above the paper, parallel to it, so that the lines are not distorted. Use the highest-quality camera setting, and avoid the flash, which creates a bright patch.'] },
  { h2: 'Question: How should I crop?', body: ['Crop to the signature with a small, even margin of white around it. Too tight, and the signature is cut or looks cramped. Too loose, and the signature becomes small and faint inside a large empty picture. If the form asks for particular dimensions, match the shape as closely as you can before compressing.'] },
  { h2: 'Question: What size should the file be?', body: ['Read the range on the form. Many forms use a range such as 10–20 KB, but others differ. Use the exam range presets on our government exam page, or type a custom target. The presets aim a little below the maximum so the file stays inside the limit under either way of counting kilobytes.'] },
  { h2: 'Question: Mine is too small. Is that a problem?', body: ['It can be, if the form has a minimum. A very clean signature on a small crop may be only a few KB. Take a larger, sharper photo, crop with a little more margin, and try again. The tool warns you when the result is below the minimum for the range you chose.'] },
  { h2: 'Question: Mine is too large. What now?', body: ['Check that the paper is clean, because shadows and texture add detail that costs bytes. Reduce the maximum width in Advanced settings. Use JPEG output. Avoid screenshots of screenshots.'] },
  { h2: 'Keep your signature consistent', body: ['Some exams compare your uploaded signature with the one you give later. Use your normal signature and practise the version you upload.'] },
  ] },
{ slug: 'photo-upload-checklist-for-private-jobs-and-online-admissions', date: D,
  title: 'Photo Upload Checklist for Private Job Applications and Online Admissions',
  description: 'A simple checklist for uploading photos and documents to private company career pages, campus exams and online admission forms without errors.',
  excerpt: 'Private employers and colleges have their own upload rules. Use this checklist before you press submit.',
  links: [['Image compressor for online forms', '/image-compressor-for-online-forms/'], ['Compress image to 100KB', '/compress-image-to-100kb/'], ['Compress image to 200KB', '/compress-image-to-200kb/']],
  sections: [
  { h2: 'Private forms are less standard', body: ['Government exams often publish a notification with clear numbers. Private companies, universities, coaching institutes and scholarship portals often set their own limits, which can be as low as 20 KB or as high as 2 MB. Read the instructions on the actual form before you prepare anything.'] },
  { h2: 'Question: What should I prepare first?', body: ['Gather the original files: a recent photograph, a signature if needed, certificates and ID scans. Keep them in one folder with clear names. Having everything ready avoids rushing and making mistakes near a deadline.'] },
  { h2: 'Question: What is a sensible size for a profile photo?', body: ['If the form gives no limit, a photograph between 50 and 200 KB is usually fine for a profile picture, and dimensions of a few hundred pixels across are enough. Use the 100KB or 200KB pages for typical limits, or type a custom size.'] },
  { h2: 'Question: Which format should I choose?', body: ['JPEG is the safest for photographs. PNG is better for logos or screenshots with flat colour. WebP is often smaller, but not every system accepts it. If the form does not say, choose JPEG.'] },
  { h2: 'Question: How should I handle certificates and ID scans?', body: ['Scan flat, in good light, with all four corners visible. Keep the text readable when compressed. If a certificate is a photo, aim for a larger size such as 200 or 500 KB, since small print needs more detail than a face does. If the portal wants PDF, convert after compressing the image, using a PDF tool.'] },
  { h2: 'Question: Is it safe to upload ID documents to compression tools?', body: ['Be careful with any tool that uploads your file. ImageTo20KB processes images in your browser, so your file is not sent for compression. You should still avoid sharing ID images unnecessarily, and delete downloads from shared computers.'] },
  { h2: 'The final checklist', body: ['Confirm the size range, the format, the dimensions, the file name, the clarity of the image, and the deadline. Preview the compressed file at full size. Keep originals. Save the confirmation page or email after you submit.'] },
  ] },
{ slug: 'jpg-png-or-webp-which-format-for-online-forms', date: D,
  title: 'JPG, PNG or WebP: Which Image Format Should You Use for Online Forms?',
  description: 'Which format to choose for forms and uploads, how each handles small file sizes and transparency, and why JPEG is usually the safe option.',
  excerpt: 'Short answer: JPEG for photos on forms. Here is the longer answer, with reasons.',
  links: [['Compress PNG to 20KB', '/compress-png-to-20kb/'], ['Compress JPG to 100KB', '/compress-jpg-to-100kb/'], ['Image compressor', '/image-compressor/']],
  sections: [
  { h2: 'Question: What is the difference between the formats?', body: ['JPEG and WebP are lossy formats. They reduce file size by discarding detail that is hard to see. PNG is lossless. It stores every pixel exactly, which gives sharp edges but larger files for photos. WebP can be lossy or lossless and supports transparency.'] },
  { h2: 'Question: Which should I use for a passport-style photo?', body: ['JPEG. It is accepted almost everywhere, it handles photographs efficiently, and it can reach small targets such as 20 or 50 KB when you also reduce dimensions sensibly.'] },
  { h2: 'Question: Which for a signature?', body: ['Forms usually ask for JPEG here as well. A signature is simple, so it compresses very well. If the form accepts PNG, it will keep the lines crisp, but at the cost of a bigger file.'] },
  { h2: 'Question: When is PNG better?', body: ['For logos, charts, screenshots of text and images with transparency. If the form allows PNG and the limit is generous, PNG avoids compression artefacts. For a tiny limit like 20 KB, a photo as PNG will almost never fit.'] },
  { h2: 'Question: Is WebP a good idea?', body: ['WebP often gives a smaller file than JPEG at similar quality, which helps with strict limits. But many older systems and some government portals only accept JPG or PNG. If the form does not list WebP, do not use it.'] },
  { h2: 'Question: Does converting change quality?', body: ['Converting a photo to JPEG or WebP is lossy, so keep the original. Converting JPEG to PNG does not restore lost detail. It only makes the file larger. Compress once, from the best source you have.'] },
  { h2: 'Question: What happens to transparency?', body: ['JPEG has no transparency. When you convert a transparent PNG to JPEG, transparent areas become white in this tool. If the picture will be placed on a coloured background, use PNG or WebP when the form allows it.'] },
  { h2: 'A simple rule', body: ['If the form says JPG or JPEG, use JPEG. If it does not say, use JPEG for photos and PNG for graphics. Check the downloaded file extension matches the real format. ImageTo20KB only names a file .jpg when it is genuinely a JPEG.'] },
  ] },
{ slug: 'is-it-safe-to-compress-photos-online', date: D,
  title: 'Is It Safe to Compress Photos and ID Images Online?',
  description: 'How to judge whether an online image tool is safe for personal photos: local processing versus uploads, what to check, and what you should still do yourself.',
  excerpt: 'Where does your photo go when you use an online compressor? How to tell, and what to do.',
  links: [['How it works', '/how-it-works/'], ['Privacy policy', '/privacy-policy/'], ['Security', '/security/']],
  sections: [
  { h2: 'Question: Where does my photo go?', body: ['It depends on the tool. Some compressors upload your image to a server, process it there and send a result back. Others process it on your own device in the browser. The second kind is generally lower risk for personal photos, because the image never needs to leave your device for compression.'] },
  { h2: 'Question: How does ImageTo20KB work?', body: ['The compression uses the Canvas feature of your browser. Your file is read, decoded, resized and re-encoded on your device. There is no upload step for compression, and no image-processing service is called. The site is static, so there is no server-side storage of your images. You can read the details on the how it works and privacy pages.'] },
  { h2: 'Question: How can I check a tool’s claims?', body: ['Read its privacy policy, and look for specific statements about where processing happens. A technical user can open the browser’s network panel while compressing and see whether the image is sent anywhere. Be wary of tools that require an account, ask for unnecessary permissions, or show a lot of advertising.'] },
  { h2: 'Question: What risks remain even with local processing?', body: ['Downloaded files stay on your device, so shared or public computers are a risk. Browser extensions can read page content. Malware on your device is outside any website’s control. And a website can change over time, so check the policy again if you are handling something sensitive.'] },
  { h2: 'Question: Should I process Aadhaar, PAN or passport images?', body: ['Only do it when you must, such as for a form that requires it, and only on your own device. Avoid sending such images by email or messaging apps. Delete copies you no longer need. Do not claim any tool is perfectly safe, including ours.'] },
  { h2: 'Good habits', body: ['Use your own device. Keep the browser updated. Close the tab when finished. Delete downloaded files you no longer need. Prefer tools that say where processing happens and that list a contact for questions.'] },
  { h2: 'What we promise and what we do not', body: ['We describe how the tool works as accurately as we can. We do not promise absolute security. If you find a problem, email us at the address on the contact page.'] },
  ] },
];

const add = (slug: string, h2: string, ...body: string[]) => posts.find((p) => p.slug === slug)!.sections.push({ h2, body });
add('how-to-make-a-clean-signature-image-for-online-forms', 'Quick checklist before you upload', 'White paper, dark pen, even daylight, no shadow, phone held straight above the page. Crop with a small margin, pick the size range from your form, compress, and look at the result at full size. The lines should be dark and continuous, with no white gaps. Confirm the size is inside the range, including the minimum. Save the file with the name the form asks for and keep the original photograph.');
add('how-to-resize-photo-and-signature-for-online-exam-forms', 'Related questions people ask', 'Many applicants also ask whether they can reuse last year’s files, and whether one compressed photo works for every form. Reuse is risky because limits change, and different forms may need different ranges or shapes, so prepare files for each form separately. Keep a folder with the originals and one subfolder per application.');
add('is-it-safe-to-compress-photos-online', 'What to look for in a privacy policy', 'A useful policy says plainly whether images are uploaded, whether they are stored and for how long, what data the site collects about visitors, which third parties receive it, and how to contact the owner. Vague promises such as "we take privacy seriously" without details are not enough. Check the date of the last update, and be cautious if a tool asks you to create an account just to resize one picture. Our own policy is on the privacy page, including the parts that depend on our hosting provider.', 'It is also worth noticing what a tool does not ask for. A compressor that only needs a file does not need your phone number, your location, your contacts or access to your camera roll beyond the file you choose. If a site requests more, ask why before you continue.');
add('jpg-png-or-webp-which-format-for-online-forms', 'Examples from everyday uploads', 'A passport-style photo of a face usually fits a 20–50 KB range as a JPEG once cropped and resized, while the same photo as PNG would be many times larger. A scanned signature may be only a few KB as JPEG and might even be fine as PNG if the limit allows. A screenshot of a bank statement with small text is better kept as PNG at a larger size, or as a high-quality WebP if the portal accepts it. A company logo with a transparent background should stay PNG. When two formats are allowed, compare the sizes in the result card and choose the one that is both small and sharp.', 'If your device saves photos in a format your form does not accept, such as HEIC, export or convert to JPG on the device first, since this tool does not read HEIC files.');
add('photo-rejected-file-size-too-large-after-compression', 'When to contact the portal helpdesk', 'If the file is in the right format, within the stated range, with the right dimensions, and it still fails after trying another browser, take a screenshot of the error and contact the helpdesk named in the notice. Include your application number if you have one, but do not send personal documents unless they ask you to through an official channel.');
add('photo-upload-checklist-for-private-jobs-and-online-admissions', 'Typical situations and how to handle them', 'A career page might say "photo up to 1 MB". In that case you have plenty of room, so use 500 KB or 200 KB and keep the picture clear. A university admission form might ask for a photo under 100 KB and a signature under 50 KB, so run each file with its own target. A coaching institute may only accept JPG, so avoid PNG and WebP. A scholarship portal may want a scanned marksheet under 500 KB, which is a good case for the 500KB page and a flat, well-lit scan.', 'Whatever the case, and even for a form you have never seen before, the process is the same: read the limit, prepare the original, crop, compress with a small margin below the limit, check the result, upload, and keep the confirmation. If the form gives no limit at all, use a moderate size so the page does not time out on slow connections.');

posts.unshift(
{ slug: 'how-to-compress-image-to-20kb', date: '2026-10-08',
  title: 'How to Compress Image to 20KB: A Step-by-Step Guide',
  description: 'Learn how to compress image to 20KB online for forms and exams: choose the format, crop, resize, check the size and fix a result that is still too large.',
  excerpt: 'A step-by-step guide to compress image to 20KB for forms, exams and job applications, with fixes for common problems.',
  links: [['Compress image to 20KB online', '/compress-image-to-20kb/'], ['Compress JPG to 20KB', '/compress-jpg-to-20kb/'], ['Government exam photo and signature tool', '/government-exam-photo-signature-size/']],
  sections: [
  { h2: 'Why do forms ask you to compress image to 20KB?', body: ['Online forms for jobs, exams, scholarships and admissions often limit uploads to a few kilobytes so that servers stay fast and storage stays small. A limit of 20KB is common for signatures and small passport-style photographs. If you need to compress image to 20KB, you are not alone: it is one of the most frequent upload problems applicants meet.', 'A 20KB file is tiny. It is about one hundredth of the size of a typical phone photo, so the answer is almost never a single setting. You have to crop, resize and compress together.'] },
  { h2: 'Step 1: Start from the original file', body: ['Before you compress image to 20KB, find the original photo or scan. Do not use a copy that was sent through a messaging app, because those apps already compress pictures and remove detail. Compressing a second time makes blocky patches more likely.'] },
  { h2: 'Step 2: Crop to what the form needs', body: ['Every pixel costs bytes. If you crop a signature tightly, or frame a face so that it fills the picture, the 20KB budget is spent on what matters. When you compress image to 20KB from a wide photograph with a lot of background, most of the budget is wasted on the background.'] },
  { h2: 'Step 3: Open the tool and choose the 20KB target', body: ['Open the page where you can compress image to 20KB online, add your file and keep the 20KB preset. Choose JPEG output unless the form accepts something else. The tool tries different quality levels, measures the real size of each result and keeps the best one that fits.', 'It also reduces the dimensions smoothly when quality alone cannot reach the target. This is why a photo that you compress image to 20KB may come out smaller in pixels than the original.'] },
  { h2: 'Step 4: Check the result before you download', body: ['The result card shows the compressed size, the dimensions and a preview. Make sure the size is within 20KB, the face or signature is clear and the file will be a real .jpg. If you compress image to 20KB and the card says the result is above target, do not upload it. Try a smaller width or a tighter crop.'] },
  { h2: 'What if the result is still too large?', body: ['Large, detailed photographs are the hardest case. To compress image to 20KB when the picture is busy, set a maximum width of 400 or 500 pixels in Advanced settings, crop tighter, or choose a photo with a plainer background. If the form allows it, a 50KB limit is much easier to meet.', 'Remember that some portals count a kilobyte as 1,000 bytes. If your result is 19.9KB by our count, it may be slightly above 20KB on that portal. Aim for 18 or 19KB when a limit is strict.'] },
  { h2: 'What if the result is too small?', body: ['Some forms also have a minimum size. A plain signature can compress to only a few kilobytes. If you compress image to 20KB and the file falls under the minimum, take a larger or sharper picture and run it again. The tool can warn you when you use the exam range presets.'] },
  { h2: 'Is it safe to compress image to 20KB online?', body: ['It depends on where the processing happens. This tool runs in your browser, so the image is not uploaded for compression. That matters when the picture shows your face or signature. Even so, delete downloads from shared computers and keep your original files.'] },
  { h2: 'A short checklist', body: ['Use the original, crop, choose JPEG, compress image to 20KB, check the size and the preview, aim slightly under the limit, keep the original and then upload. If you need more room, you can compress image to 100KB with the guide in our next post.'] },
  ] },
{ slug: 'how-to-compress-image-to-100kb', date: '2026-10-08',
  title: 'How to Compress Image to 100KB Online (Without Losing Clarity)',
  description: 'How to compress image to 100KB online for forms and uploads: choose dimensions, pick the format, check quality and avoid common mistakes.',
  excerpt: 'How to compress image to 100KB online and keep photos and text clear, step by step.',
  links: [['Compress image to 100KB online', '/compress-image-to-100kb/'], ['Compress JPG to 100KB', '/compress-jpg-to-100kb/'], ['Compress image to 20KB', '/compress-image-to-20kb/']],
  sections: [
  { h2: 'Why compress image to 100KB?', body: ['A 100KB limit is one of the most common on application forms, learning portals and content systems. It is generous enough that a photograph still looks natural, but small enough that a typical phone picture must be reduced a great deal. When you compress image to 100KB, you are balancing size against clarity.'] },
  { h2: 'Compress image to 100KB online in four steps', body: ['First, choose the original file. Second, crop it to what you need. Third, open the tool where you can compress image to 100KB online and keep the 100KB preset. Fourth, check the preview and the size on the result card before you download. The whole process takes less than a minute for one image.'] },
  { h2: 'How the tool handles image compress to 100KB', body: ['For an image compress to 100KB job, the tool tries several quality levels, measures the real size of each result, and keeps the best one inside 102,400 bytes. If the picture is very large, it lowers the dimensions first so that quality can stay reasonable. That is why you can compress image to 100KB without strong blocky artefacts in most cases.'] },
  { h2: 'Which dimensions work best?', body: ['For most photos, a width between 800 and 1,200 pixels fits within 100KB as a JPEG. If you want to compress image to 100KB for a document scan, keep the width larger so small text stays readable. You can set the maximum width in Advanced settings.'] },
  { h2: 'JPEG, WebP or PNG for image compress to 100KB?', body: ['JPEG is the safest choice and is accepted almost everywhere. WebP is often smaller at similar quality, but not every system accepts it. PNG suits graphics and screenshots, and at 100KB it is far more realistic than at 20KB. When you compress image to 100KB, compare the preview of each format before you choose.'] },
  { h2: 'Compress image to 100KB or compress image to 20KB?', body: ['Choose 100KB when the form allows it, because quality is much better. Choose 20KB when the form demands it, for example for a signature. You can compress image to 20KB on the dedicated page, and you can compress image to 100KB online on the page for that size. Many applications need both: a larger photograph and a small signature.'] },
  { h2: 'Common mistakes', body: ['Compressing a screenshot of a photo, compressing a file twice, using an image with a busy background, and ignoring the unit. Some portals count 1KB as 1,000 bytes, so aim for about 95KB if the limit is strict when you compress image to 100KB.'] },
  { h2: 'Keep your original', body: ['Lossy compression cannot be undone. Keep the original file in a safe folder so that you can compress image to 100KB again, or to another size, whenever a new form asks for it.'] },
  { h2: 'Quick checklist to compress image to 100KB', body: ['Use the original, crop, choose JPEG, keep the 100KB preset, check the preview at full size, confirm the size on the result card and keep a margin below the limit. If something looks wrong, change one thing at a time: first the width, then the format, then the quality floor. Finally, save the file you uploaded so you can reuse it later.'] },
  ] },
);
posts.find((p) => p.slug === 'how-to-resize-photo-and-signature-for-online-exam-forms')!.sections.push({ h2: 'If you need to compress image to 20KB', body: ['For a signature or a small photograph with a 20KB limit, follow the guide on how to compress image to 20KB. Use the same steps: crop first, choose JPEG, run the tool, check the size and keep the original.'] });
posts.find((p) => p.slug === 'photo-rejected-file-size-too-large-after-compression')!.sections.push({ h2: 'Try again with a safer target', body: ['If a portal rejects a 20KB file, compress image to 20KB again but aim for 18KB, or compress image to 100KB if the limit is larger. You can also read the full guide on how to compress image to 20KB.'] });

add('how-to-compress-image-to-20kb',
  'DPI and PPI misconceptions when preparing files under 20KB',
  'A frequent source of confusion among exam candidates is the instruction often seen in older application notices requiring "200 DPI" or "300 DPI". Many applicants spend hours searching for image conversion utilities to adjust these metadata numbers. In digital web architecture, dots-per-inch (DPI) is strictly a physical printing directive indicating how many ink droplets are deposited per inch of paper. Web browsers and automated form upload validators do not process DPI; they evaluate pure pixel dimensions and total kilobyte weight.',
  'An image measuring 400×500 pixels has identical storage requirements and displays identically on an applicant tracking screen whether its internal header reads 72 DPI or 300 DPI. When you need to compress image to 20KB online, focus your attention on pixel dimensions and compression efficiency rather than print resolution tags. Removing unnecessary metadata headers actually saves valuable bytes that can be allocated toward clearer facial detail.'
);

add('how-to-compress-image-to-20kb',
  'Troubleshooting digital stylus signatures versus scanned ink',
  'With the popularity of touchscreens and tablets, many applicants attempt to generate their signature by drawing with a stylus or finger in a drawing app. While convenient, digital drawing applications frequently output PNG files with smooth anti-aliased transparency layers. When saved directly, these vector-like bitmaps contain extensive color transition data that can struggle to compress image to 20KB without jagged artifacts.',
  'For the cleanest result, sign using a medium-point black gel or ballpoint pen on unlined, bright white paper. A physical ink signature provides natural continuous strokes that compress image to 20KB far more efficiently than digital brush strokes. When photographed under uniform diffuse daylight, the stark contrast between dark ink and white background allows our client-side encoder to preserve uninterrupted pen curves while easily satisfying the 20,480-byte ceiling.'
);

add('how-to-compress-image-to-20kb',
  'Understanding automated rejection error codes',
  'Recruitment portals frequently fail with vague error prompts such as "Invalid Document" or "Upload Failed". Understanding what triggered the error simplifies remediation. If the server response cites "File Size Exceeds Limit", the portal likely counts kilobytes using the decimal 1,000-byte standard; re-compress aiming for 18KB or 19KB. If the error mentions "Aspect Ratio Mismatch", crop the original to match the exact dimensional proportion (such as 3.5cm × 4.5cm) before compression. If an error mentions "Unrecognized MIME Type", ensure you selected authentic JPEG output rather than manually renaming a PNG extension.'
);

add('how-to-compress-image-to-100kb',
  'Preserving fine typography on certificates and marksheet scans',
  'Unlike portrait photographs where subtle facial skin tones can tolerate moderate compression, educational transcripts, caste certificates, and marksheet scans consist of high-frequency text elements. Standard lossy encoding at aggressive rates can blur tiny 8-point numerical marks, subject names, and official university stamps, potentially leading to disqualification during physical document verification.',
  'When you compress image to 100KB for educational documents, maintain a wider pixel bounding box—ideally between 1,200 and 1,600 pixels wide—so that fine alphabetical strokes remain legible. Position the document flat under bright, even lighting to eliminate page curvature and deep shadows, which consume excessive compression bandwidth. The generous 102,400-byte allocation of the 100KB target provides ample room for crisp, readable scans when properly framed.'
);

add('how-to-compress-image-to-100kb',
  'Navigating corporate ATS portals and document upload gateways',
  'Enterprise recruitment suites such as Workday, Taleo, and Greenhouse frequently impose 100KB or 200KB limits on profile pictures and supporting document attachments to conserve server bandwidth. When preparing your professional headshot, avoid uploading full-resolution 12-megapixel phone selfies directly. Modern cameras capture immense background texture—such as office brickwork, leaves, or distant bookshelves—that forces the encoder to degrade your face.',
  'By applying a tight crop around your head and shoulders against a neutral backdrop, you eliminate unnecessary pixel data. You can then compress image to 100KB online with high JPEG quality retention, ensuring your professional profile displays with sharp contrast and executive clarity on employer evaluation screens.'
);

add('how-to-resize-photo-and-signature-for-online-exam-forms',
  'Aspect ratio calculations for standard exam dimensions',
  'Competitive exam notifications in India (including UPSC Civil Services, SSC CGL/CHSL, IBPS Bank PO, and Railway RRB) specify physical centimetre dimensions alongside kilobyte boundaries. The standard passport photograph specification is 3.5 cm in width by 4.5 cm in height, representing an aspect ratio of 7:9. Standard signature boxes typically measure 3.5 cm in width by 1.5 cm in height, representing an aspect ratio of 7:3.',
  'Do not rely on compression tools to force an arbitrary image into these ratios, as stretching or squishing distorts facial geometry. Open your smartphone camera gallery or desktop image viewer, crop the photograph using the custom aspect ratio tool to 3.5:4.5, and crop your signature box to 3.5:1.5. Once the proportions are locked, upload the file to ImageTo20KB to reduce the file size to the specified range.'
);

add('how-to-resize-photo-and-signature-for-online-exam-forms',
  'Eliminating background shadows and yellow lighting tints',
  'A frequent cause of candidate rejection during preliminary application screening is improper background lighting. Exam guidelines universally demand a light, plain background—preferably off-white, light grey, or pale blue. Photographs taken indoors under incandescent yellow bulbs or with harsh flash shadows behind the ears will fail automated compliance checks.',
  'Stand approximately three feet in front of a clean white wall during daylight hours, facing a window. This diffuse lighting eliminates harsh cast shadows behind your head and prevents uneven facial illumination. Using your phone native image editor, adjust exposure and contrast slightly to ensure the background registers as clean white before submitting it to the compressor.'
);

add('photo-rejected-file-size-too-large-after-compression',
  'HTTP multipart form boundary overhead and browser cache issues',
  'In rare technical scenarios, a file that measures exactly 19.8 KB on your local operating system may still be rejected by an online portal reporting "file exceeds 20KB". This discrepancy can arise from how web browsers transmit files via HTTP multipart/form-data. Certain legacy application servers compute the incoming payload size including HTTP transmission headers, MIME boundary strings, and file metadata wrappers rather than parsing the isolated raw byte stream.',
  'Additionally, web browsers sometimes cache previously failed network requests. If your first upload attempt failed due to an oversized file, subsequent attempts within the same session might pull cached validation states. Always perform a hard browser refresh (Ctrl+Shift+R or Cmd+Shift+R), clear local session cache, and re-compress your image aiming for 18KB to provide a safe 10% safety margin below the portal limit.'
);

add('photo-rejected-file-size-too-large-after-compression',
  'Browser extensions and antivirus script interference',
  'Third-party security software, privacy extensions, and ad blockers can occasionally intercept binary file upload streams. Security extensions that inject scanning scripts into active web forms can alter the transmission boundary or inadvertently truncate payload packets, triggering generic server errors that candidate dashboards misinterpret as file size rejections.',
  'If your file is strictly within the kilobyte and dimensional boundaries yet repeatedly fails, open a clean private browsing or incognito window with extensions disabled. Alternatively, attempt the submission using a secondary modern browser (such as switching from Chrome to Firefox or Edge).'
);

add('how-to-make-a-clean-signature-image-for-online-forms',
  'Pen selection: gel, ballpoint, and ink diffusion dynamics',
  'The choice of writing instrument fundamentally impacts how well a signature compresses into a small kilobyte budget. Ballpoint pens with viscous oil-based ink frequently produce micro-gaps, uneven pressure gradients, and faint greyish lines that break down under lossy compression algorithms. Conversely, thick permanent markers bleed into paper fibers, creating fuzzy borders that consume excessive high-frequency byte data.',
  'The optimal instrument is a 0.7mm or 1.0mm black liquid ink or gel rollerball pen. High-pigment black gel ink produces crisp, opaque borders with uniform optical density. When compressed, sharp continuous boundaries allow the JPEG Discrete Cosine Transform encoder to compress the image cleanly into 10KB to 20KB without creating halo noise around the script.'
);

add('how-to-make-a-clean-signature-image-for-online-forms',
  'Recovering when a signature falls below minimum size thresholds',
  'Because a signature on clean white paper contains minimal visual entropy, aggressive cropping and high-contrast thresholding can easily cause a file to compress down to 3KB or 4KB. However, competitive exam portals frequently enforce strict minimum limits (such as "must be between 10KB and 20KB"). When this occurs, the portal will reject the file as corrupt or invalid.',
  'To increase file size safely without introducing artificial noise, do not crop the signature boundary too aggressively; leave a balanced margin of natural white paper surrounding the writing. Alternatively, photograph the signature from slightly closer to capture natural paper grain texture, or select a higher target in our custom size box (e.g., 15KB) to ensure the output remains comfortably above the portal minimum floor.'
);

add('photo-upload-checklist-for-private-jobs-and-online-admissions',
  'Navigating enterprise applicant tracking systems (ATS)',
  'Corporate recruitment portals utilized by multinational corporations (such as Workday, SAP SuccessFactors, Taleo, and iCIMS) manage applicant documents differently than government testing portals. While government systems focus primarily on small identity thumbnails, corporate career dashboards frequently ingest resume headshots, portfolio previews, and academic transcripts through unified document parsers.',
  'Uploading uncompressed multi-megabyte camera files to corporate portals often triggers session timeouts or breaks automated resume parsing pipelines. Standardizing your professional photograph to 100KB and keeping scanned transcripts under 300KB ensures immediate document parsing and guarantees that hiring managers reviewing candidate dossiers on mobile tablets experience instantaneous page loads.'
);

add('photo-upload-checklist-for-private-jobs-and-online-admissions',
  'PDF embedding best practices for academic marksheets',
  'Many university admission portals require multi-page academic transcripts to be submitted as a single consolidated PDF document with an aggregate file size cap of 1 MB or 2 MB. A common mistake candidates make is inserting raw 5 MB camera photographs directly into word processing documents before exporting to PDF, resulting in massive documents that exceed portal limits.',
  'Always optimize each individual scanned marksheet image down to 200KB or 300KB using ImageTo20KB before compiling the pages into your PDF editor. This pre-compression workflow guarantees that your final multi-page academic PDF remains well within the 1 MB or 2 MB ceiling while maintaining razor-sharp legibility across marks and university seals.'
);

add('jpg-png-or-webp-which-format-for-online-forms',
  'The mathematical difference: DCT lossy compression vs DEFLATE lossless',
  'Understanding the internal mechanics of image encoding clarifies why format selection matters so critically for application portals. JPEG utilizes the Discrete Cosine Transform (DCT) mathematical algorithm, which converts spatial pixel grids into frequency domains. Because human vision is far less sensitive to subtle high-frequency color variations than luminance (brightness), JPEG discards imperceptible chromatic data, allowing continuous-tone photographs to achieve dramatic 90%+ file size reductions.',
  'PNG, by contrast, operates on the LZ77-derived DEFLATE algorithm, which identifies repeating horizontal pixel patterns without discarding data. While phenomenal for computer screenshots, line diagrams, and sharp text with limited color palettes, photographic images have almost zero identical adjacent pixel strings. Attempting to save a complex facial photograph as PNG forces the file to retain millions of discrete color values, resulting in file sizes 5 to 10 times larger than an equivalent JPEG.'
);

add('jpg-png-or-webp-which-format-for-online-forms',
  'Transparency matting and legacy portal compatibility',
  'WebP offers superior lossy compression and native alpha transparency, making it technically superior for modern web delivery. However, many government recruitment engines and legacy institutional databases run server-side validation libraries built on older image processing toolkits that fail to recognize WebP headers.',
  'Furthermore, JPEG does not support transparent alpha channels; attempting to convert a transparent PNG signature directly to JPEG can result in dark black background artifacts if the transparency matte is not handled properly. ImageTo20KB automatically composites transparent layers against a clean white matte during client-side canvas rendering, ensuring your resulting JPEG signature uploads seamlessly with an immaculate white backdrop.'
);

add('is-it-safe-to-compress-photos-online',
  'Verifying zero-upload privacy using browser developer tools',
  'Privacy claims on web tools are easy to make but difficult for average users to verify. At ImageTo20KB, our client-side architecture is completely transparent and independently verifiable by any user using built-in browser inspection tools.',
  'To verify that your images never leave your computer: open your web browser Developer Tools (press F12 or right-click and select "Inspect"), navigate to the "Network" tab, and select the "Fetch/XHR" filter. Now drag and drop an image onto ImageTo20KB and execute a compression. You will observe that zero HTTP POST or PUT requests are dispatched to external servers. The entire computation takes place within the local JavaScript virtual machine and HTML5 Canvas context of your browser.'
);

add('is-it-safe-to-compress-photos-online',
  'Protecting biometric identity data on shared cyber cafe terminals',
  'Millions of applicants in developing regions prepare and submit their competitive exam forms from public cyber cafes and shared community computers. Using untrusted cloud-based photo compression websites on public terminals poses significant data privacy risks: uploaded identity documents may be cached on remote staging servers or indexed by third-party scrapers.',
  'When using ImageTo20KB on shared computers, your documents are never uploaded to the cloud. However, local browser security hygiene remains essential: always download your compressed file to a personal USB drive, permanently delete downloaded files from the public "Downloads" folder (Shift+Delete on Windows), close all browser tabs, and clear the browser cache before departing the terminal.'
);

add('how-to-compress-image-to-100kb',
  'Batch processing and document organization at 100KB',
  'When applying for university admissions or professional certifications, candidates frequently have to submit multiple supporting documents—such as secondary school certificates, semester grade cards, and internship letters—each governed by an individual 100KB ceiling. Preparing each file individually using clunky desktop software can take hours.',
  'Our browser compression engine supports simultaneous batch processing. Drag and drop all your certificate scans into the upload area, keep the 100KB preset active, and let our multi-threaded worker engine optimize each document in parallel. You can inspect individual thumbnail previews to verify text clarity before downloading all compliant documents together in a structured ZIP archive.'
);

add('how-to-make-a-clean-signature-image-for-online-forms',
  'Adjusting ambient lighting and white balance for mobile phone captures',
  'When snapping a photograph of your handwritten signature with a modern smartphone, artificial indoor lighting can impart an unsightly yellow or orange color cast to the paper. In severe cases, automated portal validators flag color-tinted signatures as invalid or non-compliant.',
  'To capture an authentic neutral white background without expensive studio gear, place your signature sheet adjacent to a sunlit window with indirect daylight. In your phone camera app, tap directly on the white area of the paper to lock auto-exposure and white balance. This forces the camera sensor to calibrate the paper as true white, ensuring the resulting image compresses cleanly with crisp ink contrast.'
);

add('how-to-resize-photo-and-signature-for-online-exam-forms',
  'Avoiding common errors during final admit card generation',
  'The digital assets you submit during online application registration are directly embedded into official hall tickets, admit cards, and attendance rosters. If an applicant submits a low-resolution or overly compressed image, the photo can become severely distorted or unrecognizable when printed by examination center staff.',
  'To prevent disqualification at the examination venue, always preview your resized photo and signature at 100% actual zoom on a computer screen before uploading. The candidate face must be easily identifiable with clear eyes and ears, and the signature must display smooth, legible penmanship without broken pixel lines.'
);

add('is-it-safe-to-compress-photos-online',
  'Understanding browser security sandboxing and WebAssembly isolation',
  'Modern web browsers are engineered with sophisticated security sandboxing mechanisms designed to isolate active websites from your local filesystem and other open tabs. When you use ImageTo20KB, all file parsing and image compression routines execute strictly within this isolated sandbox environment.',
  'Our software relies entirely on standard W3C Canvas API and WebAssembly instructions without requesting invasive system permissions, accessing device contacts, or reading peripheral storage. Because no background daemons or persistent tracking cookies are installed, your private identity documents remain completely safe and confined to the temporary tab session.',
  'For complete peace of mind, you can even disconnect your Wi-Fi or mobile data connection once the ImageTo20KB page has loaded in your browser. Because the compression engine is fully preloaded, it will continue to resize and compress your photographs offline without needing an active internet connection.'
);

add('jpg-png-or-webp-which-format-for-online-forms',
  'Examining browser rendering quirks and color space profiles',
  'A subtle technical reason why JPEG remains the gold standard for official portals is color profile consistency. Professional photographs taken with modern smartphones or cameras often embed wide-gamut Display P3 or Adobe RGB color profiles. While modern browsers render these color spaces accurately, older government server software frequently assumes standard sRGB.',
  'When non-sRGB images are uploaded to older systems, facial skin tones can appear washed out, overly saturated, or unnaturally green. When you compress an image using our tool, our canvas engine converts pixel data to standard web sRGB JPEG format, guaranteeing that candidate skin tones and signature inks render with accurate, lifelike color across every verification terminal.'
);

add('photo-rejected-file-size-too-large-after-compression',
  'Mobile browser file manager quirks on Android and iOS',
  'When uploading compressed files from mobile smartphones, certain native file pickers on Android and iOS may automatically alter file headers or convert images back to default formats before sending them to the browser upload field. For instance, some gallery pickers attempt to sync photos with cloud storage or restore uncompressed originals.',
  'To ensure the exact compressed file is transmitted to the portal, save your downloaded image directly to your local "Downloads" or "Files" directory rather than the camera roll. When prompted by the recruitment form file selector, choose the system "Files" or "Documents" browser and pick the exact saved file, verifying that its reported size matches your intended target.'
);

add('photo-upload-checklist-for-private-jobs-and-online-admissions',
  'Professional attire, background standards, and optical framing',
  'For corporate job applications, campus placements, and executive business school admissions, visual presentation forms a crucial first impression. While government exams strictly focus on neutral white backgrounds, private sector portals often appreciate professional business casual attire photographed against an uncluttered, modern background.',
  'Maintain direct eye contact with the lens and frame your portrait so that your head, collar, and shoulders occupy approximately 75% of the image. Avoid casual party selfies, low-light indoor crops, sunglasses, or photos with harsh shadows across the face. Preparing your headshot cleanly and compressing it to approximately 100KB demonstrates technical competence and professionalism to hiring recruiters before your interview begins.',
  'Furthermore, ensure that your scanned degree certificates and recommendation letters are oriented right-side up. Uploading upside-down or sideways scans creates immediate friction for human resource screeners handling hundreds of candidate dossiers.',
  'Finally, adopt clean, professional file naming conventions such as "John_Doe_Headshot.jpg" or "Jane_Smith_Degree_Certificate.jpg" rather than generic camera exports like "IMG_9281.JPG". Clear file names help recruiters organize applicant materials efficiently and prevent misfiling during multi-stage evaluation processes.'
);

const seoTitles: Record<string, string> = {
  'how-to-compress-image-to-20kb': 'How to Compress Image to 20KB: Step-by-Step | ImageTo20KB',
  'how-to-compress-image-to-100kb': 'How to Compress Image to 100KB Online | ImageTo20KB',
  'how-to-resize-photo-and-signature-for-online-exam-forms': 'Resize Photo and Signature for Exam Forms | ImageTo20KB',
  'photo-rejected-file-size-too-large-after-compression': 'File Size Too Large After Compression? Fixes | ImageTo20KB',
  'how-to-make-a-clean-signature-image-for-online-forms': 'Make a Clean Signature Image for Online Forms | ImageTo20KB',
  'photo-upload-checklist-for-private-jobs-and-online-admissions': 'Photo Upload Checklist for Jobs and Admissions | ImageTo20KB',
  'jpg-png-or-webp-which-format-for-online-forms': 'JPG, PNG or WebP for Online Forms? | ImageTo20KB',
  'is-it-safe-to-compress-photos-online': 'Is It Safe to Compress Photos Online? | ImageTo20KB',
};
for (const p of posts) p.seoTitle = seoTitles[p.slug];
