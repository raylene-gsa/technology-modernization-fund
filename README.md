# Technology Modernization Fund
## https://tmf.cio.gov/

#### The TMF is an innovative funding vehicle that gives agencies additional ways to deliver services to the American public more quickly, better secure sensitive systems and data, and use taxpayer dollars more efficiently.

Welcome to the party! :tada:

---

## Links

Need to link to another site? Here is how links are formatted within markdown, markdown formatting can be used in the link label — `[]()`:

```
[text to be linked](https://digital.gov)
```

Need to link to another page within the site?
Add the link shortcode and the path to the file: `{{ site.baseurl }}{% link _pages/submit.md %}`

```
Fill our our [submission guidelines]({{ site.baseurl }}{% link _pages/submit.md %})
```
Need to link to a section with the current page (AKA a reference link) ?
Use the standard markdown link format and ensure the referenced text in the document is spelled identically with the text in the link specification `[Link Label](i-am-a-link-text)` clicking the link label will take the user to `'i am a link text'` later in the document. 
```
[## Digital Gov](digital-gov-in-2020)

## Digital Gov in 2020  is entering a new era ...
```
## PDFs

Want to insert a PDF into the site?
1. upload the PDF to `/_pages/documents/pdfs/`
2. link to the PDF from your text in the same way you'd link to _pages ```[check out my PDF!]({{ site.baseurl }}{% link _pages/documents/pdfs/mgt-act-final.pdf %})```

The PDF icon will appear next to any link that ends in a `.pdf`.

## Images

Images can be uploaded into the `/images/` folder:

Any image that is in the `/images/` folder can be included in a page with one of the following shortcodes.

You'll need to provide three things:
- path + filename — this is the path within the `/images/` folder
- caption — a clear description of the image
- alt-text — a description of the image for people who cannot see it


**In-line Image**
```
{% include image.html path="contact-center/sonny.png" alt-text="this is the alt text" caption="carrot" %}
```

**Wide Image**
```
{% include image-wide.html path="contact-center/sonny.png" alt-text="this is the alt text" caption="Carrot" %}
```

## Videos

YouTube videos can be embedded in pages.

1. Copy the the `ID` of the youtube video URL
  1. Example — `https://www.youtube.com/watch?v=JcwG4iwN6Fk` the ID of this video is `JcwG4iwN6Fk`
2. Paste the `ID` into the following shortcode.

```
{% include youtube.html id="JcwG4iwN6Fk" %}
```
