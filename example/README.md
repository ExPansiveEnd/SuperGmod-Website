<h1 style="text-align: center;">example page </h1>

includes a example page, that's it.

as of Feb 14th, 2025:

# Topbar
<div id="topbar" class="topbar">
    [<span onclick="transitionToPage('')" style="color: green; cursor: pointer;">Home</span>] &nbsp;|&nbsp;
    [<span onclick="transitionToPage('Wiki.html')" style="color: green; cursor: pointer;">Wiki</span>] &nbsp;|&nbsp;
    [<span onclick="transitionToPage('Contributors.html')" style="color: red; cursor: pointer;">Contributors</span>] &nbsp;|&nbsp;
    [<span onclick="transitionToPage('About.html')" style="color: blue; cursor: pointer;">About-Us</span>] &nbsp;|&nbsp;
    [<span onclick="transitionToPage('Feature.html')" style="color: #DF00FF; cursor: pointer;">Unfinished</span>] &nbsp;|&nbsp;
    [<span onclick="transitionToPage('Timeline.html')" style="color: #00FFE1; cursor: pointer;">Unfinished</span>] &nbsp;|&nbsp;
    [<span onclick="transitionToPage('Project1.html')" style="color: blue; cursor: pointer;">Main</span>] &nbsp;|&nbsp;
    Created 2-3-2025
</div>

this is the topbar, it gets centered by main.css dw, you'll see it's placement in example.html

fade.js handles the fade intro and outro, place it after style before body.

# css stuff


<style>

    html {background-image: url(Images/backgroundweb.jpg);}

    .title2 {font-family: "OldComputer"; color: white; position: absolute; top: 25%; background-color: rgb(23, 35, 25, 0.5); height: 5%; width: 8%;
    left: 80%; line-height: 100%; padding: 15px;}

    .title1 {font-family: "OldComputer"; color: white; position: absolute; top: 25%; background-color: rgb(23, 35, 25, 0.5); height: 5%; width: 8%;
    left: 25%; line-height: 100%; padding: 15px;}

    .sidebar {font-family: "OldComputer"; color: white; position: absolute; top: 35%; background-color: rgb(23, 35, 25, 0.5); height: 200%; width: 27%;
    overflow-y: scroll; overflow-x: hidden; left: 70%;}

    .body {font-family: "OldComputer"; color: white; position: absolute; top: 35%; background-color: rgb(23, 35, 25, 0.5); height: 200%; width: 60%;
    overflow-y: scroll; overflow-x: hidden;}

    .borderbar {top: 15%; height: 5px; border-color: white; border-width: 5px; width: 98%; position: absolute; border-style: dashed;}

    .topbarRT {font-size: 200%; font-family: "OldComputer"; color: white; position: absolute; top: 4%; background-color: rgb(23, 35, 25, 0.5); left: 85%; height: 50px;
    line-height: 50px; border-style: dashed; text-decoration: white; border-color: white; border-width: 2px; padding: 5px; transform: scaleY(0.5);}

    .topbar {font-family: "OldComputer"; color: white; position: absolute; top: 5%; background-color: rgb(23, 35, 25, 0.5); height: 50px; width: 99%;
    line-height: 50px;} 

    @font-face {
    font-family: "OldComputer";
    src: url(font/Px437_IBM_VGA_8x16.ttf);
    }
</style>

this is not apart of the css but in the page itself, you need both, don't ask why! my code is sloppy but the css also does stuff so it's not completley useless. 

this code handles the fonts and topbar functions.

# Side bar

<div id="sidebar" class="sidebar">

    <img src="Images/trappedidiot.jpg" width="200px" height="200px" style="float: right;">
    An idiot got himself trapped.
</div>

This is a sidebar, this is on every page. I don't know why! feel free to use on the page for whatever reason, Or don't use it at all.