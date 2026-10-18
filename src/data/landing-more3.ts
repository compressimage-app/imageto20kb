import type { Sec } from './landing-more';
export const more3: Record<string, Sec[]> = {
'compress-image-to-500kb': [{ h2: 'Compression and color accuracy', body: [`Strong compression can shift subtle colors and flatten gradients such as skies. At 500KB these effects are usually small, but if color accuracy matters, for example for product photos, compare the preview against the original on a good screen. JPEG converts pictures to the sRGB look most screens use, so a photo with a wide-gamut profile may look slightly different afterwards. For critical work, keep the original and use the compressed copy only for sharing.`] }],
'compress-image-to-50kb': [{ h2: 'Preparing images for upload fields that ask for 50KB', body: [`A common mistake is compressing first and cropping afterwards. Crop first, so that the 51,200 bytes are spent on the part you actually need. Then compress, check the preview, and keep the original in case a later form asks for a different size. If the form accepts several formats, JPEG is the safest choice. If your image is a scan of a signed page, increase contrast in a scanner app before compressing, since clean black-on-white compresses very efficiently.`] }],
'compress-jpg-to-100kb': [{ h2: 'Why a JPG may change size by less than expected', body: [`If your JPG is already close to 100KB, the tool may only shave off a few kilobytes. If it is already below 100KB, it is already within the limit, and compressing again would only lose quality. In that case the output can even be larger than the input, because re-encoding at high quality is not always smaller than a file that was previously optimized. The result card shows the percentage saved, and a negative saving means you should simply keep your original file.`] }],
'compress-jpg-to-20kb': [{ h2: 'Fine-tuning a stubborn photo', body: [`If a JPG will not reach 20KB at an acceptable look, change one thing at a time. First crop. Then set a maximum width of around 500 pixels and run it again. If the result is still above target, try 400 or 300. Only then lower the minimum quality. Changing the width first almost always gives a cleaner picture than forcing the quality down. If you still cannot reach 20KB, consider asking whether the 50KB tool would satisfy the form.`] }],
'compress-png-to-20kb': [{ h2: 'Converting PNG to JPG for forms', body: [`Many application forms accept only JPG or JPEG. If your picture or signature is a PNG, converting it is straightforward here: keep JPEG output selected, add the PNG, and download the resulting .jpg file. Because JPEG has no transparency, the background becomes white. Check that the picture still looks right on white, especially for signatures drawn with thin lines.`] }],
'image-compressor-for-online-forms': [{ h2: 'Privacy when handling ID photos', body: [`Photos and signatures are personal. The compression itself happens in your browser and the image is not uploaded for compression. Still, treat downloaded files carefully: delete copies you no longer need, avoid using shared computers for sensitive documents, and close the tab when you are finished so that the browser releases the images from memory.`] }],
'image-compressor': [{ h2: 'Good habits for any compression job', body: [`Always keep the original. Compress once, from the best source you have. Set a target based on a real requirement, not a guess. Check the preview at full size. Prefer reducing dimensions over pushing quality extremely low. And remember that a smaller file is not always a better one, because a picture that is too small or too blurry may fail the purpose it was meant for. Use the related pages below for the target you need.`] }],
'image-resizer': [{ h2: 'Resizing and file size together', body: [`When you set both a maximum size in pixels and a target in KB, the tool applies the pixel limit first and then searches for the best quality or additional reduction that meets the KB target. This is useful for portals that specify both. Check the final dimensions on the result card, because if the target is difficult the tool may reduce the picture below your maximum to reach it, and it tells you when it does.`] }],
};

