### Setup
* `git clone https://github.com/vojtaholik/page-query-doesnt-reflect-changes.git`
* `cd page-query-doesnt-reflect-changes`
* `yarn`
* `gatsby develop`

### Steps to reproduce a bug with pageQuery not reflecting changes

1. Create a new markdown file in `content/posts`:

```bash
touch content/posts/new.md
```

1. Populate the markdown file you just created with following content: 

```md
---
title: New post
published: true
date: 2020-06-02
---

This post will only show after editing pageQuery.
```

3. Save the file and check if it showed up on the homepage — it should, but doesn't.
4. Change `indexQuery` limit in `src/pages/index.js` from 8 to e.g. 7 and save the file. The post now shows up on the homepage.

[🎥 Screen Recording showing the issue](https://share.getcloudapp.com/lluJjDe7)

### Expected result

pageQuery in `src/pages/index.js` should reflect changes in file tree on it's own without needing to edit it.

### Actual result

pageQuery didn't reflect changes in file tree, even though they're visible in graphiql. 

May be related to something that isn't hooked up in the data dependency tracking, specifically around the frontmatter values in MDX files?