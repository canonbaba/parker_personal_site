<!DOCTYPE html>
<html>
    <head>
        <title>jQuery Input Lettering</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1,  user-scalable=no">
        <style>
           
        </style>
    </head>
    <body>
        <div id="">
            <h1>ABC</h1>

            <h1>TagCanvas jQuery example page</h1>
    <div id="myCanvasContainer">
      <canvas width="300" height="300" id="myCanvas">
        <p>Anything in here will be replaced on browsers that support the canvas element</p>
      </canvas>
    </div>
    <div id="tags">
      <ul>
        <li><a href="" target="_blank">HTML</a></li>
        <li><a href="" target="_blank">CSS</a></li>
        <li><a href="" target="_blank">Javascript</a></li>
        <li><a href="" target="_blank">jQuery</a></li>
        <li><a href="" target="_blank">PHP(codeigniter)</a></li>
        <li><a href="" target="_blank">Apache Cordova</a></li>
        <li><a href="" target="_blank">VueJS</a></li>
        <li><a href="" target="_blank">NodeJS</a></li>
        <li><a href="" target="_blank">MySQL</a></li>
        <li><a href="" target="_blank">Github</a></li>
      </ul>
    </div>
        </div>

        <!-- JS -->
        <script src="../assets/js/main-dist.js"></script>
        <script type="text/javascript">
            $(document).ready(function() {
                if(!$('#myCanvas').tagcanvas({
                    textColour: '#ff0000',
                    outlineColour: '#ff00ff',
                    reverse: true,
                    depth: 0.8,
                    maxSpeed: 0.05
                    },'tags')) {
                    // something went wrong, hide the canvas container
                    $('#myCanvasContainer').hide();
                }
            });
        </script>
    </body>
</html>