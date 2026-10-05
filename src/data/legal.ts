import { CONTACT_EMAIL, JURISDICTION, OPERATOR_NAME } from '../config';
export interface Doc { slug: string; title: string; description: string; h1: string; sections: { h2: string; body: string[] }[] }
const review = 'DRAFT FOR LEGAL REVIEW: replace bracketed placeholders and have a qualified lawyer review this page before launch.';
export const legal: Doc[] = [
{ slug: 'privacy-policy', title: 'Privacy Policy | ImageTo20KB', description: 'How ImageTo20KB handles images and data. Images are processed locally in your browser.', h1: 'Privacy Policy',
  sections: [
   { h2: 'Status', body: [review] },
   { h2: 'Who we are', body: [`ImageTo20KB (https://www.imageto20kb.in/) is operated by ${OPERATOR_NAME}.`] },
   { h2: 'Your images', body: ['Images you select are read, decoded, resized and re-encoded inside your browser using the Canvas API. The compression feature does not upload your images to our servers or to any third-party image service. Images exist only in your device’s memory and as temporary browser object URLs until you remove them or close the page.'] },
   { h2: 'Data we collect', body: ['The site uses Google Analytics (a service from Google, measurement ID G-YNJS39ZTBL) to understand how many people visit which pages. Google Analytics may collect technical and usage information such as pages viewed, approximate location derived from your IP address, device and browser type, and the website that referred you, and it uses cookies for this purpose (see the Cookie Policy). We do not send your images, file names or image data to Google Analytics, because compression happens in your browser and we have not set up any measurement of file contents. Our hosting provider (Cloudflare) may also process technical data such as IP address and request headers to deliver the site and protect it from abuse, under its own policies. If you use the contact form, it opens your own email application with your message pre-filled. Nothing is transmitted until you send that email yourself, and we then receive your email address and message. [Operator: confirm your Google Analytics settings (data retention, Google signals, enhanced measurement) and whether consent is required for your visitors’ jurisdictions.]'] },
   { h2: 'Browser storage', body: ['The site stores your light/dark theme choice in your browser’s localStorage. It is not used for tracking and is not sent to us.'] },
   { h2: 'Your rights and contact', body: ['Depending on where you live you may have rights to access, correct or delete personal data we hold. Because we do not intentionally collect personal data through the tool, there is usually nothing to retrieve, but you can email us at ' + CONTACT_EMAIL + '.'] },
   { h2: 'Changes', body: ['We may update this policy; the “last updated” date on the page will change.'] } ] },
{ slug: 'terms-and-conditions', title: 'Terms and Conditions | ImageTo20KB', description: 'Terms for using ImageTo20KB.', h1: 'Terms and Conditions',
  sections: [
   { h2: 'Status', body: [review] },
   { h2: 'Acceptance', body: ['By using this website you agree to these terms. If you do not agree, do not use the site.'] },
   { h2: 'Permitted use', body: ['You may use the tool to compress and resize images that you own or have permission to process. You must not use the site unlawfully, attempt to disrupt it, or process content you have no right to handle. You are responsible for your files.'] },
   { h2: 'Intellectual property', body: ['The site’s design, text and code belong to the operator or its licensors. You keep all rights in your own images; we claim none because we do not receive them.'] },
   { h2: 'No guarantees', body: ['The service is provided “as is” and “as available”. Results depend on your browser and image. We do not guarantee any target size, image quality, uninterrupted availability, or that a file will be accepted by a third-party form or portal.'] },
   { h2: 'Limitation of liability', body: [`To the extent permitted by law, the operator is not liable for indirect or consequential loss arising from use of the site. Nothing excludes liability that cannot be excluded by law. Governing law and courts: ${JURISDICTION}.`] } ] },
{ slug: 'cookie-policy', title: 'Cookie Policy | ImageTo20KB', description: 'Cookies and browser storage used by ImageTo20KB.', h1: 'Cookie Policy',
  sections: [
   { h2: 'Status', body: [review] },
   { h2: 'Cookies', body: ['This site uses Google Analytics, which sets cookies in your browser to recognise a visit across page views and to measure usage. They are typically named _ga and _ga_ followed by an identifier. The site does not set advertising cookies of its own. Our hosting provider may use strictly necessary cookies or similar technologies for security, such as bot protection. [Confirm the exact cookies against your Google Analytics and Cloudflare configuration before launch.]'] },
   { h2: 'Local storage', body: ['We save your theme preference (key: theme) in localStorage. You can clear it in your browser settings at any time.'] } ] },
{ slug: 'disclaimer', title: 'Disclaimer | ImageTo20KB', description: 'Disclaimer for ImageTo20KB results and third-party forms.', h1: 'Disclaimer',
  sections: [
   { h2: 'Status', body: [review] },
   { h2: 'Results', body: ['Compression is lossy for JPEG and WebP and reduces image quality. Keep your original files. Target sizes are not always achievable; the tool tells you when it was not reached.'] },
   { h2: 'Third-party requirements', body: ['Government, exam, employer and other portals set their own rules. We are not affiliated with them and cannot guarantee acceptance of any file.'] } ] },
{ slug: 'security', title: 'Security | ImageTo20KB', description: 'Security measures used by ImageTo20KB.', h1: 'Security',
  sections: [
   { h2: 'How the tool is built', body: ['Image processing runs locally, so there is no image upload endpoint. The site is static, served over HTTPS from Cloudflare, with security headers including a Content Security Policy, X-Content-Type-Options and frame blocking.'] },
   { h2: 'Input safety', body: ['Files are checked by their binary signature, not just their extension. Size and megapixel limits protect your browser. SVG files are rejected rather than rendered.'] },
   { h2: 'Limits', body: ['No system is perfectly secure and we cannot promise absolute security. Report a vulnerability by email to ' + CONTACT_EMAIL + '.'] } ] },
{ slug: 'accessibility', title: 'Accessibility | ImageTo20KB', description: 'Accessibility approach of ImageTo20KB.', h1: 'Accessibility',
  sections: [
   { h2: 'Our approach', body: ['We use semantic HTML, visible keyboard focus, labelled controls, live-region status messages and a reduced-motion mode. We have not completed a formal accessibility audit and do not claim WCAG conformance.'] },
   { h2: 'Feedback', body: ['If you find a barrier, please tell us by email at ' + CONTACT_EMAIL + '.'] } ] },
{ slug: 'copyright-policy', title: 'Copyright Policy | ImageTo20KB', description: 'Copyright policy for ImageTo20KB.', h1: 'Copyright Policy',
  sections: [
   { h2: 'Status', body: [review] },
   { h2: 'Your content', body: ['Only process images you have the right to use. Because images are handled in your browser, we do not host or receive user images.'] },
   { h2: 'Notices', body: ['If you believe content on this website infringes your copyright, email ' + CONTACT_EMAIL + ' with details of the work and the page. [Add any statutory takedown wording required in your jurisdiction.]'] } ] },
];

