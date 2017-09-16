### Usage (code for Animate CC)
```javascript
gotoFrame(this.mc, 120);
```

### If using within setInterval or tick handler
```javascript
createjs.Ticker.addEventListener("tick", stage);
function update(){
   gotoFrame(this.mc, 120, false);
}
```
<br />


### Config
| Variable | Type | Description |
|-------------|:-------------:|-------------|
| mc | Object | - |
| end_frame | Number | - |
| tween | Number | If set `false`, each call of function would move timeline by one frame at a time |
