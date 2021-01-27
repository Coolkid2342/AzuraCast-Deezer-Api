# AzuraCast To Deezer Search

The AzuraCast to Deezer Search api will grab what is currently playing and will search the deezer libary for the song allowing to you show the MetaData on your site.

## Installation

Change the domain name in config.json, keeping "/api/nowplaying/1.json". Copy everything in input.html into your html document and copy meta.js, config.json and api.php into your default location.

## Usage
```html
<html>
    <head>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script src="meta.js"></script>
    </head>
    <body>
        <h1>Now Playing
        <p>
        <h2 id="Combined">
        <img id="CoverArt">
    </body>
</html>
```

## Valid ID's

* Combined
* Artists
* Title
* CoverArt

More to come

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.