const add = (slug: string, secs: { h2: string; body: string[] }[]) => legal.find((d) => d.slug === slug)!.sections.push(...secs);
add('privacy-policy', [
 { h2: 'What “processed locally” means', body: ['When you add an image, your browser reads the file, decodes it, draws it on a canvas, and creates a new compressed file on your device. The page does not send the image or its contents to our servers for this. Temporary browser links are used to show previews and downloads; the page releases them when you remove a file or leave the page.'] },
 { h2: 'What the website itself may receive', body: ['Like any website, requests to load pages reach our hosting provider, which can see technical information such as IP address, browser type and requested page. We do not use this to identify you and we do not combine it with your images, because we never receive your images through the tool. Hosting providers may keep security and performance logs under their own policies.'] },
 { h2: 'Children', body: ['The tool is not directed at children and we do not knowingly collect personal data from them. Anyone preparing a photo of a child should make sure they have the right to process it.'] },
 { h2: 'International use', body: ['The site is delivered through a global network, so technical request data may be processed in different countries. [Update with the operator’s data-transfer position after legal review.]'] },
]);
add('terms-and-conditions', [
 { h2: 'Your responsibility for images', body: ['You must have the right to use, copy and modify any image you process. Do not process images that infringe others’ rights, are unlawful, or that you are not authorised to handle. Because processing is local, we do not review your images and cannot check this for you.'] },
 { h2: 'Acceptable use', body: ['Do not attempt to interfere with the site, overload it with automated requests, scan it for vulnerabilities without permission, or copy its content in a way that breaches the law. We may restrict access if the site is abused.'] },
 { h2: 'Third-party websites', body: ['The site may link to other websites. We do not control them and are not responsible for their content. Upload requirements of any portal you use are set by that portal, not by us.'] },
 { h2: 'Changes and availability', body: ['We may change, suspend or discontinue the site or these terms at any time. Continued use after a change means you accept the updated terms. We do not guarantee uninterrupted access or error-free results.'] },
]);
add('cookie-policy', [
 { h2: 'What cookies are', body: ['Cookies are small text files that a website asks your browser to store. They are commonly used for logins, preferences, analytics and advertising. Other browser storage, such as localStorage, works in a similar way but is not sent automatically with every request.'] },
 { h2: 'What this site stores', body: ['The site stores one preference of its own: your chosen light or dark theme, under the key “theme”, in localStorage. It stays on your device and is read by the page to apply your choice. Separately, Google Analytics sets the analytics cookies described on this page. The site does not use social media tracking buttons.'] },
 { h2: 'Hosting and security', body: ['Our hosting provider may use technical mechanisms for security, performance or abuse prevention. These can involve cookies or similar technologies depending on configuration. [The operator must confirm the actual Cloudflare settings and update this section before launch.]'] },
 { h2: 'How to control storage', body: ['You can clear localStorage and cookies in your browser’s privacy settings, and you can browse in a private window so that the theme preference is not retained. Clearing the preference only resets the theme to your system default.'] },
 { h2: 'Managing analytics cookies', body: ['You can block or delete cookies in your browser settings, browse in a private window, or use the opt-out browser add-on that Google provides for Google Analytics. Blocking analytics does not affect how the compression tool works. [Add a cookie consent banner if your audience’s laws require it.] If we add other non-essential cookies or services, we will describe them here.'] },
]);
add('disclaimer', [
 { h2: 'No professional advice', body: ['Information on this site is general guidance about image sizes and formats. It is not legal, technical or professional advice for any specific application, exam, job or government process.'] },
 { h2: 'Results are not guaranteed', body: ['Compression results depend on the image, your browser and the chosen settings. A target size may not be reachable without a large drop in quality. The tool reports when it is not reached, but we cannot guarantee any particular quality or that a result will suit your purpose.'] },
 { h2: 'Keep your originals', body: ['JPEG and WebP compression discards detail permanently. Always keep a copy of the original. We are not responsible for loss of data or quality arising from your use of the tool.'] },
 { h2: 'No affiliation', body: ['We are not affiliated with any government body, exam board, employer, portal or other service mentioned on the site, or with other image tools such as Squoosh. Names are used only to describe common situations.'] },
 { h2: 'Browser and device limits', body: ['Very large images can exceed the memory available to your browser, especially on older phones. The tool applies size and pixel limits, but behaviour still varies between devices.'] },
]);
add('security', [
 { h2: 'Architecture', body: ['The site is built as static pages. The compression tool runs in your browser using standard web features, so no server-side image-processing service exists to receive, store or leak your images. Because there is no database or upload endpoint in the tool, the attack surface is smaller than a site that accepts uploads.'] },
 { h2: 'Browser protections', body: ['Pages are served over HTTPS with a Content Security Policy that restricts where scripts, images and connections may come from, a header that stops browsers guessing file types, and a header that prevents the site from being embedded in frames on other websites. Image previews use temporary browser links that the page revokes when they are no longer needed.'] },
 { h2: 'Safe handling of files', body: ['Files are identified by their binary signature, not by their name. Size and megapixel limits protect your device. SVG files, which can contain scripts, are rejected. Download names are cleaned so that unusual characters or path fragments are not used.'] },
 { h2: 'What you can do', body: ['Keep your browser up to date, avoid processing sensitive documents on shared computers, and close the tab when finished. Downloaded files are saved by your browser to your device, so manage them as you would any other file.'] },
 { h2: 'Reporting a problem', body: ['If you believe you have found a security issue, contact us with enough detail to reproduce it and give us reasonable time to respond before publishing details. We cannot promise rewards or specific response times. Security reports can be sent to ' + CONTACT_EMAIL + '.'] },
]);
add('accessibility', [
 { h2: 'What we have built in', body: ['Pages use headings in a logical order, labelled form controls, descriptive links, a skip link to the main content, and visible keyboard focus. The upload area works with the keyboard as well as drag and drop. Status messages are announced to assistive technology. Results show text sizes and dimensions, so information is not conveyed by colour alone.'] },
 { h2: 'Themes and motion', body: ['You can switch between light and dark themes. The site respects the reduced-motion setting on your device and turns off decorative animation and smooth scrolling when it is enabled.'] },
 { h2: 'Known limitations', body: ['We have not carried out an independent audit and we do not claim conformance with a specific standard. Image previews have general descriptions rather than a description of each picture, because the content is your own. The side-by-side comparison does not include a drag slider. Some behaviour, such as file pickers and downloads, depends on your browser and device.'] },
 { h2: 'Tips for assistive technology users', body: ['Use the file button in the drop area to choose images. After adding files, listen for the status message and move through the result cards with your usual navigation keys. Each card has Download, Retry and Remove buttons.'] },
 { h2: 'Feedback', body: ['If something is hard to use, tell us which page, which device and browser, and which assistive technology you used. We will try to fix real barriers. Email ' + CONTACT_EMAIL + '.'] },
]);
add('copyright-policy', [
 { h2: 'Our content', body: ['The text, layout, design and code of this site are protected by copyright or licensed to the operator. You may link to our pages. Do not copy them in bulk or present them as your own.'] },
 { h2: 'Your images and rights', body: ['You keep ownership of your images. Only process images that you own or have permission to use. The tool does not receive your images through the site, so we do not host, review or publish them. Compressing an image does not change who owns it.'] },
 { h2: 'Third-party names', body: ['Product and company names, such as Squoosh, are the property of their owners and are mentioned only to describe tools people commonly look for. We are not affiliated with them.'] },
 { h2: 'Reporting infringement', body: ['If you believe something on this website infringes your rights, send us a message describing the work, the page where it appears, your contact details and a statement that you are the owner or authorised to act. We will review it and respond as appropriate. Send notices to ' + CONTACT_EMAIL + '. [Add any jurisdiction-specific wording after legal review.]'] },
 { h2: 'Repeat infringement', body: ['Because we do not host user images, most infringement questions will concern site content. We may remove content or restrict access where there is a clear and repeated problem.'] },
]);

