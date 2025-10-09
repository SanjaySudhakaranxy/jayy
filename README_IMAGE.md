Drop your profile picture at `public/images/profile.jpg` (or keep the default `profile.svg`).

Recommendations:

- File name: `profile.jpg` or `profile.png`
- Size: at least 400x400 pixels
- Aspect: square or center-cropped
- Format: JPEG or PNG

How to test locally:
1. Place your image at `public/images/profile.jpg`.
2. Start the dev server: `npm run dev` (the project uses Next.js and runs on port 5000 by default).
3. Open http://localhost:5000 and check the hero section — your image should appear where the placeholder was.

If the image does not show, run the dev server logs and confirm Next is serving the file from `/images/profile.jpg`.