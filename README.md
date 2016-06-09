# doThisWhenVisible
A small jQuery plugin to excute a callback when an element is above the bottom of the viewport.

## Usage
doThisWhenVisible is a jQuery plugin, so make sure you have jQuery on the page before you include this.

```html
<script src="//code.jquery.com/jquery-2.2.4.min.js"></script>
<script src="path/dist/jquery.dothiswhenvisible.min.js"></script>
```

Then you just need to get a hold of the element(s) you want to monitor and call `doThisWhenVisible`, passing in your callback.

```javascript
jQuery('.target').doThisWhenVisable(function($el){
    console.log('It would appear that ', $el, ' is now visible');
});
```