add('privacy-policy', [
 { h2: 'Legal bases and purposes', body: ['Where privacy law requires a legal basis, the technical data processed to deliver and secure the website, and the analytics used to understand usage and improve the site, are handled for the purposes described in this policy. We do not use your data for advertising or for automated decisions about you. [The operator should confirm the legal bases that apply in their jurisdiction after legal review, including whether consent is required for analytics cookies.]'] },
 { h2: 'Retention', body: ['We do not store your images, so there is nothing to retain or delete on our side. Logs kept by the hosting provider follow that provider’s own schedules. The theme preference in your browser remains until you clear it.'] },
 { h2: 'Your choices and rights', body: ['You can use the tool without creating an account, clear your browser storage at any time, and use a private window if you prefer. Depending on where you live, you may have rights to ask what personal data we hold, to correct or delete it, to object to processing, or to complain to a data protection authority. Because we intentionally collect very little, a request may result in us confirming that we hold nothing identifiable.'] },
 { h2: 'Email and contact', body: ['If you email us at ' + CONTACT_EMAIL + ', we will receive your email address and the content of your message, and we will use it only to respond and to keep a record of the conversation. Please do not send photos of identity documents or other sensitive images by email.'] },
 { h2: 'Third-party links', body: ['The site may link to other websites. Their privacy practices are their own, so please read their policies before sharing information.'] },
]);
add('terms-and-conditions', [
 { h2: 'The service as provided', body: ['The image tool is provided free of charge, as is, for general use. Features may change. We try to describe behaviour accurately, including that compression is lossy for JPEG and WebP and that a target size is not always reachable.'] },
 { h2: 'Disclaimers', body: ['To the extent allowed by law, we do not give warranties of any kind, including fitness for a particular purpose, uninterrupted operation, or that the output will be accepted by a third-party website. You use the output at your own risk and should check it before relying on it.'] },
 { h2: 'Indemnity', body: ['You are responsible for claims arising from your use of images you were not entitled to process. [Counsel should decide whether and how to include an indemnity clause for the relevant jurisdiction.]'] },
 { h2: 'Severability and entire agreement', body: ['If any part of these terms is found unenforceable, the rest stays in effect. These terms, with the privacy, cookie and disclaimer pages, are the whole agreement between you and the operator for use of the website.'] },
 { h2: 'Contact', body: ['Questions about these terms can be sent by email to ' + CONTACT_EMAIL + '. [Confirm operator name and postal address before launch.]'] },
]);
add('cookie-policy', [
 { h2: 'Why we use analytics', body: ['We use analytics only to see which pages are useful and where visitors run into problems, so that the guides and tools can be improved. The compression tool itself needs no account or personalisation, and we do not use analytics data to show advertising.'] },
 { h2: 'Details of the theme preference', body: ['The preference is a single short word, “light” or “dark”, saved only after you press the theme button. If you never press it, nothing is saved and the site follows your device setting. It is not shared with us or with third parties.'] },
 { h2: 'Browser extensions and tools', body: ['Extensions you install in your browser may add their own cookies or storage while you browse. Those are outside our control.'] },
]);
add('disclaimer', [
 { h2: 'Accuracy of guidance', body: ['We aim to keep tips and explanations correct, but image formats, browsers and portals change. Treat the guidance as a starting point and check the current instructions of the website you are uploading to.'] },
 { h2: 'External requirements', body: ['Some portals use 1,000 bytes for 1KB while this tool uses 1,024. A file that looks within a limit here may be counted slightly differently elsewhere. Leave headroom where a limit is strict.'] },
 { h2: 'Use at your own risk', body: ['You are responsible for deciding whether a compressed image is suitable for your purpose, including identification, official applications and legal documents. Check legibility and likeness before you submit.'] },
]);
add('security', [
 { h2: 'Third-party code', body: ['The site avoids unnecessary third-party scripts. The main exception is the Google tag used for analytics, which loads from Google and is allowed by our Content Security Policy. The ZIP feature uses an open-source library that is bundled with the site and loaded only when you ask for a ZIP download. Dependencies are managed with a lockfile and should be updated regularly.'] },
 { h2: 'Responsible handling by users', body: ['Compressed files are normal image files. Check any file you receive from others before opening it, keep your device updated, and be careful with images containing personal information.'] },
 { h2: 'Limits of our claims', body: ['We do not claim certifications or audits that we have not completed. We describe the measures that are in place, and we cannot promise that no vulnerability exists.'] },
]);
add('accessibility', [
 { h2: 'Devices and browsers', body: ['The site is designed for current versions of major browsers on phones, tablets and computers. The layout adapts to narrow screens, and text can be enlarged using your browser zoom. Very old browsers may lack the image features the tool relies on.'] },
 { h2: 'Content', body: ['We aim to use plain language, descriptive link text and clear headings. Technical terms such as KB are explained on the page, including that this site counts 1KB as 1,024 bytes.'] },
 { h2: 'Planned improvements', body: ['Areas we want to examine include further screen-reader testing of the results list and keyboard testing on all pages. These are intentions, not promises of dates.'] },
]);
add('copyright-policy', [
 { h2: 'Fair use of our pages', body: ['You may quote short excerpts with attribution and a link. Reproducing whole pages or the code of the site without permission is not allowed, unless an open-source licence on that component says otherwise.'] },
 { h2: 'Open-source components', body: ['The site uses open-source software, each under its own licence. Those licences continue to apply to the components. [The operator should list the licences before launch.]'] },
 { h2: 'Contact for rights questions', body: ['Email ' + CONTACT_EMAIL + ' for permission requests or notices. Please include enough information for us to find and assess the material you mention.'] },
]);

