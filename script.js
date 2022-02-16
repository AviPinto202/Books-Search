$(document).ready(function () {

    $("#my-form").submit(function () {
        let search = $("#books").val();
        if (search == '') {
            alert("Please enter somthing in the search field")
        }
        else {
            var url = '';
            var img = '';
            var title = '';
            var author = '';

            $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function (response) {
                for (let i = 0; i < response.items.length; i++) {
                    title = $('<h4 class="center-align white-text"> ' + response.items[i].volumeInfo.title + '</h4>');

                    author = $('<h5 class="center-align white-text"> By: ' + response.items[i].volumeInfo.authors + '</h5>');

                    img = $('<img class="aligning card z-depth-5 id="dynamic"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button id="imageButton" class"btn red aligning">Read More</button>')

                    url = response.items[i].volumeInfo.imageLinks.thumbnail;

                    img.attr('src', url); // attach the image url

                    title.appendTo(".cards");
                    author.appendTo(".cards");
                    img.appendTo(".cards");

                }

            });
            return false;
        }


    });



});