more3['compress-png-to-20kb'].push({ h2: 'When PNG is the right choice despite its size', body: [`Choose PNG when exact pixels matter: pixel art, diagrams with thin lines, screenshots of code, and graphics that will be edited again. In those cases, accept a larger target such as 100KB or 200KB rather than damaging the image with strong lossy compression just to hit 20KB.`] });
more3['image-compressor-for-online-forms'].push({ h2: 'Keep a record of what you submitted', body: [`Save the compressed file you actually uploaded, with a clear name and date. If a portal later asks you to re-upload, you can reuse it, and if something goes wrong you can see exactly what was sent.`] });
more3['image-compressor'].push({ h2: 'Unsupported files', body: [`Animated GIFs and animated WebP files are rejected so that animation is never silently removed. SVG files are vector graphics and are rejected rather than rendered. HEIC photos from some phones should first be exported as JPG on the device.`] });
more3['image-resizer'].push({ h2: 'Resizing screenshots', body: [`Screenshots are often very wide because of high-density displays. Reducing a 2,880-pixel-wide screenshot to 1,440 pixels removes about three quarters of the pixels while usually remaining readable. Use PNG or WebP for text-heavy screenshots and compare the preview before downloading.`] });

const pushSec = (slug: string, ...secs: Sec[]) => {
  if (!more3[slug]) more3[slug] = [];
  more3[slug].push(...secs);
};

pushSec('compress-image-to-20kb',
  { h2: 'Overcoming binary versus decimal kilobyte discrepancies', body: [
    `When you compress image to 20KB for strict registration portals, subtle differences in how operating systems and web servers measure file size can cause unexpected rejections. Computer memory and our browser engine count one kilobyte as 1,024 bytes (binary kibibyte notation), granting a total threshold of 20,480 bytes. Conversely, some online form firewalls interpret 1KB as 1,000 bytes (decimal standard), enforcing a ceiling of exactly 20,000 bytes.`,
    `To ensure your upload passes on both decimal and binary systems without errors, this tool calibrates its target search to approximately 19.3 KB to 19.8 KB. When you compress image to 20KB online using our preset, this built-in safety margin prevents the dreaded "file exceeds 20KB" rejection while preserving maximum possible facial clarity and signature sharpness.`
  ] },
  { h2: 'Best practices for high-contrast signature captures', body: [
    `A signature is composed of fine lines where lossy compression artifacts are especially noticeable. To compress image to 20KB without causing broken lines or faint ink, write on pristine, unlined white copier paper using a dark black gel or ballpoint pen. Avoid blue or pale ink, as automated optical document scanners frequently fail to isolate faint blue pigments.`,
    `Capture the photograph in diffuse daylight with your camera held perfectly parallel to the sheet to prevent keystoning distortion. Crop closely around the signature with a clean margin. This clean background allows the encoder to compress image to 20KB efficiently, allocating available byte data directly to continuous, crisp ink curves.`
  ] }
);

pushSec('compress-image-to-100kb',
  { h2: 'Why 100KB is the standard for educational certificates and marksheets', body: [
    `Educational institutions, scholarship foundations, and university admission portals frequently establish a 100KB limit for uploaded grade sheets, diplomas, and identity documents. When you compress image to 100KB, the 102,400-byte storage envelope provides five times the data capacity of a 20KB file, making it ideal for pages containing dense 8-point printed text.`,
    `To compress image to 100KB online with optimal document readability, scan or photograph your certificates flat under bright, even illumination. Avoid deep corner shadows or page warping, which consume excessive compression data. Setting a maximum width between 1,200 and 1,600 pixels allows you to compress image to 100KB while keeping official seals, subject marks, and serial numbers razor sharp.`
  ] },
  { h2: 'JPEG versus WebP for 100KB portal submissions', body: [
    `When you compress image to 100KB, choosing the right file format depends on destination portal compatibility. Modern applicant tracking systems increasingly accept WebP, which produces superior contrast and smaller file sizes at identical visual fidelity. However, traditional government databases and public exam gateways frequently mandate standard JPG format.`,
    `If your form allows multiple image formats, you can compress image to 100KB online using WebP to maximize fine photographic gradients. For legacy gateways that specify JPG, choose our JPEG output: it executes standard DCT quantization to compress image to 100KB while ensuring 100% compatibility across all recruitment servers.`
  ] },
  { h2: 'Troubleshooting certificate scans that exceed 100KB', body: [
    `If a scanned document remains slightly above 100KB after compression, the source file likely contains heavy background discoloration, color noise, or excessive margins. Crop away wooden tables or scanner borders so every byte serves the document body. When you compress image to 100KB, our tool balances quality and dimensions to guarantee compliance without blurry text.`
  ] }
);