add('terms-and-conditions', [{ h2: 'Links to this website', body: ['You may link to any page of this website, provided you do not suggest endorsement by us or imply a relationship that does not exist. We may ask you to remove a link that is misleading or harmful.'] }]);
add('accessibility', [
 { h2: 'Keyboard guide', body: ['Use Tab and Shift+Tab to move between links, buttons and fields. Press Enter or Space on the upload area to open the file chooser, on preset buttons to select a size, and on the menu button to open or close navigation on small screens. The Advanced settings section opens and closes with Enter or Space.'] },
 { h2: 'Text, colour and contrast', body: ['The light and dark themes are designed with strong contrast between text and background, and links are visibly distinct. Success, warning and error states include words as well as colour. If you rely on a high-contrast mode in your operating system, the layout should remain usable, although we have not tested every combination.'] },
 { h2: 'Forms and inputs', body: ['Number fields for custom size, width and height have labels and accept numeric input. Error and status text appears near the tool and is announced politely so it does not interrupt other reading.'] },
]);
add('cookie-policy', [
 { h2: 'Contacting us about cookies', body: ['If you have a question about cookies or storage on this website, email ' + CONTACT_EMAIL + ' and include the page you were viewing and your browser. We will check the behaviour and update this policy if it is incomplete.'] },
 { h2: 'What analytics does not receive', body: ['The analytics tag is the standard Google tag with default page measurement. We do not add events that include image content, file names or image metadata, and the tool never passes them to the tag. If we add custom events, such as which tool page is opened or whether compression succeeded, we will list them here before they go live.'] },
 { h2: 'Updates', body: ['The date at the top of this page shows when it was last changed. Please check back occasionally for changes.'] },
]);
add('copyright-policy', [
 { h2: 'Screenshots and brand references', body: ['If you wish to publish a screenshot of this website, such as in a tutorial, please keep it unaltered and credit the site. Using our name in a way that suggests partnership or endorsement is not permitted without agreement.'] },
 { h2: 'Images you share elsewhere', body: ['After compression the output remains subject to the same rights as the original. If you publish it, you remain responsible for any permissions required, including those of people shown in the picture and of the photographer.'] },
 { h2: 'Good faith', body: ['We aim to resolve copyright concerns reasonably and quickly. Please email ' + CONTACT_EMAIL + ' before taking other steps so that we can address the issue.'] },
]);
add('disclaimer', [
 { h2: 'Tool behaviour may differ between browsers', body: ['Different browsers use different image encoders. The same image and settings may produce slightly different file sizes in Chrome, Safari or Firefox. The tool measures the output in your own browser, so the size it reports is the size of the file you download.'] },
 { h2: 'Links and mentions', body: ['References to other services, including image tools and online portals, are for information only. We do not endorse them, and we are not responsible for their content or changes to their rules.'] },
 { h2: 'Limitation', body: ['Nothing on this page limits any right or liability that cannot lawfully be limited. [Counsel should adapt this wording to the operator’s jurisdiction.]'] },
]);
add('security', [
 { h2: 'Headers and hosting', body: ['The site is hosted on Cloudflare’s network, which provides HTTPS and denial-of-service protection. We configure response headers for content-type protection, framing, referrer information and permissions such as camera and microphone, which the site does not use. Static assets are cached for speed; user images are never part of that cache because they do not pass through the server.'] },
 { h2: 'Contact form and future features', body: ['The contact page has a form that opens your email application with a message pre-filled, so the message travels through your own email provider and nothing is submitted to a server on this site. The site has no accounts or file-upload endpoints. If a form-handling service is connected later, it will need validation, spam protection and an updated privacy policy before release.'] },
 { h2: 'Keeping software current', body: ['The site is rebuilt from source with locked dependency versions. Security updates to dependencies should be applied promptly and the build tested before deployment.'] },
]);

