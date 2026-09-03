# Finger Lakes Finest Thoroughbreds Inc

This is NOT the official site - we are mid-migration. Not all data is fully migrated, although the site should otherwise be working correctly.

To add a listing:

- Ask Katherine for the CreateListing app
- Run the app, add the text of the fb post and the images to the relevant sections. Choose which photo should be the profile pic for the horse
- Any videos that are shorts need to be converted to embeddable iframes and then added to the jog_video div (or divs, if multiple videos) - regular videos are auto-added
- Commit *and push* all changes to Github (recommended: check what it looks like locally first)

To mark a listing as placed:

- Remove from index.html (mobile view near top and recent adds near bottom)
- Remove from available.html
- Add to placed.html (probably cut and paste from available)
- Optional: move horse-specific files from available to placed and update paths. Only needed as a long-term housekeeping thing, does not affect how the site displays.

TODO:
- Store a compiled applet in an admin branch, or other easy shipping solution
- Automate marking a listing as placed