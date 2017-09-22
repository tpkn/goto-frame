/*!
 * gotoFrame (v1.0.1.20170910), http://tpkn.me/
 */
function gotoFrame(mc, end_frame, tween){
   if(typeof lib === 'undefined' || !lib.properties || !lib.properties.fps){
      return console.error('No CreateJs!');
   }

   // Check is the end frame is correct
   if(typeof end_frame !== 'number'){
      end_frame = mc.currentFrame;
   }else if(end_frame > mc.totalFrames - 1){
      end_frame = mc.totalFrames - 1;
   }else if(end_frame < 0){
      end_frame = 0;
   }

   var frame = mc.currentFrame;

   // Use interval to run to end frame or just return next frame step
   tween = typeof tween === 'undefined' ? true : tween;

   function stop(){
      clearInterval(mc.aid);
   }

   // Calculate next frame and step into it
   function update(){
      if(mc.currentFrame > end_frame){
         frame--;
      }else if(mc.currentFrame < end_frame){
         frame++;
      }else{
         if(tween){
            stop();
         }
      }
      mc.gotoAndStop(frame);
   }

   if(tween){
      stop();
      mc.aid = setInterval(update, 1000 / lib.properties.fps);
   }else{
      update();
   }
}
