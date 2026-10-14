// Decision questions: the things a visitor wants answered before choosing a size, format or settings. Direct, concrete answers.
export interface Decision { h2: string; items: { q: string; a: string }[] }
export const decisions: Record<string, Decision> = {
  '/': { h2: 'Questions to answer before you compress an image', items: [
    { q: 'Is ImageTo20KB free, and do I need an account?', a: 'It is free and needs no account or sign-up. The only limits are 50 MB and 50 megapixels per image, which protect your browser from running out of memory.' },
    { q: 'Are my images uploaded anywhere?', a: 'No. The image is decoded, resized and compressed in your browser, so it is not uploaded for compression. If you accept cookies, Google Analytics measures page visits only, never your images or file names.' },
    { q: 'Which target size should I choose?', a: 'Use the number printed on your form. With no stated limit, 100KB suits most photos, 20KB to 50KB suits signatures and small passport photos, and 200KB to 500KB suits email and web uploads. Aim a few KB under a strict limit.' },
    { q: 'Which format should I choose?', a: 'Choose JPEG unless the form says otherwise: it is accepted almost everywhere and reaches small sizes best. WebP is often smaller but not accepted everywhere, and PNG is lossless so photos rarely fit very small targets.' },
    { q: 'Will compression make my photo blurry?', a: 'JPEG and WebP remove some detail. The tool keeps quality reasonable by reducing dimensions moderately instead of using extreme settings, and the before-and-after preview lets you judge the result. Keep your original file.' },
    { q: 'What if the image cannot reach my target?', a: 'The tool shows the smallest result and labels it above target. Reduce the maximum width, crop tighter, or choose a larger target such as 50KB or 100KB if the form allows it.' },
    { q: 'Can I compress many images at once, or use a phone?', a: 'Yes. Add several files, each is processed with its own status, and you can download a ZIP. It works in mobile browsers, though very large photos can be slow on older phones.' },
    { q: 'Will my form definitely accept the result?', a: 'It is not guaranteed. Portals set their own rules for format, minimum size and pixel dimensions, and some count 1KB as 1,000 bytes. Read your form’s instructions and use the exam range presets for minimum-size warnings.' },
  ] },
  'compress-image-to-20kb': { h2: 'Questions to answer before you choose 20KB', items: [
    { q: 'Should I choose 20KB or 50KB?', a: 'Choose 20KB when the form says maximum 20KB. If the limit is up to 50KB, use 50KB instead: the face or signature will be clearer. Never exceed the limit on the form.' },
    { q: 'How small will my image look at 20KB?', a: 'A 20KB file holds very little data, so photos usually become a few hundred pixels wide with some softness. That is fine for a thumbnail or signature, but not for printing or zooming.' },
    { q: 'Which images work best at 20KB?', a: 'Pictures with plain backgrounds and large flat areas, such as signatures on white paper and close-up face photos. Busy scenes with fine texture need smaller dimensions to fit.' },
    { q: 'Is a signature or a photo easier to fit?', a: 'A signature is easier because it is mostly white paper. It may even fall below a form’s minimum size, in which case photograph it larger or crop with more margin.' },
    { q: 'How do I know the file is really under 20KB?', a: 'The result card shows the measured size of the file you download, counting 1KB as 1,024 bytes. If a portal counts 1,000 bytes per KB, aim for about 19KB.' },
  ] },
  'compress-image-to-100kb': { h2: 'Questions to answer before you choose 100KB', items: [
    { q: 'Should I choose 100KB or 200KB?', a: 'Follow the form: choose 100KB when it says up to 100KB. If you have a free choice, 200KB keeps more detail, and 100KB loads faster and is accepted by more forms.' },
    { q: 'What dimensions fit in 100KB?', a: 'A width of about 800 to 1,200 pixels usually fits as a JPEG when the scene is not extremely detailed. You can set a maximum width in Advanced settings.' },
    { q: 'Will small text in a scan stay readable?', a: 'Usually, if you keep the width large enough. Text edges show compression quickly, so for documents keep more pixels and consider WebP or PNG if the form allows.' },
    { q: 'Is JPEG or WebP better at 100KB?', a: 'WebP is often smaller at similar quality, but JPEG is accepted by almost every form. Compare the two previews and choose JPEG when the form says JPG.' },
    { q: 'How do I stay safely under 100KB?', a: 'Aim for about 95KB when the limit is strict, because some portals count 1KB as 1,000 bytes while this site counts 1,024.' },
  ] },
  'government-exam-photo-signature-size': { h2: 'Questions to answer before you upload to an exam form', items: [
    { q: 'Which size range should I choose?', a: 'The one printed in your own exam notification or on the upload screen. Ranges differ by exam and year, so do not rely on another candidate’s form or an older post.' },
    { q: 'Do I need to upload a photo at all?', a: 'Not always. Some recent notices capture the photograph live during the application, so you may only upload a signature. Check the notification for your exam.' },
    { q: 'Should I aim exactly at the maximum?', a: 'No. Aim a few KB under it. This site counts 1KB as 1,024 bytes and some portals count 1,000, so the presets target slightly below the top of each range.' },
    { q: 'What if my file is smaller than the minimum?', a: 'The result card warns you. Photograph the signature larger or sharper, crop with more margin, or raise the target within the range. A plain signature can be tiny.' },
    { q: 'Are the ranges on this page official?', a: 'No. They are commonly reported figures, shown with the date they were reviewed. The official notification always decides.' },
  ] },
  'image-compressor': { h2: 'Questions to answer before you pick a setting', items: [
    { q: 'What target should I use if my form does not say?', a: 'Use 100KB for photos and 20KB to 50KB for signatures and thumbnails. For email attachments and web uploads, 200KB to 500KB keeps pictures sharp.' },
    { q: 'Can I choose a size that is not in the presets?', a: 'Yes. Type any value from 1 to 10,240 KB in the custom size box and the tool aims for it.' },
    { q: 'How do I check that it worked?', a: 'Each result card shows the original and final size, dimensions, the percentage saved and a before-and-after preview. It says plainly when the target was not reached.' },
    { q: 'Does it work with very large files?', a: 'Up to 50 MB and 50 megapixels per image. Larger files are rejected with a message rather than risking a browser crash.' },
  ] },
  'image-compressor-for-online-forms': { h2: 'Questions to answer before you submit a form upload', items: [
    { q: 'What should I check first on the form?', a: 'The maximum and minimum size in KB, the accepted formats, any pixel dimensions, and whether the photo and signature have different limits.' },
    { q: 'Do the photo and signature need separate runs?', a: 'Yes. They usually have different ranges, so compress each with its own target and check each result card.' },
    { q: 'What should I do if the portal still rejects the file?', a: 'Check the format, the minimum size and the dimensions, aim a few KB lower, and try another browser. The portal’s helpdesk can confirm what it requires.' },
  ] },
};