pushSec('compress-jpg-to-20kb',
  { h2: 'Advanced DCT quantization and 20KB JPEG encoding', body: [
    `JPEG compression functions through Discrete Cosine Transform (DCT) mathematical quantization, converting spatial pixel blocks into frequency components. When you need to compress image to 20KB from a JPG file, the encoder strategically discards subtle high-frequency color variations that the human eye cannot discern.`,
    `This characteristic makes JPG the most reliable format to compress image to 20KB for online forms. When you compress image to 20KB online using our tool, the engine tests multiple DCT quantization tables in memory, identifying the exact threshold where the file lands under 20,480 bytes while keeping facial portraits natural and recognizable.`
  ] },
  { h2: 'Eliminating dark halos and compression ringing on JPGs', body: [
    `Aggressive lossy re-encoding can introduce visible mosquito noise or dark ringing halos around high-contrast borders, such as hair silhouettes or signature lines. To compress image to 20KB without ringing artifacts, maintain a quality floor of at least 60% and allow the canvas to scale down the pixel dimensions moderately.`,
    `Reducing a 4000-pixel smartphone portrait to 450×600 pixels before encoding provides the DCT algorithm with a manageable data density, allowing you to compress image to 20KB cleanly with smooth skin tones and sharp facial features.`
  ] }
);

pushSec('compress-jpg-to-100kb',
  { h2: 'Optimizing JPGs for corporate career portals and resumes', body: [
    `Corporate applicant tracking systems (such as Workday, Taleo, and Greenhouse) commonly enforce 100KB limits on profile pictures and resume headshots. When you compress image to 100KB from a high-resolution JPG camera photo, you preserve executive-level sharpness without overloading enterprise upload gateways.`,
    `To compress image to 100KB online with professional visual quality, crop your photograph tightly to head and shoulders against a neutral backdrop. This minimizes background clutter and enables the encoder to compress image to 100KB with rich contrast, clear eyes, and natural skin tones.`
  ] },
  { h2: 'Avoiding generational quality loss when re-saving JPGs', body: [
    `Every time a JPEG image is modified and saved in lossy format, generational loss occurs as frequency data is re-quantized. To get the best result when you compress image to 100KB, always initiate your compression from the original camera capture rather than a version downloaded from social media or chat applications.`
  ] }
);

pushSec('compress-png-to-20kb',
  { h2: 'Why converting PNG to JPEG or WebP reaches 20KB', body: [
    `PNG is fundamentally an uncompressed or losslessly compressed bitmap format utilizing DEFLATE string matching. Because real-world photographic scenes contain millions of discrete color shifts, lossless algorithms cannot shrink photos into 20KB. Attempting to force a PNG photo into 20KB would require reducing it to an unusable 120-pixel thumbnail.`,
    `To compress image to 20KB from a PNG input effectively, ImageTo20KB converts the canvas bitmap into standard JPEG or lossy WebP during encoding. This enables you to compress image to 20KB online while preserving practical 400px to 600px dimensions suitable for identity cards and exam portals.`
  ] },
  { h2: 'Handling alpha transparency when converting PNG signatures', body: [
    `Many digital signatures and logos are exported with transparent backgrounds. However, JPEG does not support transparency; unhandled transparent pixels can render as solid black blocks on legacy servers. When you compress image to 20KB here, our canvas automatically composites transparency against an immaculate white matte, ensuring that you compress image to 20KB with a clean, professional white background accepted by all verification systems.`
  ] },
  { h2: 'When to keep true PNG format', body: [
    `If your image is a black-and-white line drawing, a digital stamp, or a simple graphic with under 16 distinct colors, keeping PNG output can sometimes fit into small limits. Select PNG in Advanced settings to test whether your graphic can compress image to 20KB losslessly; if not, our tool reports the exact byte count so you can switch to JPEG.`
  ] }
);