add('accessibility', [{ h2: 'Compatibility notes', body: ['The tool depends on standard browser features for reading files and drawing images. Screen readers differ in how they announce dynamically updated regions, so if a status message is not read out on your setup, check the result list directly, where the sizes and states are written in text. Zooming the page to 200 percent should keep content readable without horizontal scrolling on most pages. If you use voice control, buttons have visible text labels that you can speak.'] }]);
add('cookie-policy', [{ h2: 'Summary', body: ['In short: the site stores your theme choice, uses Google Analytics cookies to measure visits, sets no advertising cookies of its own, and processes your images locally in your browser. Hosting and security systems that deliver the website may use technical mechanisms of their own, and the operator must confirm those before launch. You can clear the stored theme at any time in your browser settings, and you can contact us if anything here looks incorrect or incomplete for your situation.'] }]);
add('copyright-policy', [{ h2: 'Summary', body: ['You keep rights in your images, we keep rights in our site content, and other companies keep rights in their names and products. Please use only images you are allowed to use, tell us if you think something on the site infringes your rights, and respect the open-source licences that apply to parts of the software. This policy is a draft for legal review before launch and will be updated as the site grows.'] }]);
add('disclaimer', [{ h2: 'Summary', body: ['The tool is a convenience, not a guarantee. It reduces file sizes using lossy methods, it may not reach a target, and the output may not satisfy a particular portal. Keep your originals, check the result carefully, read the rules of the website you are uploading to, and contact us if something on the site seems wrong or unclear. We will correct inaccurate statements when we find them.'] }]);
add('security', [{ h2: 'Summary', body: ['Compression is performed on your device, the site is static and delivered over HTTPS, files are checked by their real contents, risky formats such as SVG are rejected, and browser security headers are enabled. No system is perfectly secure, so keep your own device and browser updated and report any issue you find through the contact page.'] }, { h2: 'Data you give us by email', body: ['If you report an issue by email, include only what is needed to reproduce it. Do not send sensitive images or personal documents. We will use the details you send only to investigate and reply.'] }]);

add('copyright-policy', [{ h2: 'Changes to this policy', body: ['We may update this policy as the site, its components and the law change. The date at the top shows the latest revision, and continued use of the site means you accept the current version.'] }]);
add('disclaimer', [{ h2: 'Changes to this disclaimer', body: ['We may revise this disclaimer when the tool, browsers or the rules of third-party websites change. The date at the top shows the latest revision, and we recommend checking it from time to time, especially before relying on the site for an important submission.'] }]);
