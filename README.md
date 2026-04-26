## Version 1 Build Notes

Version 1 of ChefConnect London focused on creating a simple working MVP without adding complex marketplace features too early.

The goal was to build the basic website structure first, then improve the product in future versions.

### Version 1 Pages Built

- Home page
- Cuisine category listing page
- Individual cuisine detail pages
- Join as a chef page
- Basic chef application form

### Version 1 Decisions

For the first version, I decided not to use fake chef profiles.

Instead of adding random chef names, ratings, prices, and bios, the MVP uses cuisine categories such as:

- British
- Indian
- Caribbean
- African
- Italian
- Plant-Based

This keeps the project honest while the platform is still being built.

The chef category pages are designed to show where approved chef profiles will appear in the future.

### Current User Journey

The current user journey is:

1. User lands on the homepage
2. User clicks browse chefs
3. User chooses a cuisine category
4. User views a category page
5. Chefs can use the "Join as a Chef" form to apply

### Current Limitations

Version 1 does not include:

- Real chef profiles
- Database storage
- Login or authentication
- Admin dashboard
- Payment system
- Ratings and reviews
- Image or video uploads
- Customer enquiry system

These features are planned for future versions.

### Issues Encountered During Version 1

During the build, I encountered and solved several setup and coding issues.

#### Node.js Was Not Installed

When first trying to run Node commands, the terminal did not recognise `node`.

This was fixed by installing Node.js on Windows and checking it with:

```bash
node -v
npm -v
#### npm PowerShell Execution Policy Error

After installing Node.js, npm was blocked by a PowerShell execution policy error.

This was fixed by running:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

After that, npm worked correctly.

#### Git Was Not Installed

The terminal did not recognise the `git` command at first.

This was fixed by installing Git for Windows and checking it with:

```bash
git --version
```

#### README File Was Named Incorrectly

At one point, the README content was added under the wrong filename.

GitHub only automatically displays the README if the file is named exactly:

```txt
README.md
```

This was fixed by renaming the file to `README.md`.

#### Localhost Stopped Working

The local website stopped loading because the development server had been stopped with `Ctrl + C`.

This was fixed by restarting the local server with:

```bash
npm run dev
```

The site then loaded again at:

```txt
http://localhost:3000
```

#### Cuisine Cards Were Not Clickable

The cuisine category cards were initially not clickable.

This was fixed by changing the card wrapper into a link using:

```jsx
<a href={`/chefs/${category.slug}`}>
```

This allowed users to click a cuisine category and visit its detail page.

#### Category Page Route Error

The dynamic category page initially showed "Category not found" because the route parameter was not being handled correctly.

This was fixed by updating the dynamic route page to read the category parameter properly.

The final route structure uses:

```txt
app/chefs/[category]/page.js
```

This allows pages such as:

```txt
/chefs/african
/chefs/indian
/chefs/caribbean
```

to work correctly.

#### GitHub Push Rejected

When pushing the local project to GitHub, the push was rejected because the GitHub repository already had README commits that were not in the local project.

This was fixed by pulling the remote changes, resolving the README merge conflict, committing the merge, and pushing again.

### Version 2 Plans

Version 2 will focus on making the platform more realistic and useful.

Planned Version 2 features include:

- Real chef profile cards
- Individual chef profile pages
- Chef images and videos
- Ratings and reviews
- Database for chef applications
- Admin approval system
- Contact or enquiry form
- Search and filtering
- Better mobile navigation