pushSec('compress-image-to-50kb',
  { h2: 'Why 50KB is the preferred limit for state PSC and police exams', body: [
    `Numerous state public service commissions (including UPPSC, BPSC, MPSC, and KPSC) and police recruitment boards designate 50KB as their standard photographic upload threshold. A 50KB target offers 51,200 bytes—more than double the data budget of 20KB—enabling candidates to submit portraits with superior clarity.`,
    `When you prepare an image for a 50KB field, set your maximum dimensions to approximately 600×800 pixels. This provides generous resolution for facial identification cards while easily satisfying the 50KB boundary under standard JPEG compression.`
  ] },
  { h2: 'Step-by-step checklist for 50KB candidate photos', body: [
    `Stand in front of a white or light grey wall in natural daylight, looking directly into the camera with eyes open and ears visible. Crop the photo to standard 3.5cm × 4.5cm proportions. Use our 50KB preset to execute an in-browser compression search, inspect the before-and-after preview, and download your compliant photo instantly.`
  ] }
);

pushSec('compress-image-to-200kb',
  { h2: 'High-resolution document and identity card scans at 200KB', body: [
    `A 200KB limit (204,800 bytes) represents the gold standard for scanned government identity cards (such as driving licenses, voter IDs, and passport pages) as well as email attachments and web publishing. At 200KB, photographs and documents display with high visual fidelity across high-density retina displays and desktop monitors.`,
    `When compressing documents to 200KB, you can maintain dimensions between 1,600 and 2,000 pixels wide. This ensures that small printed text, serial numbers, watermarks, and micro-embossed government crests remain perfectly readable for verification officials.`
  ] },
  { h2: 'Batch compressing document archives to 200KB', body: [
    `If you need to submit multiple supporting certificates or portfolio pages for an employment application, our batch processing engine allows you to process multiple scans to 200KB simultaneously. Download all optimized files in a clean ZIP bundle ready for immediate portal attachment.`
  ] }
);

pushSec('compress-image-to-500kb',
  { h2: 'Near-lossless visual quality for portfolio and print previews', body: [
    `At 500KB (512,000 bytes), JPEG and WebP encoders operate with high mathematical precision. Subtle color gradations, textures, and fine fabric patterns are preserved with virtually zero visible degradation. This target is ideal for creative portfolios, web publication hero banners, and high-quality email distributions.`,
    `Our client-side engine calculates the exact quality setting needed to maximize visual fidelity while guaranteeing that the file remains strictly under the 500KB ceiling.`
  ] }
);

pushSec('image-resizer',
  { h2: 'Combining dimensional limits with target kilobyte compression', body: [
    `Many official recruitment notifications require two distinct criteria: exact maximum pixel dimensions (such as "maximum 600px width by 800px height") and a strict file size ceiling (such as "maximum 20KB"). Standard image editors force you to resize first, export to disk, check file properties, and manually compress in a separate tool.`,
    `Our integrated Image Resizer combines both workflows in a single step. You can set explicit maximum width and height bounds and simultaneously select our preset to compress image to 20KB online. The tool applies dimensional constraints first, then runs an iterative binary search to compress image to 20KB without violating aspect ratio or enlarging pixels.`
  ] },
  { h2: 'Aspect ratio preservation and anti-distortion safeguards', body: [
    `Distorting candidate facial proportions by stretching or squishing an image can result in immediate application rejection at examination verification centers. Our resizing engine strictly preserves original aspect ratios. If you input a maximum bounding box of 500×500 pixels for a portrait, the tool calculates proportional dimensions (such as 375×500) and compresses the result to meet your target.`
  ] }
);

pushSec('image-compressor',
  { h2: 'Comprehensive multi-tier compression for every digital requirement', body: [
    `Whether you need to compress image to 20KB for an exam signature, compress image to 100KB for an academic marksheet, or compress image to 200KB for an identity document, our general image compressor provides complete flexibility. Choose from convenient one-click presets or enter any custom target between 1 and 10,240 KB.`,
    `Because the entire search engine runs client-side in your web browser, your files remain completely private. You can process single documents or batch archives quickly, verifying exact byte counts before saving.`
  ] },
  { h2: 'Understanding true kilobyte counts across operating systems', body: [
    `Operating systems display file sizes differently: Windows displays binary kilobytes (1,024 bytes), whereas macOS and iOS calculate decimal kilobytes (1,000 bytes). When you compress image to 20KB using our tool, the result card displays exact byte metrics so you can verify compliance under any operating system standard.`
  ] }
);

