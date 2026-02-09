# Fix Cloudflare 522 for bertin.ira.dev (GitHub Pages)

Follow these steps in order. All actions are in **GitHub** and **Cloudflare** dashboards (no code changes).

---

## Step 1: Confirm GitHub Pages is serving the site

- [ ] Open https://github.com/Bertin-Ir/personal_website_bertin → **Settings → Pages**
- [ ] **Source** = **GitHub Actions**
- [ ] **Custom domain** = **bertin.ira.dev** (note the CNAME target GitHub shows, e.g. `Bertin-Ir.github.io`)
- [ ] Open https://bertin-ir.github.io/personal_website_bertin/ in a browser
  - If it **loads**: continue to Step 2
  - If it **fails or 404**: go to **Actions** tab, ensure "Deploy to GitHub Pages" succeeded, re-run if needed

---

## Step 2: Cloudflare DNS – correct record and "DNS only" test

- [ ] Cloudflare Dashboard → zone for **ira.dev** → **DNS → Records**
- [ ] Find record for **bertin.ira.dev** (name: `bertin` or `@`)
- [ ] Set **Type** = CNAME, **Target** = **Bertin-Ir.github.io** (no https, no path)
- [ ] Set **Proxy status** = **DNS only** (grey cloud). Save.
- [ ] Wait 3–5 minutes, then open https://bertin.ira.dev (or http://)
  - If **site loads**: go to Step 3 and 4
  - If **timeout / no resolve**: double-check CNAME target and record name; try incognito

---

## Step 3: Cloudflare SSL

- [ ] Cloudflare → **SSL/TLS** → **Encryption mode** = **Full** or **Full (strict)** (not Flexible)
- [ ] Save. Leave proxy off for now.

---

## Step 4: Re-enable Cloudflare proxy

- [ ] **DNS → Records** → for bertin.ira.dev CNAME, turn proxy **on** (orange cloud)
- [ ] Wait 2–3 minutes, test https://bertin.ira.dev
  - If it **loads**: 522 is fixed
  - If **522 returns**: set record back to **DNS only** (grey); try **Full (strict)** if you used Full

---

## Step 5: GitHub – Enforce HTTPS

- [ ] After the site loads, repo **Settings → Pages** → enable **Enforce HTTPS**

---

## Quick reference

| Where          | Check |
|----------------|-------|
| GitHub Pages   | Source = GitHub Actions; Custom domain = bertin.ira.dev; *.github.io URL loads |
| Cloudflare DNS | CNAME bertin.ira.dev → **Bertin-Ir.github.io**; test with **DNS only** first |
| Cloudflare SSL | **Full** or **Full (strict)** |
| Cloudflare proxy | Enable (orange) only after site works with DNS only |
