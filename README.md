# chefconnect-london
A London-focused private chef directory MVP built to help customers discover independent private chefs and for private chefs to advertise themselves
The idea is to help customers discover independent private chefs in London for private dining, dinner parties, events, and at-home food experiences.

## Project Status

This project is currently in the planning stage.

The first version will focus on building a simple directory where users can: f

- Browse private chef profiles
- View chef experience, cuisine type, location, and starting price
- Contact chefs directly
- Allow chefs to apply to be listed

## MVP Scope

The first version will be a directory, not a full booking marketplace.

This means the platform will not handle:

- Payments
- Bookings
- Refunds
- Cancellations
- Reviews
- Disputes

These features may be added in future versions.

## Target Location

The MVP is focused on London only.
## Project Considerations and Limitations

Before building this project, I considered several practical, legal, and operational limitations involved in creating a private chef directory.

### Directory vs Marketplace

The first version of this project is designed as a directory, not a full booking marketplace.

Users can browse private chefs and make contact, but the platform does not currently handle bookings, payments, refunds, cancellations, or disputes.

This keeps the MVP focused and reduces early complexity.

### London-Only MVP

The initial scope is limited to London.

Starting with one city keeps the platform easier to design, test, and position because the chef profiles, search filters, and user journeys can focus on one geographic market first.

Future versions could expand to other UK cities.

### Food Safety

Because private chefs prepare food for customers, food safety is an important consideration.

Future versions should consider chef verification, including:

- Food hygiene certificates
- Food business registration
- Public liability insurance
- Allergen handling policies
- Professional references

The MVP does not automatically verify chefs. Chef applications would ideally be reviewed before being published.

### Allergens and Dietary Requirements

Allergens are a major risk in any food-related platform.

The platform should encourage customers to discuss allergies, intolerances, and dietary requirements directly with chefs before making any arrangement.

The MVP should avoid making claims such as "allergy-safe" unless proper verification exists.

### Trust and Safety

A private chef may enter a customer's home, so trust is essential.

Future versions could include:

- Identity verification
- Verified chef badges
- Customer reviews
- Report features
- Safer enquiry handling
- Booking protection policies

For the MVP, the focus is on clear chef profiles and manual review rather than automated trust systems.

### Payments

The first version does not process payments.

Adding payments would require handling:

- Deposits
- Refunds
- Cancellations
- Chargebacks
- Platform fees
- Chef payouts
- Disputes

Payments may be added in a later version.

### Reviews

Reviews are not included in the first version.

Although reviews can help build trust, they also create moderation challenges such as fake reviews, abusive content, and disputes between chefs and customers.

Reviews may be added later once the platform has a stronger booking or enquiry process.

### Data Privacy

The platform may collect chef information such as names, emails, locations, bios, prices, and profile images.

Future versions should include:

- Privacy Policy
- Terms of Use
- Cookie Policy
- Data retention rules
- Clear user consent for submitted information

The MVP should only collect the minimum data needed.

### Marketplace Cold Start Problem

The platform needs both chefs and customers to be useful.

The first version can solve this by using a small set of high-quality demo chef profiles or manually approved early chef profiles.

A future launch strategy could involve onboarding 10 to 20 London chefs before promoting the site publicly.

### Future Improvements

Planned future improvements include:

- Chef registration database
- Admin approval dashboard
- Customer enquiry form
- Chef profile editing
- Cuisine and location filters
- Verified chef badges
- Reviews
- Booking system
- Payment integration
- SEO pages for London areas and cuisine types
Starting with one city keeps the project focused and easier to test before expanding to other locations.
## Planned Website Pages

The MVP will include the following pages:

- Home page
- Chef listing page
- Individual chef profile page
- Chef application page
- About page

## Planned Tech Stack

The planned tech stack for this project is:

- Next.js
- React
- Tailwind CSS
- GitHub
- Vercel

The first version will use demo chef data before adding a real database.

## MVP Features

The first version of ChefConnect London will include:

### Customer Features

- View a homepage explaining the platform
- Browse a list of private chefs in London
- View individual chef profiles
- See chef details such as cuisine type, experience, location, bio, and starting price
- Contact or enquire about a chef

### Chef Features

- Apply to be listed on the platform
- Submit basic profile information
- Add cuisine specialties, experience, location, and contact details

### Admin Features

- Review chef applications before publishing profiles
- Keep low-quality or incomplete profiles off the public directory

Admin features may be handled manually in the first version before a full admin dashboard is built.