pushSec('image-compressor-for-online-forms',
  { h2: 'Mastering photo and signature preparation for recruitment portals', body: [
    `Preparing digital assets for online recruitment portals requires strict attention to three pillars: exact file format, dimensional bounding, and kilobyte size. The most common error candidates face is attempting to upload a photograph to a signature field or forcing a file to compress image to 20KB without proper cropping.`,
    `For photo fields, ensure head and shoulders occupy 70% to 80% of the frame with a plain light backdrop. For signature fields, crop tightly around dark ink on white paper so that you can compress image to 20KB with solid, uninterrupted line contrast. Our tool provides exam-ready range presets with automated minimum size warnings.`
  ] },
  { h2: 'How our client-side architecture safeguards sensitive applicant data', body: [
    `Competitive exam applicants routinely handle sensitive identity documents containing personal registration numbers, signatures, and biometric photographs. When you compress image to 20KB on ImageTo20KB, zero document data leaves your device. Everything is computed in local browser memory, ensuring complete data security.`
  ] }
);

pushSec('government-exam-photo-signature-size',
  { h2: 'Navigating photo and signature limits across Indian recruitment portals', body: [
    `Central and state recruitment portals in India—including Staff Selection Commission (SSC), Union Public Service Commission (UPSC), Railway Recruitment Boards (RRB), Institute of Banking Personnel Selection (IBPS), and State Public Service Commissions—enforce strict digital image guidelines. Most notifications mandate that candidates compress image to 20KB for signature uploads while allocating 20KB to 50KB for passport photographs.`,
    `A common pitfall is ignoring minimum size boundaries. If an exam notification states a range of 10KB to 20KB, a signature file compressed down to 7KB will fail the upload validation. Our dedicated range presets aim slightly below the maximum ceiling (such as 19KB) while alerting you if the file falls below the required minimum floor.`
  ] },
  { h2: 'Handling live webcam capture versus static file uploads', body: [
    `Recent recruitment notifications from several major exam boards have transitioned to live webcam or smartphone camera photo capture during the online application process. However, candidate signatures and category certificates continue to require static file uploads. When a form asks for a signature file, use our tool to compress image to 20KB online with clean black ink contrast on white paper.`
  ] }
);

pushSec('ssc-photo-signature-size',
  { h2: 'Preparing compliant signatures for SSC CGL, CHSL, MTS and GD exams', body: [
    `Staff Selection Commission (SSC) application notifications consistently require candidates to compress image to 20KB for the signature field, typically specifying a range of 10KB to 20KB in standard JPG format. The signature must be signed on plain white paper in black or dark blue ink, avoiding capital letters or initials.`,
    `To compress image to 20KB for SSC forms: photograph your signature in clear daylight, crop the box closely, and select our Signature 10–20 KB preset. The tool targets 19KB to stay safely below the 20KB limit while ensuring the file remains well above the 10KB minimum threshold.`
  ] },
  { h2: 'SSC live photo requirements and advisory', body: [
    `For active SSC recruitment cycles utilizing live webcam capture for photographs, ensure you sit facing a plain light background with adequate frontal lighting. For all document attachments and signatures, our browser compressor prepares compliant files that pass automated validation checks on the SSC application portal.`
  ] }
);

pushSec('rrb-photo-signature-size',
  { h2: 'Railway Recruitment Board (RRB) photo and signature guidelines', body: [
    `Railway Recruitment Board notifications for NTPC, Group D, Assistant Loco Pilot (ALP), and Technician posts enforce specific digital document standards. While recent notices often utilize live capture for candidate photos, signature uploads commonly mandate ranges such as 30KB to 49KB or 10KB to 20KB depending on the specific post.`,
    `When you prepare an image for RRB forms, select the matching preset from our tool. If your RRB post notification requires you to compress image to 20KB for a signature, our tool guarantees clean line contrast and genuine JPEG formatting that satisfies railway portal validation.`
  ] },
  { h2: 'Avoiding signature rejections in railway applications', body: [
    `Signatures in all-capital letters, blurry scans, or signatures written with faint pens are common grounds for RRB application rejection. Always sign in your running handwriting with a black gel pen on white paper, crop with a clean margin, and verify that the file size falls strictly within the prescribed kilobyte boundaries before submission.`
  ] }
);

