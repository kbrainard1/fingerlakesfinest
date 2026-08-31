# Finger Lakes Finest Thoroughbreds Inc

This is NOT the official site - we are mid-migration. Not all data is fully migrated, although the site should otherwise be working correctly.

To add a listing:

- Ask Katherine for the CreateListing script (currently: Java saved locally that runs on a checkout; eventual: javascript that uses the GH api)
- Run the script on the text of the facebook post up to but not including the links to race record, etc
- Save images from post using standard naming scheme (side, front, rear)
- Manual additions: any additional photos go in the photos list div, race record and pedigree links go in those <a> tags, and video(s) need to be converted to embeddable iframes and then added to the jog_video div (or divs, if multiple videos)
- index & available.html are all automated, unless you don't want this listing to be at the top of the list, then you'll need to adjust the ordering
- Commit *and push* all changes to Github (recommended: check what it looks like locally first, this auto-updates the site)

To mark a listing as placed:

- Remove from index.html (mobile view near top and recent adds near bottom)
- Remove from available.html
- Add to placed.html (probably cut and paste from available)
- Optional: move horse-specific files from available to placed and update paths. Only needed as a long-term housekeeping thing, does not affect how the site displays.

Top TODOs:

- Investigate FB api to automate getting the text & photos
- Convert script to use the GH API instead of a local checkout
- Convert script to js in the repo
- Add a small frontend for the script
- Add tooling for marking a listing as placed
- Backfill older data
