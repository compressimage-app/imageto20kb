import type { Sec } from './landing-more';
export const more2: Record<string, Sec[]> = {
'compress-image-to-100kb': [
 { h2: 'Troubleshooting a result above 100KB', body: [`If the result card says the file is above target, the picture is probably very detailed or very large. Lower the maximum width, crop the image, or choose WebP. Avoid pushing the minimum quality slider to its lowest values unless you accept visible blockiness.`] },
],
'compress-image-to-200kb': [
 { h2: 'Practical examples', body: [
  `A 12-megapixel phone photo of about 4 MB can usually be brought under 200KB with a modest resize and moderate JPEG quality, while still looking good on a laptop screen. A scanned A4 page saved as JPEG may need a width of around 1,200 pixels or more to keep text legible, and may reach 200KB comfortably as long as it is mostly white.`,
  `Screenshots of dashboards or documents often look best as PNG or WebP at this size, because sharp text edges are preserved. Compare the previews on the result card and choose what looks right to you.`] },
 { h2: 'If 200KB is still too big or too small', body: [
  `Use the custom size box for any target between 1 and 10,240 KB. If a portal says "up to 200KB", aim slightly lower, such as 190KB, to allow for differences in how file sizes are counted. If you need more quality, try 500KB. If you need smaller, try 100KB or 50KB. The related-tool links below take you to each page.`] },
 { h2: 'Why local processing matters for larger files', body: [
  `Because the work happens in your browser, you do not wait for a large photo to upload before it can be reduced. That also means nothing is sent to a server for compression. Processing speed depends on your device, and very large images can take several seconds on older phones.`] },
],
'compress-image-to-500kb': [
 { h2: 'Examples where 500KB works well', body: [
  `A wedding or travel photo of several megabytes can usually reach 500KB with little visible change on a phone or laptop screen. A product photo for an online shop, shown at about 1,200 pixels wide, normally fits comfortably. Large infographics may need PNG or WebP to keep text sharp.`,
  `For galleries, compress each image separately and keep the originals in a safe folder so that you can re-export at a different size later.`] },
 { h2: 'When you need more than 500KB', body: [
  `If the picture is for print, large displays or detailed editing, do not compress it to 500KB. Use the custom size box to choose a larger target, up to 10,240 KB, or keep the original. Compression is a trade-off, and for some jobs the original is the right file.`] },
 { h2: 'Check, then download', body: [
  `After processing, compare the previews and look at fine detail such as text, hair and edges. The result card lists original and final size, the percentage saved and the final dimensions. Download singly or as a ZIP when you have processed several images.`] },
],
'compress-image-to-50kb': [
 { h2: 'Examples at 50KB', body: [
  `A face photo cropped to head and shoulders and resized to around 400 to 600 pixels wide often fits under 50KB as a clean JPEG. A full-body or group photo, in contrast, spreads the limited bytes across more detail and may need smaller dimensions. A scanned ID card can become hard to read at this size unless the width stays reasonably large.`] },
 { h2: 'Why not just use the lowest quality?', body: [
  `Setting quality very low can reach any size but produces blocks and colour smearing, which can make a photo unusable or cause a portal's automatic check to reject it. The default behaviour of this tool therefore prefers a smaller picture with decent quality. You can change this with the "Keep dimensions" option if a portal requires exact pixel dimensions.`] },
],
'compress-jpg-to-20kb': [
 { h2: 'Using Advanced settings for JPG', body: [
  `Open Advanced settings to set a maximum width or height, adjust the minimum quality, or tick "Keep dimensions". The minimum quality value stops the tool from going below a floor you are comfortable with. If the floor stops the tool from reaching 20KB, it tells you instead of quietly producing a worse image.`] },
 { h2: 'Batch compressing JPGs', body: [
  `You can add many JPGs at once, for example a set of family photos for several application forms. Each is handled separately with its own status and its own download button. A ZIP download combines the successful files and gives each a unique name, so identically named camera files do not overwrite each other.`] },
],
'compress-jpg-to-100kb': [
 { h2: 'Example workflow', body: [
  `Take the original JPG from your camera or phone, not a version sent through a messaging app. Add it here, leave the target at 100KB, and open Advanced settings only if you need a specific width. After processing, look at the preview, then download. If a portal rejects it, check whether it needs a different format or pixel size rather than just a different file size.`] },
 { h2: 'EXIF and metadata', body: [
  `Re-encoding through a canvas does not carry over most camera metadata such as location tags, which can also make the file smaller. This is a side effect of how the tool works rather than a privacy guarantee, so if privacy is important, check the downloaded file yourself.`] },
],
'compress-png-to-20kb': [
 { h2: 'A realistic plan for PNG files', body: [
  `First decide if the picture is a photograph or a graphic. For a photograph, use JPEG output on this page. For a graphic, try PNG output with a smaller maximum width. If it is still above target, switch to WebP or JPEG, or accept a larger target using the 50KB or 100KB tools.`] },
 { h2: 'Why the tool is honest about PNG', body: [
  `Some tools claim to shrink any PNG to any size. That is not possible without discarding information. If PNG cannot fit, this page shows the real size and explains why, rather than hiding it.`] },
],
'image-resizer': [
 { h2: 'Examples', body: [
  `Resize a 4,000 by 3,000 pixel photo to a maximum width of 1,200, and it becomes about 1,200 by 900. Resize a tall portrait with a maximum height of 800 and it fits inside that height. Set a target of 200KB and the tool compresses the resized picture to fit.`] },
 { h2: 'Resize for web, email and documents', body: [
  `For a web page, match the largest displayed size. For email, widths around 1,000 to 1,600 pixels are usually enough for viewing. For documents and slides, consider the page width. Keep the original file for printing or later edits.`] },
 { h2: 'Limits', body: [
  `Only JPEG, PNG and WebP are supported. Files above 50 MB or 50 megapixels are rejected. The tool does not rotate, crop or stretch images, and it does not edit metadata.`] },
],
'image-compressor': [
 { h2: 'Which page should I use?', body: [
  `Use this page when you want to choose the size yourself. Use the 20KB page for very strict limits, the 100KB or 200KB pages for typical uploads, and the 500KB page for higher quality. The online forms page explains how to prepare photos and signatures for portals, and the resizer is for setting maximum pixel dimensions.`] },
 { h2: 'Formats explained', body: [
  `JPEG suits photographs and is the most widely accepted. WebP is often smaller and supports transparency but is not accepted by every form. PNG is lossless and best for graphics. The format list shows only what your browser can really encode, so a missing option is a browser limitation.`] },
],
'image-compressor-for-online-forms': [
 { h2: 'A short checklist before you upload', body: [
  `Confirm the maximum and minimum size in KB, the allowed formats, the required pixel dimensions, and whether the file name has restrictions. Compress the image, check the result card, rename the file if the portal requires a simple name, and keep the original. If a portal still rejects the image, read the error message carefully, because it often names the exact problem.`] },
 { h2: 'Why a smaller file is not always accepted', body: [
  `Some portals check dimensions or the shape of the picture as well as the size. Others reject unusual JPEG variants. This tool creates standard JPEG, WebP or PNG files, but it cannot guarantee that a given portal will accept them.`] },
],
};
