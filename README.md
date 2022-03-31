# Simple Autoreloader for Chrome/Chromium

The chrome web store lists thousands of auto reloading add-ons, but every add-on needs to be started manually after the browser started (which is not suitable for kiosk devices) and most add-ons are far too big and complex for such a simple task. Thats why I created my own, ultra simple auto reloader add-on.

It simply inserts `<meta http-equiv="refresh" content="120" />` into every page.

## Installation
1. Go to chrome add-on page, enable developer mode
2. Load unpacked extension and select this folder
