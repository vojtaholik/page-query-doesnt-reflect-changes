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