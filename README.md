# Don't Hunt Me

### Your product is not ready?

Don't Hunt Me display a popup on your website to let Hunters know you are not ready!

It detects users coming from Product Hunt and redirect them back after a few seconds. 

And hopefully, the Product Hunt Team will not feature your product 🤗 

[Click here to see a demo](https://archmaps.co?ref=producthunt)

### Installation

#### Popup

`<script async defer src="https://donthuntme.com/dhm.js"></script>`

1. Copy and paste this JS code snippet before the `</body>` of the website you are working on. 

2. Add `?ref=producthunt` after your website url and load it.
Like this [https://archmaps.co?ref=producthunt ](https://archmaps.co?ref=producthunt )

3. Do you see the Don't Hunt Me popup? Yes? Nice, it's working 🎉

#### Popup and Ribbon

You can also display a "Please don't hunt me" ribbon with an onclick popup.
```
<script>
  (function(d, h, m){
    var js, fjs = d.getElementsByTagName(h)[0];
    if (d.getElementById(m)){return;}
    js = d.createElement(h); js.id = m;
    js.onload = function(){init({ribbon: topright})}
    js.src = "https://donthuntme.com/dhm.js"
    fjs.parentNode.insertBefore(js, fjs)
  }(document, "script", "dhm"))
</script>
```

1. Copy and paste this JS code snippet before the `</body>` of the website you are working on. Change `topright`to `bottomright`, `bottomleft`or `topleft` if you'd like to display it in another corner.

2. Visit your page, you should see the ribbon and be able to click it.

3. Add `?ref=producthunt` after your website url and load it.
Like this [https://archmaps.co?ref=producthunt ](https://archmaps.co?ref=producthunt )

4. Your should see the Don't Hunt Me popup 🙌

### Host it yourself

If you prefer, you can implement directly in your app.
The easiest way for now is to simply copy/paste the content of `dhm-ribbon.js` in a JS module.
If you only want the blocking popup without the ribbon, use the `dhm.js`script.

The donthuntme image is loaded from donthuntme.com. If you wish to lad it from your server, download donthuntme.png, put it in your root server folder and change `var host="donthuntme.com"` with your domain.

Let me know if you think of a better way!
