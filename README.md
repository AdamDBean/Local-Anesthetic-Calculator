# Local Anesthetic Additive Toxicity Calculator

A lightweight, offline-capable Progressive Web App (PWA) designed to calculate the additive toxicity and safe remaining limits of multiple local anesthetic agents. This tool uses percentage-based cumulative dosing to help clinicians track safe redosing when mixing or sequentially administering different amide and ester anesthetics.

## Features

* **Patient-Specific Limits:** Calculates weight-based (mg/kg) and absolute (mg) maximum doses dynamically.
* **Cumulative Toxicity Tracking:** Add multiple administered agents to see the total `% of maximum local dose given`.
* **Smart Remaining Dose:** Automatically calculates the safe remaining volume (mL) and mass (mg) for a subsequent "desired" agent based on the available remaining percentage.
* **Special Clinical Logic:** Includes built-in exceptions, such as increasing the absolute maximum dose of Prilocaine to 600 mg for patients weighing over 70 kg.
* **Offline Capable (PWA):** Built with a Service Worker and Web App Manifest, allowing the calculator to be installed directly to a mobile device's home screen and function entirely without an internet connection.

## Agent Data Reference

The calculator uses the following baseline pharmacological limits:

| Agent | Weight Max (mg/kg) | Absolute Max (mg) |
| :--- | :--- | :--- |
| **Bupivacaine** | 2.5 | 175 |
| **Bupivacaine + Epi** | 3.0 | 200 |
| **Lidocaine** | 4.5 | 300 |
| **Lidocaine + Epi** | 7.0 | 500 |
| **Ropivacaine** | 3.0 | 200 |
| **Mepivacaine** | 7.0 | 400 |
| **Chloroprocaine** | 3.0 | 200 |
| **Chloroprocaine + Epi** | 4.5 | 300 |
| **Procaine** | 7.0 | 350 |
| **Prilocaine** | 8.0 | 500 *(600 if >70 kg)* |
| **Levobupivacaine** | 2.0 | 150 |

## Installation & Usage

Because this app is a PWA, it can be hosted for free on GitHub Pages and installed natively on iOS or Android.

### Hosting on GitHub Pages
1. Push the repository files (`index.html`, `manifest.json`, `sw.js`, and the icons) to the `main` branch.
2. Navigate to your repository's **Settings** > **Pages**.
3. Under "Build and deployment", set the source to **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder, then click **Save**.
5. Wait a few minutes for GitHub to build the site. Your live URL will appear at the top of the Pages settings.

### Installing on a Mobile Device
1. Open the live GitHub Pages URL in your mobile browser (Safari for iOS, Chrome for Android).
2. Tap the **Share** button (iOS) or the **Three-Dot Menu** (Android).
3. Select **Add to Home Screen**.
4. The calculator will now appear as an app on your device and will function offline.

## Disclaimer

**Educational Use Only:** This calculator is intended for educational purposes and APEX review. It is not a substitute for clinical judgment. Always verify calculations, patient-specific contraindications, and institutional guidelines before administering any medication.