pushSec('upsc-photo-signature-size',
  { h2: 'UPSC Civil Services, NDA, and CDS photo and signature specifications', body: [
    `The Union Public Service Commission (UPSC) enforces rigorous digital image guidelines for Civil Services (CSE), NDA, CDS, and Engineering Services applications. Official notifications consistently specify a file size range of 20KB to 300KB for candidate photographs and 20KB to 300KB for signatures, with explicit pixel dimension requirements (such as 350×350 to 1000×1000 pixels).`,
    `To prepare your UPSC application assets: ensure your photo is recent with a clear front-facing pose occupying at least three-quarters of the frame. When preparing signatures, ensure the file stays above the 20KB minimum floor. You can use our custom size box to compress image to 20KB or target 40KB to 50KB for outstanding clarity that easily satisfies UPSC portal validation.`
  ] },
  { h2: 'UPSC One Time Registration (OTR) profile photo updates', body: [
    `Candidates maintaining an active profile on the UPSC One Time Registration (OTR) portal must periodically update their photo and signature to reflect their current likeness. Our client-side compressor processes your documents locally in your browser, ensuring absolute privacy when updating your permanent UPSC credentials.`
  ] }
);
pushSec('compress-image-to-50kb',
  { h2: 'Common pitfalls when resizing photos for 50KB upload boxes', body: [
    `When adapting candidate portraits for state entrance examinations requiring 50KB files, candidates frequently struggle with blurry eyes or distorted proportions. The root cause is usually selecting an arbitrary pixel dimension that does not match the portrait aspect ratio, or relying on social media compression tools that discard essential facial landmarks.`,
    `To achieve a crisp 50KB image, set your target width between 400 and 600 pixels. This dimension range maintains sufficient pixel density for admissions officers to confirm your likeness, while allowing the JPEG encoder to operate at a comfortable 75% to 85% visual quality level. Always verify your candidate photo in 100% actual zoom before final submission.`
  ] },
  { h2: 'Document scans and caste certificates under 50KB', body: [
    `Certain state recruitment gateways specify 50KB limits for supplementary certificates, including category proof, domicile documents, and disability certificates. Because standard A4 scans contain dense text, compressing them into 50KB requires aggressive contrast optimization. Convert color scans to clean grayscale where permissible, crop unnecessary scanner glass borders, and verify that registration numbers remain legible.`
  ] }
);

pushSec('compress-image-to-200kb',
  { h2: 'Preserving fine text legibility in 200KB PDF and image attachments', body: [
    `A 200KB payload provides generous data capacity for scanned transcripts, degree certificates, and identification cards. However, if source files are scanned at excessively high resolutions (such as 1200 DPI), the resulting raw bitmap can exceed 25 megabytes, making naive compression produce blurry text.`,
    `For crisp 200KB documents, resample your scan to 150 or 200 DPI, which yields dimensions around 1200×1600 pixels for standard letter or A4 documents. At this dimension, our 200KB compression engine preserves crisp letterforms, clear stamps, and distinct signatures without pixelation, satisfying strict legal and university verification standards.`
  ] },
  { h2: 'Optimizing corporate presentations and portfolio assets to 200KB', body: [
    `Digital marketing professionals, graphic designers, and consultants frequently need to optimize slide deck visuals, client mockups, and email newsletter banners to stay under 200KB per image to ensure fast load times across mobile networks. Using our 200KB tool ensures rich color fidelity, clean edges on infographic diagrams, and instantaneous client downloads.`
  ] }
);

