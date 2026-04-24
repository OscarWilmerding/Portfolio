# Portfolio Project Notes

## Video Hosting
All videos are hosted in a **Cloudflare R2 bucket** with a custom domain at `https://media.oscarwilmerding.com/`.

Video filenames (as stored in R2):
- `arm-movement.mp4`
- `servos-in-use-1.mp4`
- `servos-in-use-2.mp4`
- `timelapse-of-robot-working.mp4`
- `close-up-of-robot-working.mp4`
- `solenoid-valve-test.mp4`
- `pulley-movement-system.mp4`
- `motor-movement-test.mp4`
- `device-in-action.mp4`
- `cart-in-action.mp4`
- `empty-chassis-and-components.mp4`

## Workflow
When making changes, edit the source files only (e.g. `assets/`, `projects/`, `index.html`). Do NOT touch the `deploy/` folder unless explicitly asked. The user will ask for a deploy update separately.

## Deploy
Site is deployed on **Vercel** from the `OscarWilmerding/Portfolio` GitHub repo. Push to `main` to redeploy.

## Images
Several large PNGs were converted to JPG during setup to reduce file size. If adding new images, prefer JPG for photos.
