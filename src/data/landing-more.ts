export type Sec = { h2: string; body: string[] };
export const more: Record<string, Sec[]> = {
'compress-image-to-20kb': [
 { h2: 'JPEG or WebP at 20KB?', body: [
  `At such a small size, the output format matters. JPEG is accepted almost everywhere, including most government and exam portals, so it is the safe default on this page. WebP often produces a smaller file than JPEG at a similar visual quality, which can leave room for slightly larger dimensions inside the same 20KB limit. If the upload form accepts WebP, try it and compare the previews. If the form only says "JPG" or "JPEG", stay with JPEG.`,
  `Choose PNG only for simple graphics such as logos, signatures drawn with flat colours, or screenshots with few colours. A photograph saved as PNG almost never fits in 20KB.`] },
 { h2: 'What a 20KB image can realistically look like', body: [
  `Twenty kilobytes is 20,480 bytes. That is a very small budget for a photograph, so the tool balances two things: the dimensions of the picture and the compression quality. For most photos this means a picture a few hundred pixels wide, which is fine for a passport-style thumbnail or profile picture, but not for printing or zooming.`,
  `By default the tool avoids very low JPEG quality, because that produces blocky patches and smeared edges. It prefers a moderately smaller picture at reasonable quality. If a form requires specific pixel dimensions, open Advanced settings, set the maximum width or height, and tick "Keep dimensions" only if you accept lower quality.`] },
 { h2: 'Steps for a cleaner 20KB result', body: [
  `Start from the original file, not a copy that was already compressed or screenshot from a chat app. Each lossy re-save removes detail. Crop away unneeded background before you compress, because every pixel you remove frees up bytes for the part of the picture that matters. Then set a maximum width that matches how the picture will be shown, add the file, and check the preview at full size before downloading.`,
  `If you need to compress a photo to 20KB for a form that also requires a minimum size, check both limits: the tool reports the exact final size and dimensions so you can confirm them before uploading.`] },
 { h2: 'Common reasons a photo will not reach 20KB', body: [
  `Large phone photos contain millions of pixels and fine texture such as hair, grass or fabric. Texture is expensive to store. If the result is above target, reduce the maximum width, crop tighter, or use a photo with a plainer background. Images with large flat areas compress far better than busy scenes.`,
  `Remember that the tool will not pretend. If the smallest result it could make is still over 20KB, it says so and shows the real size, so you never upload a file thinking it is within the limit when it is not.`] },
],
'compress-image-to-100kb': [
 { h2: 'Why 100KB is a comfortable target', body: [
  `One hundred kilobytes is 102,400 bytes. That is five times the budget of a 20KB limit, which means most photos can keep clear faces, readable text and natural colours. Many online forms, school portals and content systems use 100KB as an upload cap, and it is also a sensible size for a lightweight web image.`,
  `Because there is more room, the tool will often keep a higher JPEG or WebP quality and only reduce dimensions when the original is very large. A photo straight from a modern phone can be several megabytes and many thousand pixels wide, so a moderate resize is usually the biggest single saving.`] },
 { h2: 'Picking dimensions for a 100KB image', body: [
  `As a rough guide, an image between 800 and 1,200 pixels wide usually fits within 100KB as a JPEG when the scene is not extremely detailed. Screenshots of text can need more care: sharp edges and small fonts show compression artefacts quickly, so keep the width larger and consider WebP or PNG for those.`,
  `Use the maximum width and maximum height boxes in Advanced settings to cap the size. The aspect ratio is always preserved and the picture is never enlarged, so setting a width that is larger than your original does nothing harmful.`] },
 { h2: 'Quality tips', body: [
  `Compress from the original whenever possible. Do not compress a file twice, for example by first sending it through a messaging app and then compressing the received copy. Compare the original and compressed previews on the result card, and zoom into faces or text, because artefacts show most clearly there.`,
  `If you want to compress an image to 100KB for email or a document, WebP can give a smaller file at similar quality, but check that the receiving system can open it. JPEG remains the most widely accepted option.`] },
 { h2: 'When to use a different target', body: [
  `If a portal says "less than 100KB" you can aim slightly below, for example 95KB, using the custom size box. If you need much smaller, use the 20KB or 50KB tools. If quality matters more than size, the 200KB tool leaves more room. All of these use the same local processing and the same honest result reporting.`] },
],
'compress-jpg-to-20kb': [
 { h2: 'How JPEG compression works, briefly', body: [
  `JPEG divides a picture into small blocks, simplifies colour and fine detail, and stores the result compactly. A quality setting controls how much detail is thrown away. Lower quality gives a smaller file but more visible blocks and blur. Because JPEG is lossy, the discarded detail cannot be recovered.`,
  `This tool encodes your JPG at different settings, measures the real output size each time, and keeps the best result under 20,480 bytes. It never assumes that a given quality number will hit a given size.`] },
 { h2: 'JPG, JPEG and file extensions', body: [
  `JPG and JPEG are the same format; the shorter extension exists because older systems limited extensions to three letters. When you download from this page, the file is a genuine JPEG and the extension is .jpg. The tool does not rename a file to look like another format.`,
  `If a form insists on ".jpeg" you can rename the downloaded file's extension without changing its contents, though most systems accept either.`] },
 { h2: 'Photo types and expected results', body: [
  `Portraits with plain backgrounds usually compress best, because large smooth areas cost very few bytes. Landscapes with foliage, crowds, and patterned clothing contain much more detail and often need smaller dimensions to fit in 20KB. Scanned documents saved as JPG may remain readable at larger widths, but small print can become fuzzy at this size.`,
  `If your result is too soft, try cropping first. A tight crop of the face or subject uses the limited bytes where they are most useful.`] },
 { h2: 'Avoid these mistakes', body: [
  `Do not enlarge a small image before compressing; it adds pixels but no detail. Do not repeatedly download and recompress the same file. Do not rely on a file extension alone when a portal checks the real format. And do not forget to keep your untouched original in case you need a different size later.`] },
],
'compress-jpg-to-100kb': [
 { h2: 'Why people compress JPGs to 100KB', body: [
  `A 100KB limit is common on job portals, scholarship forms, student registration pages and content management systems. It is large enough for a readable photo and small enough to upload quickly on a slow mobile connection. Compressing a JPG to 100KB also reduces storage and the time pages take to load.`,
  `Most untouched phone photos are far larger than this, so the tool usually has to reduce both pixel dimensions and quality. The aim is a result that still looks natural at the size it will be displayed.`] },
 { h2: 'Balancing quality and dimensions', body: [
  `For a given file size there are two levers. Lowering quality keeps the picture large but adds blocky noise. Reducing dimensions keeps the picture clean but smaller. For most photos a moderate reduction in dimensions with decent quality looks better than a large picture with strong compression.`,
  `You can steer this yourself. Set a maximum width in Advanced settings to choose the dimensions, or tick "Keep dimensions" to prefer the original size at lower quality.`] },
 { h2: 'JPG to 100KB on a phone', body: [
  `The tool works in mobile browsers. Choose the photo from your gallery, wait for processing, and download. Very large photos (tens of megapixels) can strain a phone's memory, so if the browser reports a problem, reduce the maximum width first or try again after closing other tabs. Files over 50 MB or 50 megapixels are rejected to protect your browser.`] },
 { h2: 'Checking the result before you upload', body: [
  `After processing, the result card lists the original size, compressed size, dimensions and percentage saved. Confirm the compressed size is at or below 100KB (where 1KB is 1,024 bytes). Some portals count 1KB as 1,000 bytes, so if the limit is strict, aim a little lower with the custom size box, for example 95KB.`] },
],
'compress-png-to-20kb': [
 { h2: 'Lossless versus lossy', body: [
  `PNG stores every pixel exactly, with only lossless packing. That makes it excellent for logos, diagrams, screenshots and images with sharp edges, but poor for photographs, where the subtle variation in every pixel prevents efficient packing. A photo saved as PNG may be ten or more times the size of a JPEG of the same picture.`,
  `That is why this page defaults to JPEG output. It converts your PNG into a JPEG and then searches for the best quality that fits 20KB.`] },
 { h2: 'Keeping PNG output', body: [
  `If you need PNG, select it in Advanced settings. The tool encodes once at the chosen dimensions and reports the real size. If it is above 20KB, you will be told clearly. To help a PNG fit, reduce the maximum width and height, since fewer pixels means fewer bytes, or simplify the image to fewer colours in an editor before uploading.`,
  `The tool does not apply colour quantisation, so it will not reduce a PNG's palette for you.`] },
 { h2: 'Transparency', body: [
  `JPEG cannot store transparency, so converting a transparent PNG to JPEG fills transparent areas with white. If the picture will be placed on a dark background, that white box may look wrong. WebP keeps transparency and is often smaller than PNG for photographic content, but check that your destination accepts WebP.`] },
 { h2: 'Screenshots and documents', body: [
  `Screenshots with text compress well as PNG because large areas are flat, but text edges suffer if you push JPEG too hard. If the document must remain readable, keep the width larger and try a higher target such as the 50KB or 100KB tools instead of forcing 20KB.`] },
],
'compress-image-to-50kb': [
 { h2: 'The in-between target', body: [
  `Fifty kilobytes is 51,200 bytes. It sits between the tight 20KB limit and the roomier 100KB limit, and it is a common cap on application forms that ask for a photograph and a signature separately. At this size a face photo can remain recognisable and clean, particularly when dimensions are kept modest.`,
  `If you only need to compress an image to 50KB for a single upload, add the file, keep the 50KB preset, and download when processing finishes.`] },
 { h2: 'Photos and signatures', body: [
  `Photographs benefit from JPEG output. Signatures scanned on white paper compress extremely well because they are mostly white with thin dark lines, so a signature often fits well below 50KB even at generous dimensions. Photograph the signature in good light, crop closely, and avoid shadows, which add detail that costs bytes.`,
  `Always check the form's instructions for required pixel dimensions or aspect ratio. This tool preserves your aspect ratio and cannot crop to a fixed shape, so crop in your phone's editor first if the portal needs a particular ratio.`] },
 { h2: 'How to check the final size', body: [
  `The result card reports the compressed size. Different operating systems display file sizes differently, with some using 1,000 bytes per KB. This site uses 1,024 bytes per KB, so a file shown as 50.0 KB here may appear as roughly 51 kB in a system that uses 1,000. If the portal is strict, set a custom target a few KB lower.`] },
 { h2: 'Related sizes', body: [
  `Need something tighter? Use the 20KB tool. Need more detail? The 100KB tool keeps more quality. For a generic target, use the image compressor with a custom size.`] },
],
'compress-image-to-200kb': [
 { h2: 'How to compress an image to 200KB', body: [
  `To compress image to 200kb, add your file, keep the 200KB preset and download the result. Two hundred kilobytes is 204,800 bytes, which is generous enough that most photos keep fine detail with only a modest reduction. The tool first tries to keep your dimensions and lowers quality only as far as needed.`,
  `If you only need to compress an image to 200KB for an email attachment, a document or a CMS upload, the default settings are normally all you need.`] },
 { h2: 'Where 200KB limits appear', body: [
  `Content management systems, forum avatars, ticketing portals, university applications and email size policies often use limits around 200KB. A single image under this limit loads quickly even on slow networks, which also makes it a practical size for web pages.`,
  `For a hero image on a website, aim for dimensions that match the largest size it will be displayed, not the original camera resolution. Serving a 4,000-pixel-wide picture to a 1,000-pixel-wide slot wastes bandwidth.`] },
 { h2: 'JPEG, WebP or PNG at 200KB', body: [
  `Photographs: JPEG or WebP. Screenshots and graphics with flat colour: PNG can be competitive at this size and keeps edges perfectly sharp. If the image has transparency and you want to keep it, choose PNG or WebP. The tool only offers formats your browser can really encode, and the downloaded file always matches the chosen format.`] },
 { h2: 'Batch compressing to 200KB', body: [
  `Add several images at once. Each is processed with its own status, and a failure on one does not stop the others. When all are done, download them individually or as one ZIP with unique, safe filenames. All of this happens on your own device.`] },
],
'compress-image-to-500kb': [
 { h2: 'A high-quality target', body: [
  `Five hundred kilobytes is 512,000 bytes. At this size, most photographs retain strong detail and smooth gradients. It is useful when a portal allows half a megabyte, when you need to email several pictures, or when you want to shrink very large photos without visible loss for everyday viewing.`,
  `Phone photos are often between two and eight megabytes, so reaching 500KB can mean a big saving even though the image still looks nearly the same on a normal screen.`] },
 { h2: 'What changes and what stays', body: [
  `The tool tries to keep your original dimensions and lowers JPEG or WebP quality only as much as needed. If dimensions must change, you will see the final size on the result card. Very high-resolution scans or panoramic photos may still need a modest resize.`,
  `If you plan to print an image, keep a higher target or the original, because print needs more pixels than a screen.`] },
 { h2: 'Using PNG at 500KB', body: [
  `This is the first target where PNG becomes realistic for many graphics. Logos, charts and interface screenshots often fit inside 500KB as PNG with no quality loss. Photographs still usually favour JPEG or WebP.`] },
 { h2: 'Tips for email and messaging', body: [
  `Many email systems limit total message size, not just one attachment, so compress each photo and check the total. Remember that attachments are often encoded in a way that makes them somewhat larger in transit. Leaving some headroom is wise.`] },
],
'image-resizer': [
 { h2: 'Resize by pixels, then compress by KB', body: [
  `A resizer changes the number of pixels in a picture. File size follows pixel count closely: halving both width and height leaves about a quarter of the pixels. This page combines the two ideas. You choose a maximum width and height, and the tool also fits the result to a target file size.`,
  `Leave both boxes empty to keep the original dimensions. The tool never enlarges an image, so a larger maximum than the original has no effect.`] },
 { h2: 'Common resize sizes', body: [
  `Typical needs include small profile pictures, thumbnails for listings, images for documents and slides, and exact portal requirements. Check the destination's required size and enter it. Because the aspect ratio is preserved, if you set both width and height the picture fits inside that box rather than being stretched.`,
  `This tool does not crop or stretch to an exact width and height. If you need an exact shape, crop first in a photo editor.`] },
 { h2: 'Why resizing often beats lowering quality', body: [
  `Reducing quality strongly produces visible blocks. Reducing dimensions keeps each remaining pixel clean. When a picture will be viewed small anyway, extra pixels are simply wasted bytes. The tool downsizes in steps for a sharper result.`] },
 { h2: 'Step by step', body: [
  `Open Advanced settings, enter a maximum width (and height if needed), pick a target size, add the file, and review the result card. If the image is still above the target, lower the maximum width further or choose JPEG or WebP.`] },
],
'image-compressor': [
 { h2: 'One tool, many target sizes', body: [
  `This is the general-purpose page. Use the presets for 20KB, 50KB, 100KB, 200KB or 500KB, or type any value from 1 to 10,240 KB. The tool reports whether the target was reached, along with real sizes and dimensions.`,
  `For common sizes, dedicated pages explain the practical details: compress image to 20KB, 100KB, 200KB and more.`] },
 { h2: 'Squoosh image compression and this tool', body: [
  `Many people searching for "squoosh image compression" are looking for a free browser-based way to shrink pictures. Squoosh is an open-source image compression app from Google Chrome Labs. It runs in the browser, lets you compare codecs side by side, and gives manual control over settings such as quality.`,
  `ImageTo20KB approaches the problem differently. Instead of asking you to tune sliders until the file looks right, you tell it the file size you need and it searches for the best fit. That suits forms and portals with a hard KB limit. If you want to fine-tune codecs and compare formats manually, a tool like Squoosh is a good choice; we are not affiliated with it. If you need an exact KB target quickly, use the presets here.`] },
 { h2: 'How the tool decides', body: [
  `For JPEG and WebP it tries quality levels, measures the real size each time and keeps the highest quality that fits. If needed it reduces dimensions gradually. For PNG it encodes once, because PNG is lossless.`] },
 { h2: 'Limits to know', body: [
  `Files above 50 MB or 50 megapixels are rejected. Animated GIF, animated WebP, SVG and HEIC are not supported. Results depend on your browser, your image and the target. Always keep the original.`] },
],
'image-compressor-for-online-forms': [
 { h2: 'Why forms reject images', body: [
  `Online forms commonly reject uploads for three reasons: the file is too large, the format is wrong, or the pixel dimensions do not match. This page helps with the first two and partly with the third. It cannot guarantee acceptance, because every portal has its own rules and sometimes changes them.`,
  `Always read the instructions on the form itself, including minimum sizes. Some portals require not only a maximum size but also a minimum, for example "between 20KB and 50KB". The result card shows the exact size so you can check both.`] },
 { h2: 'Preparing a passport-style photo', body: [
  `Use a clear, well-lit photo with a plain background and crop to the framing the form requests before compressing. Then pick the maximum size in KB and choose JPEG. If the form states pixel dimensions, use the image resizer to match them closely, keeping in mind that this tool preserves aspect ratio and does not crop.`] },
 { h2: 'Signatures and scanned documents', body: [
  `Sign on plain white paper with a dark pen, photograph or scan it in even light, crop tightly, and compress. Signatures typically fit very small limits. For scanned certificates, keep the width large enough that small print stays readable, and check the result at full size before uploading.`] },
 { h2: 'Government, exam and job portals', body: [
  `These portals frequently set limits such as 20KB, 50KB or 100KB, and some count 1KB as 1,000 bytes. Because this site uses 1,024 bytes per KB, leave a little headroom if the limit is strict. We are not affiliated with any exam body, government site or employer, and we cannot confirm a specific portal's rules.`] },
],
};
