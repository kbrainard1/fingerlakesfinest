# Finger Lakes Finest Thoroughbreds Inc

This is NOT the official site - we are mid-migration. Not all data is fully migrated, although the site should otherwise be working correctly.

To add a listing:

- Ask Katherine for the CreateListing script
- Save images from post in allonewordlowercasename_files. Important: the image to use for the horse's main profile pic should be named "side.jpg" (typically you want to use a side view)
- Run the script on the full text of the facebook post
- Any videos that are shorts need to be converted to embeddable iframes and then added to the jog_video div (or divs, if multiple videos) - regular videos are auto-added
- Commit *and push* all changes to Github (recommended: check what it looks like locally first)

To mark a listing as placed:

- Remove from index.html (mobile view near top and recent adds near bottom)
- Remove from available.html
- Add to placed.html (probably cut and paste from available)
- Optional: move horse-specific files from available to placed and update paths. Only needed as a long-term housekeeping thing, does not affect how the site displays.

TODO:
- Add a frontend to the script
- Store a compiled applet in an admin branch
- Automate marking a listing as placed