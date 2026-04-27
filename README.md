# Clays for Vets — Website

Static HTML/CSS/JS website for [claysforvets.com](https://claysforvets.com), hosted on GitHub Pages.

## 📁 Project Structure

```
claysforvets/
├── index.html        ← All pages (single-page app via JS router)
├── css/
│   └── style.css     ← Full stylesheet with brand tokens
├── js/
│   └── main.js       ← Navigation, interactions, animations
└── README.md
```

## 🚀 Deploying to GitHub Pages

### Step 1 — Create the GitHub repo
1. Go to [github.com/new](https://github.com/new)
2. Name it `claysforvets` (or `claysforvets.github.io` for a root domain)
3. Set to **Public**, skip the README init, click **Create repository**

### Step 2 — Push the site files
```bash
cd path/to/claysforvets
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/claysforvets.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to the repo → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Branch: `main` / Folder: `/ (root)` → **Save**
4. Your site will be live at `https://YOUR_USERNAME.github.io/claysforvets` within ~60 seconds

### Step 4 — Connect your custom domain (claysforvets.com)

#### In GitHub:
1. **Settings** → **Pages** → **Custom domain**
2. Enter `claysforvets.com` → **Save**
3. This creates a `CNAME` file in your repo automatically

#### At your DNS registrar (GoDaddy / Namecheap / etc.):
Add these records:

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | YOUR_USERNAME.github.io |

> DNS changes can take up to 24 hours to propagate, but usually work within 30 minutes.

#### Enable HTTPS (after DNS propagates):
1. **Settings** → **Pages**
2. Check ✅ **Enforce HTTPS**

## ✏️ Updating the Site

To make changes:
1. Edit the files locally
2. Run:
```bash
git add .
git commit -m "Update: describe what you changed"
git push
```
GitHub Pages auto-deploys within ~30 seconds of each push.

## 🎨 Customizing Content

All placeholder content that needs to be updated before launch:

- [ ] `index.html` — Replace EIN `88-XXXXXXX` with real EIN
- [ ] `index.html` — Update phone number in Contact section
- [ ] `index.html` — Update event dates, locations, descriptions
- [ ] `index.html` — Update team names, roles, and bios
- [ ] `index.html` — Update stat numbers (veterans served, events held, etc.)
- [ ] `index.html` — Add real social media links
- [ ] `css/style.css` — Swap Google Fonts if you have a font preference
- [ ] Connect a real payment processor (Stripe, PayPal, Givebutter) for the Donate form

## 💳 Connecting a Real Donate Button

For accepting real donations, replace the donate form with one of these:
- **[Givebutter](https://givebutter.com)** — Free, nonprofit-friendly, embeds easily
- **[PayPal Giving Fund](https://www.paypal.com/us/webapps/mpp/givingfund)** — Free for 501(c)(3)s
- **[Stripe](https://stripe.com/nonprofit)** — Discounted rates for nonprofits

## 📬 Connecting the Contact Form

Options for making the contact form actually send emails:
- **[Formspree](https://formspree.io)** — Free tier, just change the `<form>` action
- **[EmailJS](https://www.emailjs.com)** — Client-side email sending

### Formspree (easiest):
```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
Sign up at formspree.io, create a form, and paste your form ID.
