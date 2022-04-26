var nowPlayingTimeout;
var nowPlaying;
var url = window.location.href;

function loadNowPlaying() {
    $.ajax({
        cache: false,
        dataType: "json",
        url: `${url}/api.php`,
        success: function (np) {
            var Title = np.data[0].title;
            var Artists = np.data[0].artist.name;
            var Combined = `${Artists} - ${Title}`;
            var CoverArt = np.data[0].album.cover_big;
            var ArtistPhoto = np.data[0].artist.picture_big;
            $(`#Title`).text(Title);
            $(`#Artists`).text(Artists);
            $(`#Combined`).text(Combined);
            if (!CoverArt[0]) {
                var CoverArt = "https://coolkid2342.co.uk/missing.png"
                var img = document.getElementById("CoverArt");
                img.src = CoverArt;
                return
            } else if (CoverArt[0]) {
                var img = document.getElementById("CoverArt");
                img.src = CoverArt;
            }
            if (!ArtistPhoto[0]) {
                var ArtistPhoto = "https://coolkid2342.co.uk/missing.png"
                var img = document.getElementById("CoverArt");
                img.src = CoverArt;
                return
            } else if (ArtistPhoto[0]) {
                var img = document.getElementById("CoverArt");
                img.src = CoverArt;
                return
            }
        nowPlayingTimeout = setTimeout(loadNowPlaying, 2000);
        }
    }).fail(function () {
        nowPlayingTimeout = setTimeout(loadNowPlaying, 30000);
    })
}

$(function () {
    loadNowPlaying();
})