pushSec('compress-image-to-500kb',
  { h2: 'Balancing visual fidelity for print proofs and high-resolution displays', body: [
    `A 500KB file allocation (512,000 bytes) is widely utilized by e-commerce storefronts, professional photography portfolios, and academic journal submissions. At 500KB, image compression algorithms can preserve subtle textures, complex natural patterns like foliage or hair, and smooth color transitions without introducing blocky DCT quantization artifacts.`,
    `When preparing product photographs or creative portfolio pieces, maintain dimensions around 1600 to 2048 pixels wide. This allows your images to look razor-sharp on 4K monitors and high-DPI smartphone screens while guaranteeing swift network delivery and avoiding hosting bandwidth penalties.`
  ] },
  { h2: 'Metadata stripping and photographic privacy at 500KB', body: [
    `High-end DSLR and mirrorless camera captures embed extensive EXIF metadata, including camera serial numbers, lens configurations, precise GPS coordinates, and embedded thumbnail previews. In uncompressed images, this metadata header alone can occupy 20KB to 100KB of file storage.`,
    `Our client-side processing engine naturally strips extraneous EXIF headers during the canvas redraw stage. This ensures that every byte of your 500KB budget is dedicated strictly to visible image pixels, while shielding your physical home or studio location from unintended public exposure.`
  ] },
  { h2: 'Format selection: JPEG versus WebP for 500KB assets', body: [
    `While JPEG remains universally compatible across legacy desktop software, WebP offers superior compression efficiency at 500KB, allowing you to retain richer color gradations and cleaner high-contrast boundaries. If your target destination supports WebP, test both formats using our before-and-after comparison slider to see the fidelity advantage.`
  ] }
);

pushSec('rrb-photo-signature-size',
  { h2: 'Railway Recruitment Board regional zones and portal validation rules', body: [
    `All 21 Railway Recruitment Boards (including RRB Allahabad, RRB Mumbai, RRB Kolkata, RRB Chennai, and RRB Chandigarh) utilize standardized online application gateways for centralized recruitment notices. While the user interface across regional portals may vary slightly, image parsing engines enforce identical validation rules for candidate photographs and signatures.`,
    `The primary cause of rejection across RRB applications is non-compliant signatures: using blue or sketch pens, signing on ruled paper with visible blue lines, or uploading photos where the candidate is wearing caps, religious headgear that obscures facial features, or reflective spectacles. Review the official CEN notification carefully before uploading.`
  ] },
  { h2: 'Preparing clear signatures for RRB ALP and Technician candidates', body: [
    `For technical and loco pilot positions, accurate biometric matching between application signatures, Computer Based Test (CBT) attendance sheets, and document verification rosters is mandatory. To ensure your signature passes automated optical verification: sign firmly in black ink inside a rectangular box on bright white paper, crop away surrounding margins, and compress the file to meet the exact prescribed range (such as 10KB to 20KB or 30KB to 49KB as specified in your notice).`
  ] }
);

pushSec('upsc-photo-signature-size',
  { h2: 'UPSC dimensional parameters: pixel aspect ratio and framing rules', body: [
    `The Union Public Service Commission portal enforces strict dimensional constraints alongside file size limits. For Civil Services and combined examinations, candidate photographs must fall between 350×350 and 1000×1000 pixels, maintaining a square or near-square aspect ratio where the candidate face covers at least 75% of the total frame.`,
    `Similarly, candidate signatures must fall within 350×350 to 1000×1000 pixels. To satisfy both dimensional bounding boxes and file size ceilings (20KB to 300KB), set maximum dimensions to 600×600 pixels in our Advanced settings. This keeps your photo beautifully sharp, prevents pixelation during admit card generation, and ensures immediate compliance with UPSC automated validation scripts.`
  ] },
  { h2: 'Name and date imprint requirements for UPSC candidate photographs', body: [
    `Recent UPSC notifications mandate that candidate photographs must not be more than 10 days old from the start of the online application process, and should clearly display the candidate name and the date of photograph capture at the bottom of the image. When adding text imprints to your photo, ensure the font is legible and does not obscure the chin or neck. Our tool compresses the final composite without blurring the printed date or name.`
  ] }
);
